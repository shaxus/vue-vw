import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
//常量命名
const SHA_XU = 'SHA_XU';
//模块A，
const moduleA = {
  state:{names:'zhengxu'},
  mutations:{},
  actions:{},
  getters:{}
}
const store = new Vuex.Store({
  state:{
    count:0
  },
  //必须是同步函数
  mutations:{
    //你可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）：
    //常量替代 Mutation 事件类型
    [SHA_XU](state,n){
      state.count  = state.count + n;
    }
  },
  /*
  * Action 提交的是 mutation，而不是直接变更状态。
    Action 可以包含任意异步操作。
  * */
  actions:{
    //Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
    //因此你可以调用 context.commit 提交一个 mutation
    add({commit}){
      commit('SHA_XU',2);
    }
  },
  modules:{
   a: moduleA
  }

});

export default store;
