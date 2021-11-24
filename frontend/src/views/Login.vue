<template>
  <div class="login">
    <img alt="Vue logo" src="../assets/icon-above-font.png">
    <H1 msg="Bienvenue sur votre réseau social d'entreprise"/>
    <H2 msg="Se connecter"/>
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
import H1 from '@/components/H1.vue'
import H2 from '@/components/H2.vue'

export default {
  name: 'Login',
  components: {
    H1,
    H2
  },
  data() {
    return {
        email: '',
        password: '',
    }
  }

}




</script>
<style scoped lang="scss">
  img {
    width: 30%;
  }
</style>
