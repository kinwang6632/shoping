import { createStore } from 'vuex'

export default createStore({
  state: {
    products:[],
    isLoadDataOK:false
  },
  mutations: {
    getAllProducts(state,data) {
      state.products = data;
    },
    setLoadDataOK(state,payload){
      state.isLoadDataOK = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
