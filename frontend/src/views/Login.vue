<template>
  <div class="card">
    <h2 class="card_title_secondary">Connexion</h2>
    <p class="card_subtitle">Tu n'as pas encore de compte ?
      <span class="card_action" @click="switchToCreateAccount()" >Créer un compte</span>
    </p>
    <form id="login">
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
      switchToCreateAccount : function () {
        this.node = 'create';
      },

      login: function () {
        this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        }).then(function (response) {
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
