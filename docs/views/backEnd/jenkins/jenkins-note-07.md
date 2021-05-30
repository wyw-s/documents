---
title: 脚本式语法部署web项目
---
> 以下内容可以作为通用模板使用，但是你需要根据自己的项目灵活修改配置；
```javascript
node {
	stage('git clone') {
		git credentialsId: '16fc630b-8061-40f8-9dda-0723a2d794c2', url: 'https://github.com/wyw-s/documents.git';
		sh 'pwd';
		sh 'ls'
	}
	stage('npm install') {
	   nodejs('node-v12.18.2') {
	       sh 'node -v && npm -v';
	       sh 'npm install';
	    }
	}
	stage('npm build') {
	   nodejs('node-v12.18.2') {
	       sh 'npm run docs:build';
	    }
	}
	stage('deploy') {
	   nodejs('node-v12.18.2') {
	       sh 'cd ./docs/.vuepress/dist';
	       sh 'tar -zcvf docs.tar.gz *';
	       sh 'ls -a && pwd'
	       sh 'mv docs.tar.gz /home/local/webview/documents';
	       sh 'cd /home/local/webview/documents';
	       sh 'tar -zxvf docs.tar.gz';
	       sh 'rm -rf docs.tar.gz';
	       sh 'ls'
	    }
	}
}
```

**正确的配置；**

```javascript
node {
	stage('git clone') {
		git credentialsId: '16fc630b-8061-40f8-9dda-0723a2d794c2', url: 'https://github.com/wyw-s/documents.git';
		sh 'pwd';
		sh 'ls'
	}
	stage('npm install') {
	   nodejs('node-v12.18.2') {
	       sh 'node -v && npm -v';
	       sh 'npm install';
	    }
	}
	stage('npm build') {
	   nodejs('node-v12.18.2') {
	       sh 'npm run docs:build';
	    }
	}
	stage('deploy') {
	   nodejs('node-v12.18.2') {
	       sh('''
	       cd ./docs/.vuepress/dist;
	       tar -zcvf docs.tar.gz *;
	       mv docs.tar.gz /home/local/webview/documents;
	       cd /home/local/webview/documents;
	       tar -zxvf docs.tar.gz;
	       rm -rf docs.tar.gz
	       pwd;
	       ls;
	       ''')
	    }
	}
}
```

::: warning

在最后的一个阶段 deploy 中，我采用了 `sh('''ls''')`三个引号的方式来写多行shell命令，之所以采用这种方式，是因为在上述第一种方法里面执行到最后一个阶段的时候你会发现，cd 这个命令虽然执行了，但是没有效果，简单的说就是你没有进入 cd 到的那个目录中去；现在不知道是 BUG 还是设计就是如此；

:::