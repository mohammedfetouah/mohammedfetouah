<template>
    <div class="container">
        <nav class="navbar navbar-expand-md navbar-light">
            <a href="#" class="navbar-brand">Groupomania</a>

                <ul class="navbar-nav ms-auto text-center" id="nav">
                    <li >
                        <router-link to="/connexion" class="nav-link" v-if="!isLogged">Connexion</router-link>
                        <router-link to="/" class="nav-link" v-else>Forum</router-link>
                    </li>
                    <li>
                        <router-link to="/inscription" class="nav-link" v-if="!isLogged">Inscription</router-link>
                        <router-link to="/mon-compte" class="nav-link" v-else>Profile</router-link>
                    </li>
                </ul>
        </nav>
    </div>
</template>
<script>
import {  } from "vuex"
export default {

    data : function () {
      return {  
          isLogged: this.$store.state.user.userId != -1
      };  
    }


    
}
</script>


<style scoped lang="scss">

</style>