<template>
  <button class="btn" :class="{ 'btn-seen': isSeen }" @click="myAction()">
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
  width: 150px;
  padding: 7%;
  background-color: rgb(172, 172, 172);
  border-radius: 25px;
  border: none;
  background-color: rgba(107, 107, 107, 0.1);
  color: rgba(255, 255, 255, 0.1);
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
    background-color: rgba(102, 102, 102, 0.75);
    color: rgba(207, 207, 207, 0.75);
  }
}
</style>
