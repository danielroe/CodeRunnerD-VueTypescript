export interface CounterStoreState {
  count: number
}

export const COUNTER_STORE_MODULE = {
  state: (): CounterStoreState => ({ count: 0 }),
  mutations: {
    increment(state: CounterStoreState) {
      state.count++
    }
  },
  getters: {
    doubleCount(state: CounterStoreState) {
      return state.count * 2
    }
  }
}
