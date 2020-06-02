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
  color: #fff;
}

.btn-seen {
  animation-name: seen-btn;
  animation-duration: 1s;
}

@keyframes seen-btn {
  from {
    transform: translateY(0px);
    opacity: 0;
  }
  to {
    background-color: rgb(102, 102, 102);

    color: rgb(207, 207, 207);
    transform: translateY(-10px);

    opacity: 0.75;
  }
}
</style>
