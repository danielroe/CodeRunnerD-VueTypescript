<template>
    <h1>Counter Page</h1>

    <h2>Counter :{{counterStore}}</h2>
    <h2>Counter map state :{{counter.count }}</h2>
    <h2>Counter renamed state :{{renamedCounter.count }}</h2>
</template>
<script lang="ts">
import {mapState} from 'vuex';

export default {
    name:"CounterPage",
    computed:{
        counterStore(){
            return this.$store.state.counter.count
        },
        ...mapState(['counter']),
        ...mapState({renamedCounter:state=>state.counter})
    }
}
</script>
