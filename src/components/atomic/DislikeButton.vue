<template>
  <button
    class="btn"
    :class="{ 'btn-disliked': isDisliked }"
    @click="myAction()"
  >
    <img src="./../../assets/icons/dislike-icon-white.svg" />
  </button>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["isDisliked"])
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
.btn-disliked {
  animation-name: disliked-btn;
  animation-duration: 0.75s;
}

@keyframes disliked-btn {
  from {
    background-color: white;
    transform: rotate(0deg);
  }
  to {
    background-color: rgb(243, 98, 98);

    transform: rotate(-5deg);
  }
}
</style>
