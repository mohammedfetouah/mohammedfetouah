<template>
  <div>
    <form @submit.prevent="onCreateCommentaire">
    <div class="form-group"  >
      <label>Commenter</label>
      <textarea
        class="form-control"
        v-model="commentaire"
      ></textarea>
    </div>
    <div class="commentaires">
      <div class="commentaire" v-for="commentaire in commentaires" :key="commentaire.id">
        <p v-if="commentaire.message">{{ commentaire.message }}</p>
      </div>
    </div>
    <div class="mt-3">
      <button type="submit" class="btn btn-secondary">Envoyer</button>
    </div>
  </form>

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
  },
  methods: {
      onCreateCommentaire() {
         var self = this;
        var instance = this.$store.state.axios;
        instance.post(
          '/commentaire',
          {
           commentaire: this.commentaire,
           userId: this.$store.state.user.userId,
           postId: this.postId,

          },
          {
            
            params: {
                userId: this.$store.state.user.userId
            },
            headers: {
                Authorization: 'Bearer ' + this.$store.state.user.token,
            }
          }
        )
        .then((response) => {
           self.commentaires.push(response.data);


          console.log(response.data)
        })
        .catch ((erreur) => {
          console.log(erreur)
        })
      },
  }
}
</script>


<style scoped lang="scss">
</style>
