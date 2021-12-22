<template>
  <div>
    <Header/>
    <nav id="nav">
      <router-link to="/">Forum</router-link> |
      <router-link to="/connexion">Connexion</router-link> |
      <router-link to="/inscription">Inscription</router-link> |
      <router-link to="/mon-compte">Profile</router-link> 
    </nav>
    <router-view />
    <Footer/>
  </div>
</template>
<script>
import { } from 'vuex'
import Header from '../src/components/Header.vue'
import Footer from '../src/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  beforeCreate() {
		this.$store.commit('initialiseUserStore');
	}
}
</script>
<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 20px;
  }
    a {
      font-weight: bold;
      color: #000000;
    }
  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #000000;

      &.router-link-exact-active {
        color: #00f386;
      }
    }
  }
</style>
