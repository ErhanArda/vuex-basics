<template>
  <div>
    {{ getMessage }}
    <button @click.prevent="updateMessage">Update</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    updateMessage: function() {
      this.$store.dispatch("resetMessage", "A mutated message");
    }
  },
  computed: {
    ...mapGetters(["getMessage", "prefix"])
  }
};
</script>
