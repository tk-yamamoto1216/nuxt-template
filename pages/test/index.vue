<template>
  <div class="index">Datepicker Vee-validate</div>
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

<style lang="scss" scoped>
.index {
  padding: 10px;
  color: red;
}
</style>
