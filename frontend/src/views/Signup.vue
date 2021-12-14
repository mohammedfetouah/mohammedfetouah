<template>
  <div class="ontainer-fluid">
    <h2 class="card_title_secondary">Inscription</h2>
    <p class="card_subtitle">Tu as deja un compte ?
      <router-link class="card_action" to="/connexion">Se connecte</router-link>
    </p>
    <form class="align-self-center">
      <div class="row">
        <div class="col">
          <input v-model="prenom" class="form-control" type="text" placeholder="Entrée votre prénom">
        </div>
        <div class="col ">
          <input v-model="nom" class="form-control" type="text" placeholder="Entrée votre nom">
        </div>
      </div>
      <div class="row">
        <div class="col">
          <input v-model="email" class="form-control" type="text" placeholder="Adresse email">
        </div>
      </div>

      <div class="row">
        <div class="col ">
          <input v-model="pseudo" class="form-control" type="text" placeholder="Entrée votre pseudo">
        </div>
        <div class="col">
          <input v-model="password" class="form-control" type="password" placeholder="Mot de passe">
        </div>
      </div>
      <div class="col" v-if="status == 'error_create'">
        Adresse mail déja utilisée
      </div>    
      <button @click="createAccount()" class="btn btn-secondary row" type="submit">
          <span v-if="status == 'loading'">Créaation en cours...</span>
          <span v-else>Créer un compte </span>
      </button> 
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

  export default {
    name : 'Signup',
    data : function () {
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
      switchToLogin : function () {
      },
      computed: {
      ...mapState(['status'])
      },
      createAccount: function () {
        const self = this;
        this.$store.dispatch('createAccount', {
          prenom: this.prenom,
          nom: this.nom,
          pseudo: this.pseudo,
          email: this.email,
          password: this.password,
        }).then(function (response) {
          self.$router.push('/mon-compte')
          console.log(response)
        }).error(function (error) {
          console.log(error)
        })
      },
    }
  }


</script>
<style scoped lang="scss">
.row {
  margin-top: 25px;
}

</style>