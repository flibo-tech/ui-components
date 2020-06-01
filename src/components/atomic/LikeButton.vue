<template>
  <button class="btn" :class="{ 'btn-liked': isLiked }" @click="myAction()">
    <img src="./../../assets/icons/like-icon-white.svg" alt="" />
  </button>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["isLiked"])
  },
  methods: {
    ...mapMutations(["myAction"])
  }
};
</script>

<style scoped>
.btn {
  padding: 10px;
  border-radius: 50%;
  border: none;
}
.btn-liked {
  animation-name: like-btn;
  animation-duration: 0.75s;
}

@keyframes like-btn {
  from {
    background-color: white;
    transform: rotate(-10deg);
  }
  to {
    background-color: lightgreen;
    transform: rotate(10deg);
  }
}
</style>
