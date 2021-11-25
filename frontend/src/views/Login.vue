<template>
  <div class="card">
    <div class="card_logo">
      <img alt="Vue logo" src="../assets/icon-above-font.png">
    </div>
    <h1 class="card_title">Bienvenue sur votre réseau social d'entreprise</h1>
    <h2 class="card_title_secondary" v-if="node == 'Login'">Connexion</h2>
    <h2 class="card_title_secondary" v-else>Inscription</h2>
    <p class="card_subtitle" v-if="node == 'login'">Tu n'as pas encore de compte ?
      <span class="card_action" @click="switchToCreateAccount()" >Créer un compte</span>
    </p>
    <p class="card_subtitle" v-else>Tu as deja un compte ?
      <span class="card_action" @click="switchToLogin()" >Se connecter</span>
    </p>
    <div class="form-row" v-if="node == 'create'">
      <input v-model="pseudo" class="form-row_input" type="text" placeholder="Entrée votre pseudo">
    </div>
    <div class="form-row">
      <input v-model="email" class="form-row_input" type="text" placeholder="Adresse email">
    </div>
    <div class="form-row">
      <input v-model="password" class="form-row_input" type="password" placeholder="Mot de passe">
    </div>
    <div class="form-row"> 
      <button class="button button--disabled" v-if="node == 'login'">
        Connexion
      </button>
      <button @click="createAccount()" class="button" :class="{'button--disabled' : !validatedFields}" v-else>
        Créer un compte 
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name : 'Login',
    data : function () {
      return {
        node: 'login',
        pseudo: '',
        email: '',
        password: '',
      }
    },
    computed: {
      validatedFields: function () {
        if(this.node == 'create') {
          if(this.pseudo != "" && this.email != "" && this.password != "") {
            return true;
          } else {
            return false
          }
        } else {
          if(this.email != "" && this.password != "") {
            return true;
          } else {
            return false;
          }
        }
      }
    },
    methods: {
      switchToCreateAccount : function () {
        this.node = 'create';
      },
      switchToLogin : function () {
        this.node = 'login';
      },
      createAccount: function () {
        this.$store.dispatch('createAccount', {
          pseudo: this.pseudo,
          email: this.email,
          password: this.password,
        })
      }
    }
  }

</script>
<style scoped lang="scss">
  img {
    width: 30%;
  }
</style>
