import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carts:[],
    ShowUp:false,
  },
  mutations: {
      setCarts(state,carts){
        state.carts = carts
        // carts.length > 0 ? this.state.ShowUp =false : this.state.ShowUp = false

      },
    HandelReduce(state,payload){
       payload.type=='inc'?payload.cart.num++:payload.cart.num--
    },
    HandelDelete(state,payload){
       state.carts.splice(payload.index,1)
    },
    ShowUp(state,payload){
      state.carts = payload
      payload.carts.length > 0 ? this.state.ShowUp = false : this.state.ShowUp = true
    }

  },
  actions: {

    setCarts({commit}) {
      axios.get('api/cart').then(res => {
        commit('setCarts', res.data.carts)
      })
    },
    HandelReduce({commit},payload){
      // console.log(payload)
      if (payload.type == 'dec' && payload.cart.num == 1){
        return
      }
      axios.patch(`api/cart`,{cart_id:payload.cart.id,type:payload.type}).then(res=>{
        commit('HandelReduce',payload)

      })
    },
    HandelDelete({commit},payload){
      // console.log(payload)
      axios.delete(`api/cart?cart_id=${payload}`).then(res=>{
        console.log(res)
        commit('HandelDelete',payload)

      })
    }

  },
  getters:{

    Num(state) {
      var num = 0
      var total_price = 0
      state.carts.map(item => {
        num += item.num
        total_price += item.num * item.product.price
      })
      return {num: num, total_price: total_price}
    }

  }
})
