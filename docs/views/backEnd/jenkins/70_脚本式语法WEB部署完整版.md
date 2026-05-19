---
title: 脚本式语法WEB部署完整版
category: JENKINS
date: 2026-05-17
---

> `jenkins`版本`2.555.1`; 此配置适配大多数前端项目；

## 非回滚模式

> 已包含归档、备份功能！

```shell
node {
    // 部署新版本时自动生成版本号 v20260517_1500，并去除首尾空格
    def VERSION = "v${sh(script: 'date +%Y%m%d_%H%M', returnStdout: true).trim()}";
    def backupDir = "/data/jenkins_backup/${env.JOB_NAME}";
    def WWWROOT = "/www/wwwroot/test.yxxxxh.top";
    
    properties([
        buildDiscarder(logRotator(
            numToKeepStr: '50',            // 最多保留50个构建 【artifactDaysToKeepStr: '7' 归档产物保留7天（核心参数！）】
            artifactNumToKeepStr: '10'     // 最多保留10个构建的归档产物 【daysToKeepStr: '30' 保留30天内的构建（含日志和归档）】 
        )),
        parameters([
            choice(
                name: 'BRANCH',
                choices: ['dev', 'master'],
                description: '选择构建的分支'
            )
        ])
    ])
  
	stage('git clone') {
		git branch: '${BRANCH}', credentialsId: '713e4f58-0988-4af8-b70a-a88xxxx', url: 'https://gitee.com/wyw-s/hualixxxx.git';
		sh 'echo branch: $BRANCH';
		sh 'pwd';
	}
	
	stage('npm install') {
	   nodejs('node-v14.21.3') {
	       sh 'node -v && npm -v';
	       sh 'npm install';
	       sh 'echo "依赖安装完成"';
	    }
	}
	
	stage('npm build') {
	   nodejs('node-v14.21.3') {
	       sh 'npm run build';
	       sh 'echo "打包完成"';
	   }
	}
	
	stage('Archive Dist') {
	    withEnv(["VERSION=${VERSION}"]) {
	       sh('''
            echo "版本号: ${VERSION}";
            # 压缩为带版本号的名称
            tar -czf dist-${VERSION}.tar.gz -C dist .;
            ls -a;
        ''')
	   }
	   
	    // 归档到Jenkins
        archiveArtifacts artifacts: "dist-${VERSION}.tar.gz", fingerprint: true;
        // 同时归档dist文件夹（保留最新的）
        archiveArtifacts artifacts: 'dist/**/*', fingerprint: true;
        
        echo "归档完成 END";
	}
	
	stage('Save Version Info') {
        // 保存版本信息
        writeFile file: 'version.txt', text: """
            BUILD_VERSION=${VERSION}
            BUILD_NUMBER=${env.BUILD_NUMBER}
            BUILD_ID=${env.BUILD_ID}
            JOB_NAME=${env.JOB_NAME}
            BUILD_TIMESTAMP=${new Date().format('yyyy-MM-dd HH:mm:ss')}
            GIT_BRANCH=${BRANCH}
        """
        archiveArtifacts artifacts: 'version.txt', fingerprint: true;
        
        echo "保存版本信息 END";
    }
    
    stage('Backup') {
        // 复制到备份目录
        withEnv(["backupDir=${backupDir}", "VERSION=${VERSION}"]) {
           sh("""
                mkdir -p ${backupDir}/${VERSION};
                cp dist-${VERSION}.tar.gz ${backupDir}/${VERSION}/;
                cp version.txt ${backupDir}/${VERSION}/;
                cd ${backupDir}/${VERSION};
                ls -a;
                
                # 保留最近10个版本，删除v开头的旧版本
                cd ${backupDir};
                ls -t1d -- v* | tail -n +11 | xargs -r rm -rf;
                
                echo "备份完成 END：${backupDir}/${VERSION}";
            """)
        }
    }
    
    stage('Deploy') {
        withEnv(["VERSION=${VERSION}", "WWWROOT=${WWWROOT}"]) {
            sh("""
                # 删除网站根目录中的所有前端资源
                rm -rf ${WWWROOT}/*;
                # 移动当前版本包并解压
                mv dist-${VERSION}.tar.gz ${WWWROOT};
                cd ${WWWROOT};
                tar -zxf dist-${VERSION}.tar.gz;
                rm -rf dist-${VERSION}.tar.gz;
                ls -a;
                
                echo "部署成功 END"
            """)
        }
    }
}
```

