<template>
  <div class="card">
    <h2 class="card_title_secondary">Connexion</h2>
    <p class="card_subtitle">Tu n'as pas encore de compte ?
      <router-link class="card_action" to="/inscription">Créer un compte</router-link>
    </p>
    <form id="login">
      <div class="row">
        <div class="col">
          <input v-model="email" class="form-control" type="text" placeholder="Adresse email">
        </div>
      </div>
      <div class="row">
        <div class="col">
          <input v-model="password" class="form-control" type="password" placeholder="Mot de passe">
        </div>
      </div> 
      <div  class="row">
        <div class="col" v-if="status == 'error_login'">
          Adresse mail et/ou mot de passe invalide
        </div>
      </div> 
      <div class="form-row"> 
        <button type="submit" class="btn btn-secondary row" @click="login()">
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
        var instance = this.$store.state.axios;
        instance.post('/auth/login', {
            email: this.email,
            password: this.password
          }).then(function (response) {
            self.$store.commit('login',response.data);
            self.$router.push('/mon-compte');
          })
          .catch(function (error) {
            // Gèrer l'erreur
            console.log(error);
          });
      },
    }
  }

</script>
<style scoped lang="scss">
.row {
  margin-top: 25px;
}
</style>
