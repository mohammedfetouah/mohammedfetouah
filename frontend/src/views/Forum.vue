<template>
  <div class="Forum">
    <img alt="Vue logo" src="../assets/icon-above-font.png">
    <H1 msg="Forum"/>
  </div>
</template>

<script>
// @ is an alias to /src
import h1 from '@/components/h1.vue'

export default {
  name: 'Forum',
  components: {
    h1
  }
}
</script>
<style scoped lang="scss">
  img {
    width: 30%;
  }
</style>

