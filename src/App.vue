<template>
  <div>
    <!-- {{ $store.getters.getMessage }} -->
    {{ getMessage }}
    <!-- <div>
      {{ prefix }}
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getMessage", "prefix"]),
    // myMessage: function() {
    //   return this.$store.getters.getMessage;
    // }
  }
};
</script>
