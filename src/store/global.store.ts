import { createStore } from 'vuex'
// Create a new store instance.
export const GLOBAL_STORE = createStore({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state: { count: number }) {
      state.count++
    }
  }
})
