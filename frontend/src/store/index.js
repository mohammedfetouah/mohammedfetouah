import { createStore} from 'vuex';

const axios = require('axios');



export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
    createAccount: ({commit}, userInfos) => {
      commit;
      axios.post('/createAccount', userInfo)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
  modules: {
  }
})


