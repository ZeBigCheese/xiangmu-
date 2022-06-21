import { createStore } from 'vuex'

import persistedState from 'vuex-persistedState'

export default createStore({
  state: {
    history:[],
  },

  mutations: {
    lishi(state,keyword){
      if(state.history.includes(keyword)){
        return false
      }
      if(state.history.length>=6){
        state.history.pop()
      }
      state.history.unshift(keyword)
    },
    shanall(state){
      state.history=[]
    }
  },

  getters:{
    
  },
  plugins: [persistedState()]
})