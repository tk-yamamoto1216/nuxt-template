<template>
  <header class="the-app-header">
    <NuxtLink to="/" class="logo">Nuxt</NuxtLink>
    <NuxtLink to="/" class="item">Top</NuxtLink>
    <NuxtLink to="/" class="item">Post</NuxtLink>
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
@import 'assets/scss/settings/color';

.the-app-header {
  position: sticky;
  top: 0;
  display: flex;
  z-index: 2;
  border-bottom: thin solid $violet-powder;
  align-items: center;
  padding: 1.5rem;
  background-color: $white;

  > .logo {
    font-size: 1.3rem;
    margin-right: 1rem;
    font-weight: bold;
  }

  > .item {
    margin-left: 1rem;
    font-weight: bold;
    color: rgb(85, 85, 85);
    text-decoration: none;
  }

  > .logout {
    margin-left: auto;
  }
}
</style>
