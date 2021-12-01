<template>
  <div class="card">
    <h2 class="card_title_secondary">Connexion</h2>
    <p class="card_subtitle">Tu n'as pas encore de compte ?
      <span class="card_action" @click="switchToCreateAccount()" >Créer un compte</span>
    </p>
    <form id="login" @submit="login">
      <div class="form-row">
        <input v-model="email" class="form-input" type="text" placeholder="Adresse email">
      </div>
      <div class="form-row">
        <input v-model="password" class="form-input" type="password" placeholder="Mot de passe">
      </div>
      <div class="form-row"> 
        <button type="submit" class="button">
          Connexion
        </button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name : 'Login',
    data : function () {
      return {
        node: 'login',
        email: '',
        password: '',
      }
    },
    methods: {
      login: function (event) {
        event.preventDefault();
        // Fonction appel à l'api pour se connecter
        console.log('connexion');
      },
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
