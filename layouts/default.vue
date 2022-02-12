<template>
  <div>
    <TheAppHeader />
    <Nuxt class="layout-page" />
  </div>
</template>

<script>
import TheAppHeader from '@/components/atoms/AppHeader.vue'

export default {
  components: {
    TheAppHeader,
  },
}
</script>
