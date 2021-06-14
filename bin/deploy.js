
const path = require('path');
const ora = require('ora');
const { Client } = require('ssh2');
require('dotenv').config()
const conn = new Client();
const spinner = ora({
  color: 'red',
  prefixText: '上传中',
  spinner: 'bouncingBar'
});

conn.on('ready', () => {
  console.log('客户端已准备');
  const command = `cd /home/local/webview/documents; ls -al; rm -rf *;`
  conn.exec(command, (err, stream) => {
    if (err) throw err;
    stream.on('close', () => {
      console.info('远程 documents 目录已删除')
      conn.sftp((err, sftp) => {
        if (err) throw err;
        const localPath = path.resolve(process.cwd(), './dist.zip');
        spinner.start();
        sftp.fastPut(localPath, `/home/local/webview/documents/dist.zip`, (err1) => {
          if (err1) throw err1;
          spinner.succeed('\n上传完成');
          console.info("解压中...")
          conn.exec('cd /home/local/webview/documents; unzip dist.zip; ls -al; rm -f dist.zip;', (err2, stream2) => {
            if (err2) throw err2;
            stream2.on('close', () => {
              console.info('解压完成')
              conn.end();
            }).on('data', (data) => {
              console.log(data);
            })
          })
        });
      });
    }).on('data', (data) => {
      console.log('STDOUT: ' + data);
    }).stderr.on('data', (data) => {
      console.log('STDERR: ' + data);
    });
  })
}).connect({
  host: process.env.server_host,
  port: process.env.server_port,
  username: process.env.server_userName,
  password: process.env.server_password
});
