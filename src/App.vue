<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/pokemon">Pokemon</RouterLink>
        <RouterLink to="/counter">Pokemon</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
nav{
  display: flex;
  gap: 2rem;
}
</style>
