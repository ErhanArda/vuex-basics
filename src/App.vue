<template>
  <div>
    <div>
      {{ getMessage }}
      <button @click.prevent="updateMessage">Update</button>
    </div>
    <div>
      <input-field></input-field>

      <listener></listener>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import InputField from "./components/InputField";
import Listener from "./components/Listener";

export default {
  methods: {
    updateMessage: function() {
      this.$store.dispatch("fetchPost");
    }
  },
  computed: {
    ...mapGetters(["getMessage", "prefix"])
  },
  components: {
    InputField,
    Listener
  },
  mutations: {
    setMessage: (state, newMessage) => {
      state.message = newMessage;
    }
  }
};
</script>
