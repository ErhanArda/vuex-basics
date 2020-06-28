export default {
  state: {
    message: "Hello from Vuex!",
    amount: 0,
    prefix: "New Message: ",
    post: null
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
    },
    setPost: (state, post) => {
      state.post = post;
    },
    setField: (state, fieldObject) => {
      state[fieldObject.field] = fieldObject.value;
    }
  },
  actions: {
    fetchPost: context => {
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json())
        .then(post => {
          context.commit("setPost", post);
          context.dispatch("resetMessage");
        });
    },
    resetMessage: context => {
      context.commit("resetPrefix");
      context.commit("setMessage", context.state.post.title);
    }
  }
};
