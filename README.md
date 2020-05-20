# ZhiJia-website
> 使用Vue作为前端和Koa2作为后端的企业网站个人项目
> 包括网站和后台管理系统
> 后台管理系统地址：[http://www.viviwind.cn:3030/admin](http://www.viviwind.cn:3030/admin)（[备用地址](http://47.99.183.205/:3030/admin)）

### Table of contents
- [安装](#install)
- [代码](#code)

### <span id="install">安装</span>
- **server**
```
git clone https://github.com/WindWaving/ZhiJia-website.git
cd server/serv`
npm install
npm start
```
- **client**
```
cd client/entity
npm install
npm run dev
```

### <span id="code">Code</span>
#### directories
- **server**
server/serv/
`models`----- 数据表定义
`routes/api`----- Restful风格的api
`views` ----- 后台管理系统的界面文件
- **blog**
client/entity/src/
`store`----- Vuex的状态管理
`pages`----- 页面路由
`components`----- 页面组件
#### For own deploy
- server:
1. 数据库配置models/db.js
2. `app.js`中`ctx.state`的adminUrl和serverUrl
3. views/components/navbar.ejs的adminUrl和serverUrl

- client:
1. `src/store/index.js`:state中的`serverUrl`修改为自己的服务器地址，（项目中的服务器地址也可以用）

#### Main modules
- server: koa2
- database operations: sequelize & mysql2
- encrypt password: crypto
- admin interfaces: adminlte
- client: vue
- swiper: vue-concise-slider
- video player: vue-video-player
- state management: vuex
- UI components: element-ui
- Article Editor: le-markdown-editor
- communication: axios
- session: koa-session & vue-session