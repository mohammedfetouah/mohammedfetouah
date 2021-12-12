import { createStore} from 'vuex';

const axios = require('axios');

const instance = axios.create({
  baseURL : "http://localhost:3000/api/auth/"
});




export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    createAccount: ({commit}, userInfos) => {
      return new Promise ((resolve, reject) => {
        commit;
        instance.post('/signup', userInfos)
        .then(function (response) {
          console.log(response);
          resolve(response);
        })
        .catch(function (error) {
          console.log(error);
          reject(error);
        });
      });
    },
    
    login: ({commit}, userInfos) => {
      return new Promise ((resolve, reject) => {
        commit;
        instance.post('/login', userInfos)
        .then(function (response) {
          console.log(response);
          resolve(response);
        })
        .catch(function (error) {
          console.log(error);
          reject(error);
        });
      });
    }

    
  },
  modules: {
  }
})


