import { createStore } from 'vuex'

export default createStore({
  state: {
    products:[]
  },
  mutations: {
    getAllProducts(state,data) {
      state.products = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
