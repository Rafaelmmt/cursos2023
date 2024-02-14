import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  
  state: {
    products:[],
    chosenProducts: []
    
  },

  mutations: {
    loadProducts (state, products) {
      state.products = products;
    },
    loadStore (state, products) {
      state.chosenProducts = products;
    },
    addProduct(state, product) {
      state.chosenProducts.push(product);
      localStorage.setItem("chosenProducts", JSON.stringify(state.chosenProducts))
    },
    removeProduct(state, productId) {
      var updateBag = state.chosenProducts.filter(item => productId != item.id);
      state.chosenProducts = updateBag;
      localStorage.setItem("chosenProducts", JSON.stringify(state.chosenProducts))
    }
  },
  
  actions: {
    
    loadProducts({ commit }) {
      axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        commit('loadProducts', response.data);
      })
    },

    loadStore({ commit }) {
      if(localStorage.getItem("chosenProducts")){
        commit('loadStore', JSON.parse(localStorage.getItem("chosenProducts")));
      }
    },

    addProduct({ commit }, product) {
      commit('addProduct', product);
    },
    
    removeProduct({ commit }, productId) {
      commit('removeProduct', productId);
    }
  },
  
  modules: {
  }
})
