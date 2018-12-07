# quantaowechat

> 券淘公众号

### 微信公众号开发
* vue开发微信公众号<https://www.jianshu.com/p/5ae97f0bd31e?utm_campaign=haruki&utm_content=note&utm_medium=reader_share&utm_source=weixin>
* 如何在Vue项目中使用vw实现移动端适配<https://www.jianshu.com/p/1f1b23f8348f>
* vue做微信公众号分享,支付<https://blog.csdn.net/qq_36977381/article/details/78903308>
* 微信公众号+vue+微信支付<https://blog.csdn.net/xxuncle/article/details/80997796>
* 如何设置微信公众号的测试号的菜单<https://blog.csdn.net/hqsary/article/details/82347862>

### 简介
```

* 登录、退出登录
* 修改密码、记住密码
* 菜单管理
* 系统参数
* 权限节点
* 岗位管理
* 部门管理
* 用户组管理
* 用户管理
```

### 开发依赖
* vue <https://vuefe.cn/v2/guide/>
* element-ui@1.1.3  <http://element.eleme.io/1.1/#/zh-CN/component/installation>
* axios  <https://github.com/mzabriskie/axios>
* fontawesome <http://fontawesome.io/icons/>
* js-cookie  <https://github.com/js-cookie/js-cookie>
* lockr  <https://github.com/tsironis/lockr>
* lodash  <http://lodashjs.com/docs/>
* moment  <http://momentjs.cn/>


### 数据交互
数据交互通过axios以及RESTful架构来实现

用户校验通过登录返回的auth_key放在header

值得注意的一点是：跨域的情况下，会有预请求OPTION的情况

附上接口文档：<http://rap.taobao.org/workspace/myWorkspace.do?projectId=15385#128405>


### 前端部署

1.安装node.js
  前端部分是基于node.js上运行的，所以必须先安装node.js，版本要求为6.9.0以上(推荐安装官方推荐版本)，下载地址：https://nodejs.org/zh-cn/

2.使用npm安装依赖
  进入frontindex目录，执行命令安装依赖：npm install

3.修改内部配置
  修改请求地址或域名：build/webpack.base.conf.js里修改DEV_HOST（开发环境服务端地址，默认localhost）
  修改自定义端口：config/index.js里面的dev对象的port参数（默认8080，不建议修改）

4.运行前端
  npm run dev

注意：前端服务启动，默认会占用8080端口，所以在启动前端服务之前，请确认8080端口没有被占用。

* 程序运行之前需搭建好Server端
  vueThink的后端搭建请参考这里（https://github.com/honraytech/VueThink/tree/master/php），此处不再多述。
