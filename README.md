
## 功能介绍

vuex的本地化存储和跨窗口同步state插件

## 安装步骤


安装插件执行如下
```
npm i -S vuex-persistence
```
vuex中使用
```
import myPlugin from 'vuex-persistence'
export default new Vuex.Store({
  plugins: [myPlugin()],
  strict: process.env.NODE_ENV !== 'production'
})
```