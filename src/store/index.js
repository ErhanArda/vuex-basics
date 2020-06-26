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
    resetPrefix: state => {
      state.prefix = "Unset: ";
    },
    setMessage: (state, newMessage) => {
      state.message = newMessage;
    }
  },
  actions: {
    resetMessage: context => {
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json())
        .then(json => {
          context.commit("resetPrefix");
          context.commit("setMessage", json.title);
        });
    }
  }
});
