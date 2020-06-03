<template>
  <button class="btn" :class="{ 'btn-seen': isSeen }" @click="myAction">
    HAVEN'T SEEN
  </button>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(["isSeen"])
  },
  methods: {
    ...mapMutations(["myAction"])
  }
};
</script>

<style scoped>
.btn {
  width: 140px;
  height: 35px;
  padding: 3px;
  background-color: rgba(107, 107, 107, 0.1);
  border-radius: 25px;
  border: none;
  color: #fff;
  opacity: 0.8;
  font-size: 13px;
}

.btn-seen {
  animation-name: seen-btn;
  animation-duration: 1s;
}

@keyframes seen-btn {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-10px);
    background-color: #585a65;
    opacity: 1;
  }
}
</style>
