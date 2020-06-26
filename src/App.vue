<template>
  <div>
    <!-- {{ $store.getters.getMessage }} -->
    {{ myMessage }}
  </div>
</template>

<script>
export default {
  computed: {
    myMessage: function() {
      return this.$store.getters.getMessage;
    }
  }
};
</script>
