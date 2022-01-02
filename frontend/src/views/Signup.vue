<template>
  <div class="ontainer-fluid">
    <h2 class="card_title_secondary">Inscription</h2>
    <p class="card_subtitle">Tu as deja un compte ?
      <router-link class="card_action" to="/connexion">Se connecter</router-link>
    </p>
    <form class="align-self-center">
      <div class="formul col-xs-12 col-sm-6 col-md-4">
        <label for="prenom" class="form-label">Prénom</label>
        <input v-model="prenom" class="form-control" type="text">
      </div>
      <div class="formul col-xs-12 col-sm-6 col-md-4">
        <label for="nom" class="form-label">Nom</label>
        <input v-model="nom" class="form-control" type="text">
      </div>
      <div class="formul col-xs-12 col-sm-6 col-md-4">
        <label for="email" class="form-label">Adresse email</label>
        <input v-model="email" class="form-control input-xl" type="text" >
      </div>
      <div class="formul col-xs-12 col-sm-6 col-md-4">
        <label for="pseudo" class="form-label">Pseudo</label>
        <input v-model="pseudo" class="form-control" type="text">
      </div>
      <div class="formul col-xs-12 col-sm-6 col-md-4">
        <label for="Password" class="form-label">Mot de passe</label>
        <input v-model="password" class="form-control" type="password">
      </div>
      <div class="mb-3" v-if="status == 'error_create'">
        Adresse mail déja utilisée
      </div>    
      <button @click="createAccount()" class="btn btn-secondary row" type="submit">
          <span>Créer un compte </span>
      </button> 
    </form>
  </div>
</template>

<script>
import { } from 'vuex'

  export default {
    name : 'Signup',
    data : function () {
      console.log(this.$store.state.user);
      return {
        node: 'signup',
        prenom: '',
        nom: '',
        pseudo: '',
        email: '',
        password: '',
      }
    },
    methods: {
      createAccount: function () {
        const self = this;
        var instance = this.$store.state.axios;
        instance.post('/auth/signup',  {
            prenom: this.prenom,
            nom: this.nom,
            pseudo: this.pseudo,
            email: this.email,
            password: this.password,
          }).then(function (response) {
            localStorage.setItem('userStore',JSON.stringify(response.data));
            self.$store.commit('initialiseUserStore');
            window.location.href = window.location.origin;
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
.formul {
  margin: 0 auto;
}
button.btn.btn-secondary.row {
    margin-top: 25px;
}

</style>