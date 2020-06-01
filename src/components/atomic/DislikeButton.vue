<template>
  <button class="btn" :class="{ 'btn-dislikedd': disliked }" @click="myAction">
    <img src="./../../assets/icons/dislike-icon-white.svg" />
  </button>
</template>

<script>
export default {
  data() {
    return {
      disliked: false
    };
  },
  methods: {
    myAction() {
      this.disliked = true;
      setTimeout(() => {
        this.reset();
      }, 1000);
    },
    reset() {
      this.disliked = false;
    }
  }
};
</script>

<style scoped>
.btn {
  padding: 10px;
  border-radius: 50%;
  border: none;
}
.btn-dislikedd {
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
