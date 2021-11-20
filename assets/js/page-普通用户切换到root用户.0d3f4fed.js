(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{1010:function(s,a,n){"use strict";n.r(a);var t=n(1),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("blockquote",[n("p",[s._v("在使用ubantu的Linux系统时，终端顶部一直提示："),n("code",[s._v('To run a command as administrator (user "root"), use "sudo <command>".See "man sudo_root" for details.')]),s._v(",而且你会发你进入不了"),n("code",[s._v("root")]),s._v("目录，有权限限制的；由于 "),n("code",[s._v("Ubuntu")]),s._v(" 是基于 "),n("code",[s._v("Debian")]),s._v(" 的 "),n("code",[s._v("linux")]),s._v(" 操作系统，在默认的情况下，是没有超级用户(superuser, root)的，但有些系统操作必须有超级用户的权限才能进行，如手动释放内存等。 在其他 linux 操作系统 (如 fedora) 下，可以使用 su 切换到超级用户。 当输入 su 命令后， 系统会要求输入 root 的密码。 可是，在 "),n("code",[s._v("Ubuntu")]),s._v(" 下我们根本不知道 root 的密码是什么。 这样，在 Ubuntu 下切换到超级用户需要使用其他方法，")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 没有权限")]),s._v("\nwangyawei@yaweidediannao:/$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" root/\nbash: cd: root/: Permission denied\nwangyawei@yaweidediannao:/$\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"sudo命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sudo命令"}},[s._v("#")]),s._v(" "),n("code",[s._v("sudo")]),s._v("命令；")]),s._v(" "),n("blockquote",[n("p",[s._v("Linux sudo命令以系统管理者的身份执行指令，也就是说，经由 sudo 所执行的指令就好像是 root 亲自执行。")])]),s._v(" "),n("h3",{attrs:{id:"语法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudo -V 显示版本编号")]),s._v("\nwangyawei@yaweidediannao:/$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -V\nSudo version "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.8")]),s._v(".31\nSudoers policy plugin version "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.8")]),s._v(".31\nSudoers "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" grammar version "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("46")]),s._v("\nSudoers I/O plugin version "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.8")]),s._v(".31\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudo -h 显示版本编号及指令的使用方式说明")]),s._v("\nwangyawei@yaweidediannao:/$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -h\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" - execute a "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" as another user\n\nusage: "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -h "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" -K "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" -k "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" -V\nusage: "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -v "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-AknS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-g group"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-h host"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-p prompt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-u user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nusage: "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -l "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-AknS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-g group"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-h host"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-p prompt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-U user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-u user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("command"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nusage: "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-AbEHknPS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-r role"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-t type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-C num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-g group"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-h host"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-p prompt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-T timeout"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-u user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("VAR"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("command"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nusage: "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -e "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-AknS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-r role"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-t type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-C num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-g group"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-h host"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-p prompt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-T timeout"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-u user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\nOptions:\n  -A, --askpass                 use a helper program "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" password prompting\n  -b, --background              run "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the background\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("省略\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudo -l 显示出自己（执行 sudo 的使用者）的权限")]),s._v("\nwangyawei@yaweidediannao:/$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -l\nMatching Defaults entries "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" wangyawei on yaweidediannao:\n    env_reset, mail_badpass, "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("secure_path")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/sbin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(":/usr/local/bin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(":/usr/sbin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(":/usr/bin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(":/sbin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(":/bin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(":/snap/bin\n\nUser wangyawei may run the following commands on yaweidediannao:\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ALL "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ALL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ALL\nwangyawei@yaweidediannao:/$\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br")])]),n("h3",{attrs:{id:"sudo-i"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sudo-i"}},[s._v("#")]),s._v(" "),n("code",[s._v("sudo -i")])]),s._v(" "),n("blockquote",[n("p",[n("code",[s._v("sudo")]),s._v(" 是 "),n("code",[s._v("su")]),s._v(" 的加强版，意思是 "),n("code",[s._v("do something as the supervisor")]),s._v("。 不需要密码就可以得到 root 的权限。 但是它也有很多限制，比如，在默认的情况下，只能在 5 分钟之内使用 root 权限。")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("wangyawei@yaweidediannao:/$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -i\nWelcome to Ubuntu "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20.04")]),s._v(".2 LTS "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GNU/Linux "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.4")]),s._v(".72-microsoft-standard-WSL2 x86_64"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n * Documentation:  https://help.ubuntu.com\n * Management:     https://landscape.canonical.com\n * Support:        https://ubuntu.com/advantage\n\n  System information as of Sat Jun  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":57:15 CST "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("\n\n  System load:  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.08")]),s._v("               Processes:             "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v("\n  Usage of /:   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.4")]),s._v("% of "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("250")]),s._v(".98GB   Users logged in:       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  Memory usage: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("%                 IPv4 address "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" eth0: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.19")]),s._v(".226.190\n  Swap usage:   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" update can be installed immediately.\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" of these updates are security updates.\nTo see these additional updates run: "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" list --upgradable\n\n\nThe list of available updates is "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" than a week old.\nTo check "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" new updates run: "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update\n\n\nThis message is shown once a day. To disable it please create the\n/root/.hushlogin file.\nroot@yaweidediannao:~"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("h2",{attrs:{id:"su"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#su"}},[s._v("#")]),s._v(" "),n("code",[s._v("su")])]),s._v(" "),n("blockquote",[n("p",[s._v("如果想一直使用"),n("code",[s._v("root")]),s._v("权限，还是要使用 "),n("code",[s._v("su")]),s._v("， 还是要得到 "),n("code",[s._v("root")]),s._v(" 密码的。 用 "),n("code",[s._v("sudo passwd root")]),s._v(" 可以设置 root 的密码。 之后就可以自由使用 "),n("code",[s._v("su")]),s._v(" 命令啦。")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("wangyawei@yaweidediannao:/$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" root\nNew password:\nRetype new password:\npasswd: password updated successfully\nwangyawei@yaweidediannao:/$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" root\nPassword:\nroot@yaweidediannao:/"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);