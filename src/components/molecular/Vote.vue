<template>
  <div class="main-container">
    <svg
    :style="userScore > 0 ? {'background-color': '#bbbbbb'} : {}"
      @click="upvoteHandler"
      class="upvote"
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
    </svg>

    {{ userScore }}
    <svg
    :style="userScore < 0 ? {'background-color': '#bbbbbb'} : {}"
      @click="downvoteHandler"
      class="downvote"
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
    </svg>
  </div>
</template>

<script>
export default {
  name: "Vote",
  props: {
    totalScore: {
      type: Number,
      required: true
    },
    userScore: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data() {
    return {
    };
  },
  methods: {
    kFormatter(num) {
      return Math.abs(num) > 999
        ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
        : Math.sign(num) * Math.abs(num);
    },
    upvoteHandler() {
      if (this.userScore === 1) {
        this.userScore--;
      } else if (this.userScore < 0) {
        this.userScore += 2;
      } else {
        this.userScore++;
      }
      this.$emit('userscore', this.userScore)
    },
    downvoteHandler() {
      if (this.userScore === -1) {
        this.userScore++;
      } else if (this.userScore > 0) {
        this.userScore -= 2;
      } else {
        this.userScore--;
      }
    }
  }
};
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: space-between;
}

.upvote,
.downvote {
  fill: #222222;
  border-radius: 50%;
  transition: 0.4s ease-in-out;
}

.downvote {
  transform: rotateZ(180deg);
}
</style>