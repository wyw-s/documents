---
title: 脚本式语法部署web项目
---

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

正确的配置；

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

