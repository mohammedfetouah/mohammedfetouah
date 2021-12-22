import { createStore } from 'vuex'

const axios = require('axios');

export default createStore({
  state: {
    status: '',
    user: {
      email: "fetouah.m@gmail.com",
      nom: "fetouah",
      prenom: "mohammed",
      pseudo: "MohammedOCR",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY0MDIwMjg2MywiZXhwIjoxNjQwMjg5MjYzfQ.I0wAyA9vo55W7Avgns-yG8WYeH7LmYpisL1ad-8fwbo",
      userId: 1,
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



