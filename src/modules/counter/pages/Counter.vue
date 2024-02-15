<template>
  <h1>Counter Page</h1>

  <h2>Counter map state :{{ counter.count }}</h2>
  <h2>Counter renamed state :{{ renamedCounter.count }}</h2>

  <h2>Getter with double :{{ doubleCount }}</h2>
  <h2 v-if="counter.isLoading">Is loading</h2>

  <button @click="increment">Increment +2</button>
  <button @click="incrementRandomInt" :disabled="counter.isLoading">Increment randomly</button>
</template>
<script lang="ts">
import { mapState, mapGetters } from 'vuex'
import { State } from '../../../store/global.store'

export default {
  name: 'CounterPage',
  computed: {
    ...mapState(['counter']),
    ...mapState({ renamedCounter: (state: State) => state.counter }),
    ...mapGetters("counter",['doubleCount'])
  },
  methods: {
    increment() {
      this.$store.commit('counter/increment', 2)
    },
    incrementRandomInt() {
      this.$store.dispatch('counter/incrementRandomInt')
    }
  }
}
</script>
