<template>
  <div>
    <Header/>
    <nav id="nav">
      <router-link to="/">Forum</router-link> |
      <router-link to="/connexion">Connexion</router-link> |
      <router-link to="/inscription">Inscription</router-link> |
      <router-link to="/mon-compte">Mon compte</router-link> 
    </nav>
    <router-view />
    <Footer/>
  </div>
</template>
<script>
import Header from '../src/components/Header.vue'
import Footer from '../src/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
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

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