> 注意事项：
>
> 1. `WWWROOT`需要修改为自己的网站根目录;
> 2. git 凭据 `credentialsId`需要自己在`jenkins`中进行全局凭证设置，用户名密码模式；
> 3. `node-v14.21.3`需要修改为自己项目对应的前端node版本，先安装`nodejs`插件，然后在全局工具中配置；
> 4. 前端打包的资源在前端项目的根目录下的`dist`文件中；如果不是请修改；

## 回滚模式

> 已包含归档、备份功能！

```sh
node {
    // 部署新版本时自动生成版本号 v20260517_1500，并去除首尾空格
    def VERSION = "v${sh(script: 'date +%Y%m%d_%H%M', returnStdout: true).trim()}";
    def backupDir = "/data/jenkins_backup/${env.JOB_NAME}";
    def WWWROOT = "/www/wwwroot/test.yahweh.top";
    def isRollback = params.Rollback;
    
    if (isRollback) {
        echo "========== 执行回滚模式 =========="
    } else {
        echo "========== 执行正常构建模式 =========="
    }
    
    properties([
        buildDiscarder(logRotator(
            numToKeepStr: '50',            // 最多保留50个构建 【artifactDaysToKeepStr: '7' 归档产物保留7天（核心参数！）】
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
            ),
        ])
    ])
  
    //  正常构建时执行
    if (!isRollback) {
      	stage('git clone') {
    		git branch: '${BRANCH}', credentialsId: '713e4f58-0988-4af8-b70a-a88xxxxxa', url: 'https://gitee.com/wyw-s/hxxxxxgzan-pc.git';
    		sh 'echo branch: $BRANCH';
    		sh 'pwd';
    	}
	
    	stage('npm install') {
    	   nodejs('node-v14.21.3') {
    	       sh 'node -v && npm -v';
    	       sh 'npm install';
    	       sh 'echo "依赖安装完成"';
    	    }
    	}
	
    	stage('npm build') {
    	   nodejs('node-v14.21.3') {
    	       sh 'npm run build';
    	       sh 'echo "打包完成"';
    	   }
    	}
	
    	stage('Archive Dist') {
    	    withEnv(["VERSION=${VERSION}"]) {
        	    sh('''
                    echo "版本号: ${VERSION}";
                    # 压缩为带版本号的名称
                    tar -czf dist-${VERSION}.tar.gz -C dist .;
                    ls -a;
                ''')
    	    }
	   
    	    // 归档到Jenkins
            archiveArtifacts artifacts: "dist-${VERSION}.tar.gz", fingerprint: true;
            // 同时归档dist文件夹（保留最新的）
            archiveArtifacts artifacts: 'dist/**/*', fingerprint: true;
            
            echo "归档完成 END";
    	}
	
    	stage('Save Version Info') {
            // 保存版本信息
            writeFile file: 'version.txt', text: """
                BUILD_VERSION=${VERSION}
                BUILD_NUMBER=${env.BUILD_NUMBER}
                BUILD_ID=${env.BUILD_ID}
                JOB_NAME=${env.JOB_NAME}
                BUILD_TIMESTAMP=${new Date().format('yyyy-MM-dd HH:mm:ss')}
                GIT_BRANCH=${BRANCH}
            """
            archiveArtifacts artifacts: 'version.txt', fingerprint: true;
            
            echo "保存版本信息 END";
        }
    
        stage('Backup') {
            // 复制到备份目录
            withEnv(["backupDir=${backupDir}", "VERSION=${VERSION}"]) {
               sh("""
                    mkdir -p ${backupDir}/${VERSION};
                    cp dist-${VERSION}.tar.gz ${backupDir}/${VERSION}/;
                    cp version.txt ${backupDir}/${VERSION}/;
                    cd ${backupDir}/${VERSION};
                    ls -a;
                    
                    # 保留最近10个版本，删除v开头的旧版本
                    cd ${backupDir};
                    ls -t1d -- v* | tail -n +11 | xargs -r rm -rf;
                    
                    echo "备份完成 END：${backupDir}/${VERSION}";
                """)
            }
        }
    
        stage('Deploy') {
            withEnv(["VERSION=${VERSION}", "WWWROOT=${WWWROOT}"]) {
                sh("""
                    # 删除网站根目录中的所有前端资源
                    rm -rf ${WWWROOT}/*;
                    # 移动当前版本包并解压
                    mv dist-${VERSION}.tar.gz ${WWWROOT};
                    cd ${WWWROOT};
                    tar -zxf dist-${VERSION}.tar.gz;
                    rm -rf dist-${VERSION}.tar.gz;
                    ls -a;
                    
                    echo "部署成功 END"
                """)
            }
        }
  }
  
    // 回滚模式执行
    if (isRollback) {
        stage('Rollback') {
            withEnv(["VERSION=${VERSION}", "ROLLBACK_VERSION=${ROLLBACK_VERSION}", "backupDir=${backupDir}", "WWWROOT=${WWWROOT}"]) {
                sh("""
                    # 检查备份是否存在
                    if [ ! -d "${backupDir}/${ROLLBACK_VERSION}" ]; then
                        echo "错误：版本 ${ROLLBACK_VERSION} 不存在于备份目录"
                        exit 1
                    fi
                    
                    # 从备份目录获取文件
                    cp ${backupDir}/${ROLLBACK_VERSION}/dist-${ROLLBACK_VERSION}.tar.gz .
                    
                    # 删除网站根目录中的所有前端资源
                    rm -rf ${WWWROOT}/*;
                    # 移动备份版本包并解压
                    mv dist-${ROLLBACK_VERSION}.tar.gz ${WWWROOT};
                    cd ${WWWROOT};
                    tar -xzf dist-${ROLLBACK_VERSION}.tar.gz;
                    rm -rf dist-${ROLLBACK_VERSION}.tar.gz;
                    ls -a;
                    
                    echo "回滚完成：${ROLLBACK_VERSION}"
                    """)
                    
                // 读取版本元数据
                def metadata = readPropertiesManual("${backupDir}/${ROLLBACK_VERSION}/version.txt");
                // 记录回滚信息
                sh """echo "${ROLLBACK_VERSION}" > ${WWWROOT}/version.txt"""
                echo "原始构建: ${metadata.BUILD_NUMBER}"
                echo "Git分支: ${metadata.GIT_BRANCH}"
                echo "回滚到: ${metadata.BUILD_VERSION}"
            }
        }
        
        stage('Verify') {
            // 验证回滚是否成功
            sh """
                # 替换成自己的网站
                # curl -s https://huxxxxeh.top/version.txt
            """
        }
    }
    
}

// 辅助函数：获取可用版本列表
def getAvailableVersions() {
    def versions = ['1', '2']
    def backupDir = "/data/jenkins_backup/${env.JOB_NAME}";
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

> 注意事项：
>
> 1. `WWWROOT`需要修改为自己的网站根目录;
> 2. git 凭据 `credentialsId`需要自己在`jenkins`中进行全局凭证设置，用户名密码模式；
> 3. `node-v14.21.3`需要修改为自己项目对应的前端node版本，先安装`nodejs`插件，然后在全局工具中配置；
> 4. 前端打包的资源在前端项目的根目录下的`dist`文件中；如果不是请修改；
