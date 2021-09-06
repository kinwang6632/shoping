import { createStore } from 'vuex'
import dataList from '../product/dataList.json'
export default createStore({
  state: {
    products:[],
    isLoadDataOK:false,
    currentOrder:[],
  },
  mutations: {
    getAllProducts(state) {
      state.products = dataList;
    },
    setLoadDataOK(state,payload){
      state.isLoadDataOK = payload
    },
    setCurrentOrder(state,payload) {
      let index = state.currentOrder.findIndex((element) => {
          //console.log(element)
          return element.model === payload.model
      })
      
      if (index >=0 ) {
        state.currentOrder[index].orderNum += payload.orderNum
      } else {
        state.currentOrder.push({
          model:payload.model,
          orderNum:payload.orderNum
        })
      }
    }
  },
  actions: {
    getProductData ({ commit }) {      
      return new Promise( (resolve,reject) => { setTimeout(() => {
        try {
          commit('getAllProducts')
          commit('setLoadDataOK',true)
          resolve()

        } catch (error) {
          reject('load Data Fail' + error)
        }
      }, 2000)})
    }
  },
  modules: {
  }
})
