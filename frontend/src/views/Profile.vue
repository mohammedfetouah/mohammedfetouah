<template>
  <div class="card">
    <h1 class="card_tittle"> espace perso</h1>
    <p class="card_subtitle">je suis ...</p>
    <div class="form-row">
      <button class="button" v-on:click="greet">
        Déconnexion
      </button>
    </div>
  </div>
</template>

<script>
import {  } from "vuex"
export default {
  name: 'Profile',
  mounted: function() {
    console.log(this.$store.state.user)
    if(this.$store.state.user.userId == -1) {
      this.$router.push('/connexion');
      return;
    }
  },
}
</script>