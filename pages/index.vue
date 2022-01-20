<template>
  <div>
    {{ text }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const text = ref('This is Nuxt project')

    return { text }
  },
})
</script>
