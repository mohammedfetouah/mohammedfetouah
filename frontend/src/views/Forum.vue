<template>
  <div>
    <h2>Création de Post</h2>
    <hr>
    <form @submit.prevent="onCreatePost" class="align-self-center formul" enctype="multipart/form-data">
      <div class="form-group">
        <div>
          <label for="message">Description</label>
          <textarea
            class="form-control post"
            name="message"
            id="message"
            v-model="message"
            placeholder="Commencer un post" 
          ></textarea>
        </div>
        <div class="form-image">
          <div v-if="!image">
            <label for="file">Choisir une image</label>
            <input type="file" @change="onFileChange" name="file" id="file" accept="image/*" />
          </div>
          <div v-else>
            <img :src="image" />
          </div>
        </div>
      </div>
      <div class="row-submit">
        <button v-if="image" @click="removeImage">Supprimer l'image</button>
        <button type="submit" class="btn btn-secondary">Création d'un post</button>
      </div>
    </form>
    <div class="card post formul" v-for="post in posts" :key="post.id" >
      <div class="card-body">
        <h5 class="card-title">pseudo</h5>
        <img :src="post.img" class="card-img-bottom" :alt="post.message" v-if="post.img">
        <p class="card-text" v-if="post.message">{{ post.message }}</p>
        <p class="card-text"><small class="text-muted">Publié le {{ formatDate(post.createdAt) }}</small></p>
      </div>
      <Commentaires :postId="post.id" />
    </div>  
  </div>
</template>

<script>
import { } from 'vuex'
import moment from 'moment'
import Commentaires from '@/components/Commentaires.vue'
import FormData from 'form-data'

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
               'Content-Type': 'multipart/form-data',
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
        image: '',
        file: '',
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
        let data = new FormData();
        data.append('image', this.file);
        data.append('message',this.message);
        data.append('userId',this.$store.state.user.userId);
        instance.post(
          '/post',
          data,
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
      onFileChange(e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          return;
        this.createImage(files[0]);
        this.file = files[0];
      },
      createImage(file) {
        var reader = new FileReader();
        var self = this;
        reader.onload = (e) => {
          self.image = e.target.result;
        };
        reader.readAsDataURL(file);
      },
      removeImage: function () {
        this.image = '';
        this.file = null;
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
  .form-image img {
    max-width: 300px;
    margin: 0 auto;
  }
</style>
