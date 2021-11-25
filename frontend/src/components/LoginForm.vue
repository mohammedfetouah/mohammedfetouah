<template>
  <div>
    <form id="form">
      <label>Email</label>
      <input type="email" required v-model="email">

      <label>Password</label>
      <input type="password" required v-model="password">
    </form>
    <div>
      <a href="/signup">S'inscrire</a>
      <button>Conexion</button>
    </div>
  </div>
</template>





<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
    }
  }
}
</script>