import { COUNTER_STORE_MODULE, type CounterStoreState } from '@/modules/counter/store/stores'

import { Store, createStore } from 'vuex'
// Create a new store instance.

export interface State {
  counter: CounterStoreState
}

export const GLOBAL_STORE:Store<State> = createStore<State>({
  modules: {
    counter: COUNTER_STORE_MODULE
  }
})
