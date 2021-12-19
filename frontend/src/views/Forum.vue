<template>
<div>
    <div>
        <div>
            <div>
                <div>
                    <h3>Create a post</h3>
                    <a href=""></a>
                </div>
                <div>
                  <div>
                    <div>
                        <span class="logo">
                        </span>
                        <span>
                            <span class="">Photo</span>
                        </span>
                    </div>
                    <div></div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { } from 'vuex'

  export default {
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
        posts: []
      };
    },
    computed: {
    },
    methods: {

    }
  }

</script>
<style scoped lang="scss">
.row {
  margin-top: 25px;
}
</style>
