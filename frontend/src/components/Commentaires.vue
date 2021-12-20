<template>
  <div class="commentaires">
    <h1>{{ postId }}</h1>
  </div>
</template>

<script>
import { } from 'vuex'

export default {
  name: 'Commentaires',
  mounted: function() {
    console.log('okok');
    if(this.$store.state.user.userId == -1) {
        this.$router.push('/connexion');
        return;
    }
    var self = this;
    var instance = this.$store.state.axios;
    instance.get('/post/' + this.postId + '/commentaires',{
        params: {
            userId: this.$store.state.user.userId
        },
        headers: {
            Authorization: 'Bearer ' + this.$store.state.user.token,
        }
    }).then(function (response) {
      console.log(response.data)
        self.commentaires = response.data;
        
    })
    .catch(function (error) {
        // Gèrer l'erreur
        console.log(error);
    });
  },
  props: {
    postId: Number
  },
   data : function () {
    return {
      commentaire: '',
      commentaires: []
    };
  },
  components: {
  }
}
</script>


<style scoped lang="scss">
</style>
