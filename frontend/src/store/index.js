import { createStore } from 'vuex'

const axios = require('axios');

export default createStore({
  state: {
    status: '',




    user: {
      email: "fetouah.m@gmail.com",
      nom: "fetouah",
      prenom: "mohammed",
      pseudo: "Mohammed95880",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIyLCJpYXQiOjE2Mzk5NDg2ODEsImV4cCI6MTY0MDAzNTA4MX0.ARs6_32YUXb33CsraUZOX7TH_rGSow-QW909wP-uhTw" ,
      userId: 22,
    },




    // user: {
    //   userId: -1,
    //   token: '',
    //   nom: '',
    //   prenom: '',
    //   pseudo: '',
    //   email: ''
    // },
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



