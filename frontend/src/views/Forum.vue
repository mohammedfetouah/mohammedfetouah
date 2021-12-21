<template>
  <div>
    <h2>Création de Post</h2>
    <hr>
    <form @submit.prevent="onCreatePost">
      <div class="form-group">
        <label>Description</label>
        <textarea
          class="form-control"
          v-model="message"
        ></textarea>
      </div>
      <div class="mt-3">
        <button type="submit" class="btn btn-secondary">Création d'un post</button>
      </div>
    </form>
    <div class="posts">
      <div class="post" v-for="post in posts" :key="post.id">
        <img :src="post.img" :alt="post.message" v-if="post.img">
        <p v-if="post.message">{{ post.message }}</p>
        <Commentaires :postId="post.id" />
      </div>
    </div>
  </div>
</template>

<script>
import { } from 'vuex'
import Commentaires from '@/components/Commentaires.vue'

  export default {
  components: { Commentaires },
    name : 'Forum',
    mounted: function() {
        if(this.$store.state.user.userId == -1) {
            this.$router.push('/connexion');
            return;
        }
        var self = this;
        var instance = this.$store.state.axios;
        instance.get('/post',{
            params: {
                userId: this.$store.state.user.userId
            },
            headers: {
                Authorization: 'Bearer ' + this.$store.state.user.token,
            }
        }).then(function (response) {
          console.log(response.data)
            self.posts = response.data;
            
        })
        .catch(function (error) {
            // Gèrer l'erreur
            console.log(error);
        });
    },
    data : function () {
      return {
        message: '',
        posts: []
      };
    },
    computed: {
    },
    methods: {
      onCreatePost() {
        var self = this;
        var instance = this.$store.state.axios;
        instance.post(
          '/post',
          {
            message: this.message,
            userId: this.$store.state.user.userId
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
           self.posts.push(response.data);
        })
        .catch ((erreur) => {
          console.log(erreur)
        })
      },

    }
  }

</script>
<style scoped lang="scss">
.row {
  margin-top: 25px;
}
</style>
