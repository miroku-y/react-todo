# dva + koa2

### 简介
    这是一个由dva + koa2实现的同构项目，dva基于了redux、redux-saga、react-router，可以非常完美的用于同构项目中，可想而知一个中大型项目的同构，用这三种拼起来写➕ koa2怎么可以看的懂？

### 快速上手
    1.[前端](https://github.com/dvajs/dva/blob/master/README_zh-CN.md)
    2.后端

### 步骤
    1.先新建一个前端文件夹frontend
    2.新建一个后端文件夹 backtend, 并npm init
    3.在sever下新建app.js
    4.在app.js中进行简单的配置，让起运行
    5.中间件的学习，koa2中使用了asnyc wait ,asnyc表示异步，wait配合next参数使用，next表示的意思是将程序的处理操作交给下一个中间件来使用，use方法是注册中间件
    6.调试了1天的问题，连库、前台、后天启动都可以，但是就是请求无法成功，将后台监听的端口号于前台的设为 一致，请求没有报错，但是数据无法写入本地数据库，增加collection:'表名'，终于可以进行读写了
    7.问题2，前端本地服务localhost:8080,koa监听端口3000，如何实现本地调本地接口，一直报错，错了一天了，都准备缓缓了，配置代理啊，proxy
    8.koa增加自动重启 nodemon ,需要在启动的时候配置一下,


### 效果图

![](https://github.com/yangdongMC/react-todo/blob/master/frontend/src/assets/login.png)
![](https://github.com/yangdongMC/react-todo/blob/master/frontend/src/assets/register.png)
![](https://github.com/yangdongMC/react-todo/blob/master/frontend/src/assets/todo.png)
![](https://github.com/yangdongMC/react-todo/blob/master/frontend/src/assets/add.png)


