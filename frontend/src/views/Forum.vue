<template>
  <div>
    <h2>Création de Post</h2>
    <hr>
    <form @submit.prevent="onCreatePost" class="align-self-center formul col-xs-12 col-sm-8 col-md-6 col-lg-4  " >
      <div class="form-group">
        <label>Description</label>
        <textarea
          class="form-control post"
          v-model="message"
          placeholder="Commencer un post" 
        ></textarea>
      </div>
      <button type="submit" class="btn btn-secondary">Création d'un post</button>
    </form>
    <div class="card post formul col-xs-12 col-sm-8 col-md-6 col-lg-4" v-for="post in posts" :key="post.id" >
      <div class="card-body">
        <h5 class="card-title">pseudo</h5>
        <p class="card-text" v-if="post.message">{{ post.message }}</p>
        <p class="card-text"><small class="text-muted">Publié le {{ formatDate(post.createdAt) }}</small></p>
      </div>
      <img src="https://fr.wikipedia.org/wiki/Panda_g%C3%A9ant#/media/Fichier:Grosser_Panda.JPG" class="card-img-bottom" alt="">
      <!-- <img :src="post.img" class="card-img-bottom" :alt="post.message" v-if="post.img"> -->
      <Commentaires :postId="post.id" />
    </div>  
  </div>
</template>

<script>
import { } from 'vuex'
import moment from 'moment'
import Commentaires from '@/components/Commentaires.vue'

export default {
  components: { Commentaires },
    name : 'Forum',
    mounted: function() {
        console.log(this.$store.state.user);
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
        posts: [],
        createdAt: '',
        pseudo : '',

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
           self.posts.unshift(response.data);
        })
        .catch ((erreur) => {
          console.log(erreur)
        })
      },
      formatDate: function (value) {
        return moment(String(value)).format('DD/MM/YYYY hh:mm')
      }
    }
  }

</script>
<style scoped lang="scss">
.row {
  margin-top: 25px;
}
.card.post {
    margin-top: 50px;
    padding-bottom: 25px;
    border-radius: 15px;
}
  textarea.form-control {
    width: 100%;
  }
</style>
