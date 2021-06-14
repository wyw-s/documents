const path = require('path');
const fs = require('fs');
const JSZIP = require('jszip');
const ora = require('ora');

// 新建一个zip压缩对象实例
const zip = new JSZIP();

const spinner = ora({
  color: 'red',
  prefixText: '压缩中',
  spinner: 'bouncingBar'
});

spinner.start();
pushZip(zip, path.resolve(process.cwd(), './dist'));

// 异步生成压缩文件
zip.generateAsync({
  type: 'nodebuffer',
  compression: 'DEFLATE',
  compressionOptions: {
    level: 9
  }
}).then(function(content) {
  // 保存到本地
  fs.writeFile(path.resolve(process.cwd(), './dist.zip'), content, err => {
    if (err) throw err;
    spinner.succeed(`\n文件已保存 路径：${path.resolve(process.cwd(), './dist.zip')}`);
  });
});

function pushZip(floder, pPath) {
  const files = fs.readdirSync(pPath, {withFileTypes: true});
  files.forEach((dirent) => {
    // 替换分隔符，兼容linux
    let filePath = path.resolve(pPath, dirent.name).split(path.sep).join('/');
    if (dirent.isDirectory()) {
      // 压缩一个文件夹
      let zipFloder = zip.folder(filePath.replace(`E:/documents/dist/`, ''));
      pushZip(zipFloder, filePath);
    } else {
      // 压缩一个文件
      floder.file(dirent.name, fs.readFileSync(filePath));
    }
  });
}
