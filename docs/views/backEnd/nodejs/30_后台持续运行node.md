---
title: 后台持续运行node
category: nodejs
autoGroup-7: nodejs扩展
tags:
  - nodejs
---

#### 1、后台持续运行`nodejs`

```bash
# 持续运行node并把信息输出到指定的文件中
nohup npm run dev >myout.file 2>&1 &
```



