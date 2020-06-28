<template>
  <input v-model="message" />
</template>

<script>
export default {
  computed: {
    message: {
      get() {
        return this.$store.state.message;
      },
      set(value) {
        this.$store.commit("setMessage", value);
      }
    }
  }
};
</script>

<style scoped></style>
