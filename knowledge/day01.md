# 第一天

## HTML

- 引入网站标题图标<link rel="icon" href="图标地址">
- 引入CSS样式<link type="text/css" rel="stylesheet" herf="CSS文件地址">
- 引入外部jQuery文件<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script>
- 引入外部js文件<script type="text/javascript" src="js文件地址"></script>

## CSS

- 去除无序列表黑点用list-style：none;
- line-height控制文本列向居中
- text-align控制文本的位置，center居中
- box-shadow阴影，参数：水平阴影位置，垂直阴影位置，模糊距离，阴影颜色（inset可选由外置阴影变成内置阴影）
- text-shadow同上
- border-radius圆角控制
- input:focus{outline:none}控制聚焦文本输入框时外边框的颜色为没有
- cursor:pointer鼠标浮上去变成手的形状

## JS

- $(function(){})
- fadeOut(300)
- fadeIn(300)

## git

- git init初始化
- git status查看当前版本库状态（更改了哪些，有哪些提交了等等）
- git add 文件夹或文件名  b表示将文件添加到仓库
- git add .表示将仓库目录下的全部文件添加到仓库
- git commit -m "注释" 表示将暂存区的代码一并提交到仓库
- 创建SSH KEY。先看一下你C盘用户目录下有没有.ssh目录，有的话看下里面有没有id_rsa和id_rsa.pub这两个文件，有就跳到下一步，没有就通过下面命令创建   
  $ ssh-keygen -t rsa -C "youremail@example.com"
- 登录Github,找到右上角的图标，打开点进里面的Settings，再选中里面的SSH and GPG KEYS，点击右上角的New SSH key，然后Title里面随便填，再把刚才id_rsa.pub里面的内容复制到Title下面的Key内容框里面，最后点击Add SSH key，这样就完成了SSH Key的加密
- 点New repository来创建一个新的仓库
- 在本地命令行输入$ git remote add origin 仓库地址（关联Git仓库和本地仓库）
  如果提示有remote origin already exists.的错误（出现这个错误的原因是：远程仓库已经有一个名为origin的仓库）
  解决办法：先删除（ git remote rm origin）再添加（ git remote add origin 仓库地址）
- 由于新建的远程仓库是空的，所以要加上-u这个参数，等远程仓库里面有了内容之后，下次再从本地库上传内容的时候只需下面这样就可以了：git push origin master
- 另外，这里有个坑需要注意一下，就是在上面第七步创建远程仓库的时候，如果你勾选了Initialize this repository with a README（就是创建仓库的时候自动给你创建一个README文件），那么到了第九步你将本地仓库内容推送到远程仓库的时候就会报一个failed to push some refs to ！
- 这是由于你新创建的那个仓库里面的README文件不在本地仓库目录中，这时我们可以通过以下命令先将内容合并一下：
  $ git pull --rebase origin master    这时你再push就能成功了。