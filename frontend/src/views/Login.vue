<template>
  <div class="card">
    <h2 class="card_title_secondary">Connexion</h2>
    <p class="card_subtitle">Tu n'as pas encore de compte ?
      <router-link class="card_action" to="/inscription">Créer un compte</router-link>
    </p>
    <form id="login">
      <div class="form-row">
        <input v-model="email" class="form-input" type="text" placeholder="Adresse email">
      </div>
      <div class="form-row">
        <input v-model="password" class="form-input" type="password" placeholder="Mot de passe">
      </div>
      <div class="form-row" v-if="status == 'error_login'">
        Adresse mail et/ou mot de passe invalide
      </div>
      <div class="form-row"> 
        <button type="submit" class="button" @click="login()">
          <span v-if="status == 'loading'">Connexion en cours...</span>
          <span v-else>Connexion</span>
        </button>
      </div>
    </form>

  </div>
</template>

<script>
import { mapState } from 'vuex'

  export default {
    name : 'Login',
    data : function () {
      return {
        node: 'login',
        email: '',
        password: '',
      }
    },
    computed: {
      ...mapState(['status'])
    },
    methods: {
      login: function () {
        const self = this;
        this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        }).then(function (response) {
          self.$router.push('/mon-compte')
          console.log(response);
        }).error(function (error) {
          console.log(error)
        })
      },
    }
  }

</script>
<style scoped lang="scss">
  img {
    width: 30%;
  }
</style>
