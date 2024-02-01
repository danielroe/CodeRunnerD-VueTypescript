import { COUNTER_STORE_MODULE } from '@/modules/counter/store/stores'
import { createStore } from 'vuex'
// Create a new store instance.
export const GLOBAL_STORE = createStore({
  modules: {
    counter: COUNTER_STORE_MODULE
  }
})
