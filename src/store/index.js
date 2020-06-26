import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: "Hello from Vuex!",
    prefix: "New Message: "
  },
  getters: {
    prefix: state => {
      return state.prefix.toUpperCase();
    },
    getMessage: (state, getters) => {
      return getters.prefix + state.message;
    }
  },
  mutations: {
    setMessage: (state, newMessage) => {
      state.message = newMessage;
    }
  }
});
