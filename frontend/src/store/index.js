import { createStore } from 'vuex'

const axios = require('axios');

export default createStore({
  state: {
    status: '',


    user: {
      userId: -1,
      token: '',
      nom: '',
      prenom: '',
      pseudo: '',
      email: ''
    },
    axios: axios.create({baseURL : "http://localhost:3000/api/"})
  },
  getters: {
    getToken(state) {
      return state.user.token;
    }
  },
  mutations: {
    setStatus: function (state, status) {
      state.status = status;
    },
    login: function (state, user) {
      state.user = user;
    }
  },
  actions: {
  },
  modules: {
  }
})



