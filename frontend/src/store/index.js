import { createStore } from 'vuex'

const axios = require('axios');

export default createStore({
  state: {
    status: '',
    user: {
      userId: -1,
      email: '',
      nom: '',
      prenom: '',
      pseudo: '',
      token: ''
    },
    axios: axios.create({baseURL : "http://localhost:3000/api/"})
  },
  getters: {
    getToken(state) {
      return state.user.token;
    }
  },
  mutations: {
    initialiseUserStore(state) {
			if(localStorage.getItem('userStore')) {
        state.user = JSON.parse(localStorage.getItem('userStore'));
			}
		},
    logout(state) {
      localStorage.clear();
			state.user = {
        userId: -1,
        email: '',
        nom: '',
        prenom: '',
        pseudo: '',
        token: ''
      };
		}
  },
  actions: {
  },
  modules: {
  }
})
