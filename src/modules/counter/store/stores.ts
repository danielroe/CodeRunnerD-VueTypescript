import type { ActionContext } from 'vuex'

export interface CounterStoreState {
  count: number
  isLoading: boolean
}

export const COUNTER_STORE_MODULE = {
  namespaced: true,
  state: (): CounterStoreState => ({ count: 0, isLoading: false }),
  mutations: {
    increment(state: CounterStoreState, incrementation: number) {
      state.count = state.count + incrementation
    },
    changeIsLoadingState(state: CounterStoreState) {
      state.isLoading = !state.isLoading
    }
  },
  actions: {
    async incrementRandomInt(context: ActionContext<CounterStoreState, any>) {
      context.commit('changeIsLoadingState')
      const rn = () => {
        return new Promise<number>((resolve) => {
          const random_number = Math.floor(Math.random() * 20 + 1)
          setTimeout(() => {
            resolve(random_number)
          }, 3000)
        })
      }

      const number: number = await rn()

      context.commit('increment', number)
      context.commit('changeIsLoadingState')
    }
  },
  getters: {
    doubleCount(state: CounterStoreState) {
      return state.count * 2
    }
  }
}
