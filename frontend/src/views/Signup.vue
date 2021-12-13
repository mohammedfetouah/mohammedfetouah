<template>
  <div class="card">
    <div class="card_logo">
      <img alt="Vue logo" src="../assets/icon-above-font.png">
    </div>
    <h1 class="card_title">Bienvenue sur votre réseau social d'entreprise</h1>
    <h2 class="card_title_secondary">Inscription</h2>
    <p class="card_subtitle">Tu as deja un compte ?
      <span class="card_action" >Se connecter</span>
    </p>
    <div class="form-row">
      <input v-model="prenom" class="form-row_input" type="text" placeholder="Entrée votre prénom">
    </div>
    <div class="form-row">
      <input v-model="nom" class="form-row_input" type="text" placeholder="Entrée votre nom">
    </div>
    <div class="form-row">
      <input v-model="pseudo" class="form-row_input" type="text" placeholder="Entrée votre pseudo">
    </div>
    <div class="form-row">
      <input v-model="email" class="form-row_input" type="text" placeholder="Adresse email">
    </div>
    <div class="form-row">
      <input v-model="password" class="form-row_input" type="password" placeholder="Mot de passe">
    </div>
      <div class="form-row" v-if="status == 'error_create'">
        Adresse mail déja utilisée
      </div>
    <div class="form-row"> 
      <button @click="createAccount()">
          <span v-if="status == 'loading'">Créaation en cours...</span>
          <span v-else>Créer un compte </span>
        
      </button> 
    </div>
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
  img {
    width: 30%;
  }
</style>