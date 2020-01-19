import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:{
      data:[],
      count: 0
    },
    todoList:{
      data:[]
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
