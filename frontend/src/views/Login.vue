<template>
  <div>
    <h1 class="card_title_secondary">Connexion</h1>
    <p class="card_subtitle">Tu n'as pas encore de compte ?
      <router-link class="card_action" to="/inscription">Créer un compte</router-link>
    </p>
    <form id="login">
      <p class="error" v-if="alert">{{ alert }}</p>
      <div class="formul col-xs-12 col-sm-6 col-md-4">
        <label for="email" class="form-label">Adresse email</label>
        <input v-model="email" class="form-control" type="text" placeholder="email@gmail.com" id="email">
      </div>
      <div class="formul col-xs-12 col-sm-6 col-md-4">
        <label for="password" class="form-label">Mot de passe</label>
        <input v-model="password" class="form-control " type="password" placeholder="*********" id="password">
      </div>
      <div  class="row">
        <div class="col" v-if="status == 'error_login'">
          Adresse mail et/ou mot de passe invalide
        </div>
      </div> 
      <div class="form-row"> 
        <button type="submit" class="btn btn-secondary row" @click="login()">
          <span>Connexion</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { } from 'vuex'

  export default {
    name : 'Login',
    data : function () {
      return {
        node: 'login',
        email: '',
        password: '',
        alert: ''
      }
    },
    methods: {
      login: function () {
        const self = this;
        var instance = this.$store.state.axios;
        instance.post('/auth/login', {
          email: this.email,
          password: this.password,
        }).then(function (response) {
          console.log(response)
          localStorage.setItem('userStore',JSON.stringify(response.data));
          self.$store.commit('initialiseUserStore');
          window.location.href = window.location.origin;
        })
        .catch(function (error) {
          self.alert = error.response.data.error;
        });
      },
    }
  }

</script>
<style scoped lang="scss">
.formul {
  margin: 0 auto;
}
button.btn.btn-secondary.row {
    margin-top: 25px;
}

</style>
