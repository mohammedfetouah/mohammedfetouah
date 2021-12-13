import { createStore} from 'vuex';

const axios = require('axios');

const instance = axios.create({
  baseURL : "http://localhost:3000/api/auth/"
});




export default createStore({
  state: {
    status: '',
    user: {
      userId: -1,
      token: '',
    },
    userInfos: {
      nom: '',
      prenom: '',
      pseudo: '',
      email: '',
    }
  },
  getters: {
  },
  mutations: {
    setStatus: function (state, status) {
      state.status = status;
    },

  },
  actions: {
    createAccount: ({commit}, userInfos) => {
      commit('setStatus', 'loading');
      return new Promise ((resolve, reject) => {
        commit;
        instance.post('/signup', userInfos)
        .then(function (response) {
          commit('setStatus', 'created');
          console.log(response);
          resolve(response);
        })
        .catch(function (error) {
          commit('setStatus', 'error_create');
          console.log(error);
          reject(error);
        });
      });
    },
    
    login: ({commit}, userInfos) => {
      commit('setStatus', 'loading');
      return new Promise ((resolve, reject) => {
        instance.post('/login', userInfos)
        .then(function (response) {
          console.log('ok1')
          commit('setStatus', '');
          commit('logUser', response.data);
          console.log(response);
          resolve(response);
        })
        .catch(function (error) {
          commit('setStatus', 'error_login');
          console.log(error);
          reject(error);
        });
      });
    },
  },
  modules: {
  }
})


