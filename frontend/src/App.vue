<template>
  <div>
    <nav id="nav">
      <router-link to="/">Forum</router-link> |
      <router-link to="/connexion">Connexion</router-link> |
      <router-link to="/inscription">Inscription</router-link> |
      <router-link to="/mon-compte">Mon compte</router-link> 
    </nav>
    <router-view />
  </div>
</template>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
