---
title: 脚本式语法部署CRMEB系统PHP版本完整版
category: JENKINS
date: 2026-05-17
---

> `jenkins`版本`2.555.1`; 此配置适配大多数前端项目；

## 语法示例

> 已包含归档、备份、回滚功能！

```shell
node {
    // 部署新版本时自动生成版本号 v20260517_1500，并去除首尾空格
    def VERSION = "v${sh(script: 'date +%Y%m%d_%H%M', returnStdout: true).trim()}";
    def WWWROOT = "/www/wwwroot/xxxx.top";
    // 历史版本目录 
    def backupDir = "${WWWROOT}/releases";
    // 子版本文件
    def RELEASE_DIR = "${backupDir}/${VERSION}";
    def isRollback = params.Rollback;
    
    if (isRollback) {
        echo "========== 执行回滚模式 =========="
    } else {
        echo "========== 执行正常构建模式 =========="
    }
    
    properties([
        buildDiscarder(logRotator(
            numToKeepStr: '20',            // 最多保留20个构建 【artifactDaysToKeepStr: '7' 归档产物保留7天（核心参数！）】
            artifactNumToKeepStr: '10'     // 最多保留10个构建的归档产物 【daysToKeepStr: '30' 保留30天内的构建（含日志和归档）】 
        )),
        parameters([
            choice(
                name: 'BRANCH',
                choices: ['dev', 'master'],
                description: '选择构建的分支'
            ),
            choice(
                name: 'ROLLBACK_VERSION',
                choices: getAvailableVersions().toList(),
                description: '选择要回滚到的版本（仅在 ROLLBACK=true 时生效）'
            ),
            booleanParam(
                name: 'Rollback',
                defaultValue: false,
                description: '是否回滚，谨慎勾选！'
            )
        ])
    ])

    stage('Init') {
        // 使用内置命令强制删除当前工作目录
        deleteDir() 
    }
    //  正常构建时执行
    if (!isRollback) {
        stage('git clone') {
            git branch: '${BRANCH}', credentialsId: '713e4f58-0988-4af8-b70a-axxxxx', url: 'https://gitee.com/wyw-s/hxxxxxhp.git';
            sh 'echo branch: $BRANCH';
            sh 'pwd';
        }
        
        stage('build') {
          withEnv(["VERSION=${VERSION}"]) {
            sh('''
                echo "版本号: ${VERSION}";
                mkdir -p tmp;
                tar -zcf tmp/php-${VERSION}.tar.gz --exclude=.git --exclude=tmp .;
                mv tmp/php-${VERSION}.tar.gz .;
                ls -a;
            ''')
          }
        }
        
        stage('Archive PHP') {
            // 归档到Jenkins
            archiveArtifacts artifacts: "php-${VERSION}.tar.gz", fingerprint: true;
            
            echo "归档完成 END";
        }
        
        stage('Save Version Info') {
            // 保存版本信息
            writeFile file: 'php-version.txt', text: """
                BUILD_VERSION=${VERSION}
                BUILD_NUMBER=${env.BUILD_NUMBER}
                BUILD_ID=${env.BUILD_ID}
                JOB_NAME=${env.JOB_NAME}
                BUILD_TIMESTAMP=${new Date().format('yyyy-MM-dd HH:mm:ss')}
                GIT_BRANCH=${BRANCH}
            """
            archiveArtifacts artifacts: 'php-version.txt', fingerprint: true;
            
            echo "保存版本信息 END";
        }
        
        stage('Backup') {
            sh("""
                # 创建子版本目录
                mkdir -p ${RELEASE_DIR};
                # 解压到子版本目录
                tar -zxf php-${VERSION}.tar.gz -C ${RELEASE_DIR};
                cp php-version.txt ${RELEASE_DIR}/;
                
                echo "备份成功 END"
                """)
        }
        
        stage('deploy') {
            withEnv(["WWWROOT=${WWWROOT}", "RELEASE_DIR=${RELEASE_DIR}", "backupDir=${backupDir}"]) {
                sh('''
                SHARED_DIR="${WWWROOT}/shared";
                CURRENT_LINK="${WWWROOT}/current";
                
                # 链接共享目录（前端文件、运行时目录、.env配置）
                ln -snf ${SHARED_DIR}/runtime ${RELEASE_DIR}/runtime;
                ln -snf ${SHARED_DIR}/.env ${RELEASE_DIR}/.env;
                ln -snf ${SHARED_DIR}/install.lock ${RELEASE_DIR}/public/install/install.lock;
                # 链接前端后台管理系统资源
                ln -snf ${SHARED_DIR}/web/admin ${RELEASE_DIR}/public/admin;
                # 链接前端WEB
                ln -snf ${SHARED_DIR}/web/home ${RELEASE_DIR}/public/home;
                # 链接H5资源
                ln -snf ${SHARED_DIR}/web/uni/pages ${RELEASE_DIR}/public/pages;
                ln -snf ${SHARED_DIR}/web/uni/static ${RELEASE_DIR}/public/static;
                ln -snf ${SHARED_DIR}/web/uni/index.html ${RELEASE_DIR}/public/index.html;
                
                # --------------处理.user.ini START------------
                # 移动 .user.ini 文件到新的网站根目录
                # 因为无法删除，强制 rm 会报错只能通过移动该文件间接解决
                if [ -f "${CURRENT_LINK}/public/.user.ini" ]; then
                    chattr -i "${CURRENT_LINK}/public/.user.ini" && mv "${CURRENT_LINK}/public/.user.ini" "${RELEASE_DIR}/public";
                fi
                # --------------处理.user.ini END------------
                
                # 快速切换软连接（原子操作，瞬间完成）
                ln -snf ${RELEASE_DIR} ${CURRENT_LINK};
                
                # --------------处理.user.ini START------------
                # 移动成功后，如果目标文件存在，重新加锁保护
                if [ -f "${CURRENT_LINK}/public/.user.ini" ]; then
                    chattr +i "${CURRENT_LINK}/public/.user.ini"
                fi
                # --------------处理.user.ini END------------
                
                # 保留最近10个版本，删除v开头的旧版本
                cd ${backupDir};
                ls -t1d -- v* | tail -n +11 | xargs -r rm -rf;
                
                echo "文件替换成功 END"
            ''')
            }
        }
  }
  
    if (isRollback) {
        stage('Rollback') {
            withEnv(["WWWROOT=${WWWROOT}", "ROLLBACK_VERSION=${ROLLBACK_VERSION}", "backupDir=${backupDir}"]) {
                sh('''
                    # 检查备份是否存在
                    if [ ! -d "${backupDir}/${ROLLBACK_VERSION}" ]; then
                        echo "错误：版本 ${ROLLBACK_VERSION} 不存在于备份目录"
                        exit 1
                    fi
                    
                    SHARED_DIR="${WWWROOT}/shared";
                    CURRENT_LINK="${WWWROOT}/current";
                    CURRENT_RELEASE_DIR="${backupDir}/${ROLLBACK_VERSION}";
                    
                    # --------------处理.user.ini START------------
                    # 移动 .user.ini 文件到新的网站根目录
                    # 因为无法删除，强制 rm 会报错只能通过移动该文件间接解决
                    if [ -f "${CURRENT_LINK}/public/.user.ini" ]; then
                        chattr -i "${CURRENT_LINK}/public/.user.ini" && mv "${CURRENT_LINK}/public/.user.ini" "${CURRENT_RELEASE_DIR}/public";
                    fi
                    # --------------处理.user.ini END------------
                    
                    # 快速切换软连接（原子操作，瞬间完成）
                    ln -snf "${CURRENT_RELEASE_DIR}" "${CURRENT_LINK}";
                    
                    # --------------处理.user.ini START------------
                    # 移动成功后，如果目标文件存在，重新加锁保护
                    if [ -f "${CURRENT_LINK}/public/.user.ini" ]; then
                        chattr +i "${CURRENT_LINK}/public/.user.ini"
                    fi
                    # --------------处理.user.ini END------------
                    
                    echo "回滚完成：${ROLLBACK_VERSION}"
                ''')
            }
            
            // 读取版本元数据
            def metadata = readPropertiesManual("${backupDir}/${ROLLBACK_VERSION}/php-version.txt");
            // 记录回滚信息
            sh """echo "HLZ: ${ROLLBACK_VERSION}" > ${WWWROOT}/shared/php-version.txt"""
        }
        
        stage('Verify') {
            // 验证回滚是否成功
            sh """
                # 替换成自己的网站
                # curl -s https://huxxxxeh.top/version.txt
            """
        }
    }

  stage('service restart') {
      sh('''
        # 重新加载 必须要带 -c 参数；
        # supervisorctl -c /etc/supervisor/supervisord.conf reload;
        # 重新启动
        supervisorctl -c /etc/supervisor/supervisord.conf restart hualiangzan:*;
        # 查看状态
        # supervisorctl -c /etc/supervisor/supervisord.conf status hualiangzan:*;
        echo "服务重启成功 END"
          ''')
  }
}

// 辅助函数：获取可用版本列表
def getAvailableVersions() {
    def versions = []
    def backupDir = "/www/wwwroot/xxxx.top/releases";
    def result = sh(script: "ls -t ${backupDir} 2>/dev/null || echo ''", returnStdout: true).trim();
    
    if (result) {
        versions = result.split('\n')
    }
    
    echo "历史版本: ${versions}";
    
    return versions
}

// 辅助函数：解析key=value
def readPropertiesManual(String filePath) {
    def props = [:]
    def lines = readFile(filePath).split('\n')
    
    lines.each { line ->
        line = line.trim()
        if (line && !line.startsWith('#')) {
            def parts = line.split('=', 2)
            if (parts.length == 2) {
                props[parts[0].trim()] = parts[1].trim()
            }
        }
    }
    
    return props
}

```
