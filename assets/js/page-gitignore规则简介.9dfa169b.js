(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{1015:function(v,_,e){"use strict";e.r(_);var s=e(1),a=Object(s.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h2",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[v._v("#")]),v._v(" 介绍；")]),v._v(" "),e("blockquote",[e("p",[v._v("概述："),e("code",[v._v("git")]),v._v("版本管理工具大家都用过，但时有时候我们不需要提交所有的文件到版本管理中，比如："),e("code",[v._v("node_modules")]),v._v("等；")]),v._v(" "),e("p",[v._v("​\t\t\t\t这时我们便会用到"),e("code",[v._v(".gitignore")]),v._v("文件，来配置规则以忽略我们不需要追踪的文件；")])]),v._v(" "),e("h2",{attrs:{id:"规则说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#规则说明"}},[v._v("#")]),v._v(" 规则说明；")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("空行不匹配任何文件，因此可以用作分隔符以提高可读性 ；")])]),v._v(" "),e("li",[e("p",[v._v("以"),e("code",[v._v("＃")]),v._v("开头的行用作注释。")])]),v._v(" "),e("li",[e("p",[v._v("斜杠"),e("code",[v._v("/")]),v._v("用作目录分隔符。分隔符可能出现在开始，中间或结尾。")])]),v._v(" "),e("li",[e("p",[v._v("如果开头或中间（或两者都有）有分隔符，则该匹配是相对于特定"),e("code",[v._v(".gitignore")]),v._v("文件本身的"),e("strong",[v._v("目录级别")]),v._v("的。")])])]),v._v(" "),e("ul",[e("li",[e("p",[e("code",[v._v("/bar/foo")]),v._v("和（"),e("code",[v._v("bar/foo")]),v._v("同等效果）仅匹配和``.gitignore"),e("code",[v._v("同级的根目录下的")]),v._v("/bar/foo"),e("code",[v._v(",不匹配")]),v._v("/bar/foo.text`。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("/foo/bar.*")]),v._v("匹配和``.gitignore"),e("code",[v._v("同级的根目录下的")]),v._v("/foo/bar"),e("code",[v._v("和")]),v._v("/foo/bar.text`。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("foo.*")]),v._v("仅匹配同级目录下的所有"),e("code",[v._v("foo.*")]),v._v("文件。例："),e("code",[v._v("foo.text")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("bar/")]),v._v("和"),e("code",[v._v("bar")]),v._v("同等效果：匹配同级目录下的所有"),e("code",[v._v("bar")]),e("strong",[v._v("文件夹")]),v._v("。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("/bar")]),v._v("仅匹配同级根目录下"),e("code",[v._v("bar")]),v._v("文件。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("foo/*")]),v._v("匹配"),e("code",[v._v("foo/test.json")]),v._v("（常规文件）和"),e("code",[v._v("foo/bar")]),v._v("（目录），但不匹配"),e("code",[v._v("foo / bar / hello.c")]),v._v("。")])])]),v._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[v._v("前导 "),e("code",[v._v("**")]),v._v("后跟斜杠表示在所有目录中均匹配。")])]),v._v(" "),e("ul",[e("li",[e("code",[v._v("**/foo")]),v._v("与文件 "),e("code",[v._v("foo")]),v._v("相同的任何位置都匹配文件夹 "),e("code",[v._v("foo")]),v._v("。 "),e("code",[v._v("**/foo/bar")]),v._v(" "),e("code",[v._v("bar")]),v._v("会在目录 "),e("code",[v._v("foo")]),v._v(" 正下方的任何位置匹配文件夹。")])]),v._v(" "),e("ol",{attrs:{start:"6"}},[e("li",[e("p",[v._v("尾部的“ "),e("code",[v._v("/**")]),v._v("”与内部的所有内容匹配。例如，“ "),e("code",[v._v("abc/**")]),v._v("”将目录“ "),e("code",[v._v("abc")]),v._v("” 内的所有文件（相对于"),e("code",[v._v(".gitignore")]),v._v("文件位置）以无限深度进行匹配。")])]),v._v(" "),e("li",[e("p",[v._v("斜杠后跟两个连续的星号，然后斜杠匹配零个或多个目录")])])]),v._v(" "),e("ul",[e("li",[v._v("例如，“ "),e("code",[v._v("a/**/b")]),v._v("”匹配“ "),e("code",[v._v("a/b")]),v._v("”，“ "),e("code",[v._v("a/x/b")]),v._v("”，“ "),e("code",[v._v("a/x/y/b")]),v._v("”等。")])]),v._v(" "),e("ol",{attrs:{start:"8"}},[e("li",[e("p",[e("strong",[v._v("例子")]),v._v("：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("hello.*")]),v._v("匹配名称以"),e("code",[v._v("hello")]),v._v("开头的任何文件。如果只想将此限制于目录而不是其子目录，则可以在模式前面加上斜杠，即"),e("code",[v._v("/hello.*")]),v._v("；模式现在匹配"),e("code",[v._v("hello.txt")]),v._v("，"),e("code",[v._v("hello.c")]),v._v("但是不 匹配"),e("code",[v._v("a/hello.java")]),v._v("。")])])])]),v._v(" "),e("h2",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[v._v("#")]),v._v(" 使用；")]),v._v(" "),e("ol",[e("li",[v._v("新建："),e("code",[v._v(".gitignore")]),v._v("文件；")]),v._v(" "),e("li",[v._v("配置规则；")])]),v._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[v._v(".DS_Store\nnode_modules\n/dist\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# local env files")]),v._v("\n.env.local\n.env.*.local\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# Log files")]),v._v("\nnpm-debug.log*\nyarn-debug.log*\nyarn-error.log*\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# Editor directories and files")]),v._v("\n.idea\n.vscode\n*.suo\n*.ntvs*\n*.njsproj\n*.sln\n*.sw?\n\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br"),e("span",{staticClass:"line-number"},[v._v("2")]),e("br"),e("span",{staticClass:"line-number"},[v._v("3")]),e("br"),e("span",{staticClass:"line-number"},[v._v("4")]),e("br"),e("span",{staticClass:"line-number"},[v._v("5")]),e("br"),e("span",{staticClass:"line-number"},[v._v("6")]),e("br"),e("span",{staticClass:"line-number"},[v._v("7")]),e("br"),e("span",{staticClass:"line-number"},[v._v("8")]),e("br"),e("span",{staticClass:"line-number"},[v._v("9")]),e("br"),e("span",{staticClass:"line-number"},[v._v("10")]),e("br"),e("span",{staticClass:"line-number"},[v._v("11")]),e("br"),e("span",{staticClass:"line-number"},[v._v("12")]),e("br"),e("span",{staticClass:"line-number"},[v._v("13")]),e("br"),e("span",{staticClass:"line-number"},[v._v("14")]),e("br"),e("span",{staticClass:"line-number"},[v._v("15")]),e("br"),e("span",{staticClass:"line-number"},[v._v("16")]),e("br"),e("span",{staticClass:"line-number"},[v._v("17")]),e("br"),e("span",{staticClass:"line-number"},[v._v("18")]),e("br"),e("span",{staticClass:"line-number"},[v._v("19")]),e("br"),e("span",{staticClass:"line-number"},[v._v("20")]),e("br"),e("span",{staticClass:"line-number"},[v._v("21")]),e("br"),e("span",{staticClass:"line-number"},[v._v("22")]),e("br")])])])}),[],!1,null,null,null);_.default=a.exports}}]);