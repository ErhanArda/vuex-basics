<template>
  <input v-model="inputValue" />
</template>

<script>
export default {
  props: ["field"],
  computed: {
    inputValue: {
      get() {
        return this.$store.state[this.field];
      },
      set(value) {
        this.$store.commit("setField", {
          field: this.field,
          value: value
        });
      }
    }
  }
};
</script>

<style scoped></style>
