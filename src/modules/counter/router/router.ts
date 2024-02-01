import CounterPage from '../pages/Counter.vue'

export const COUNTER_PAGES = {
  counter: 'counter'
}

// for lazy loading use directly import with arrow function
export const COUNTER_ROUTES_MODULE = [
  {
    path: '',
    name: COUNTER_PAGES.counter,
    component: CounterPage
  }
]
