<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
    <header>
    <div>
      <nav>
        <RouterLink to="pokemon/1">Pokemon 1</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

    <h1>List page</h1>
</template>
<script lang="ts">
export default {
  name: 'ListPage',
}
</script>