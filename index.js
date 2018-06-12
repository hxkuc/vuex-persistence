const deepmerge = require('deepmerge')

module.exports = storeKey => store => {
  // 定义缓存键
  let STOREKEY = storeKey || '_VUEX'

  /*
   * @author: huang
   * 同步state
   */
  let mergeFun = () => {
    let state = JSON.parse(window.localStorage.getItem(STOREKEY)) || {}
    store.replaceState(deepmerge(store.state, state, {
      arrayMerge: function (store, saved) { return saved },
      clone: false
    }))
  }

  // 打开新窗口或刷新页面时同步state
  mergeFun()

  // 监听storage改变时触发更新state
  window.addEventListener('storage', () => {
    mergeFun()
  })

  // 监听mutation改变storage
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
    window.localStorage.setItem(STOREKEY, JSON.stringify(state))
  })
}