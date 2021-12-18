import Vue from "vue"
import Vuex from "vuex"

//import auth from './store_auth'
import products from './store_products'
//import user from './store_user'

Vue.use(Vuex);

export default function ( /* { ssrContext } */ ) {
  const Store = new Vuex.Store({
    modules: {
      //auth,
      products,
      //user
    },

  })
  return Store
}