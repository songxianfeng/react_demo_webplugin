# 项目使用
1，请使用 node = v16.8.0,其他版本可能有兼容问题；

2，下载项目，安装依赖

> npm i 

3，运行项目

> npm start

4,浏览器自动打开网页：
http://localhost:3000

5，查看webpack-plugin-istanbul 插件是否生效？

在浏览器的console下查看:window.__coverage__,只要覆盖率数据即可。

# 说明
1，本项目比较简单，只是几个页面的跳转，如果有需要，可自行添加功能；

2，本项目主要测试一下WebpackPluginIstanbul插件在React项目中的使用，至于后面的生成前端覆盖率报告，请自行处理。