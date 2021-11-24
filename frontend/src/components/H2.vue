<template>
  <div class="title-secondary">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'H2',
  props: {
    msg: String
  }
}
</script>