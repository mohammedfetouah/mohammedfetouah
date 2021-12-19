import { createStore } from 'vuex'

const axios = require('axios');

export default createStore({
  state: {
    status: '',




    // user: {
    //   email: "fetouah.m@gmail.com",
    //   nom: "fetouah",
    //   prenom: "mohammed",
    //   pseudo: "Mohammed95880",
    //   token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIyLCJpYXQiOjE2Mzk2NzkzMzUsImV4cCI6MTYzOTc2NTczNX0.cHKGOQQ_kN32sJvtTy1ojQiQ5KNR0Yhos8NUPb08q8o",
    //   userId: 22,
    // },




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



