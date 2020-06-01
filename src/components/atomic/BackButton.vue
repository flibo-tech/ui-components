<template>
  <button class="btn" :class="{ 'btn-back': back }" @click="goBack()">
    BACK BUTTON
  </button>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["back"])
  },
  methods: {
    ...mapMutations(["goBack"])
  }
};
</script>

<style scoped>
.btn {
  padding: 10px;
  border-radius: 50%;
  border: none;
}
/* .btn-back {}

@keyframes back-btn {} */

</style>
