<template>
  <div>
      <div class="card "  >
        <h1 class="card_tittle"> Espace perso</h1>
        <p class="card_subtitle">Je suis {{ user.pseudo }} </p>
        <div class="form-row">
          <button @click="logout()" class="btn btn-secondary row" >
            Déconnexion
          </button>
        </div>
        <div class="form-row">
          <button class="btn btn-secondary row" @click="deleteProfile()">
            Supprimer votre compte
          </button>
        </div>
      </div>
  </div>
</template>

<script>
import {  } from "vuex"


export default {
  name: 'Profile',
      data : function () {
      return {
        user: this.$store.state.user
      };
    },

  mounted: function() {
    if(this.$store.state.user.userId == -1) {
      this.$router.push('/connexion');
      return;
    }
  },
  methods: {
    logout: function () {
      this.$store.commit('logout');
      location.reload();
    },
    deleteProfile: function () {
      var instance = this.$store.state.axios;
      instance.delete(
        '/auth/delete/' + this.$store.state.user.userId,
        {
          params: {
              userId: this.$store.state.user.userId
          },
          headers: {
              Authorization: 'Bearer ' + this.$store.state.user.token,
          }
        }
      )
      .then(() => {
        this.$store.commit('logout');
        location.reload();
      })
      .catch ((erreur) => {
        console.log(erreur)
      });
    }
  },
}
</script>