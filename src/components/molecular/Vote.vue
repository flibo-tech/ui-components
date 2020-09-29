<template>
  <div class="main-container">
    <img
      @click="upvoteHandler()"
      class="upvote"
      :style="[
        localUserScore > 0 ? { 'background-color': '#bbbbbb' } : {},
        createrIdMatch ? { opacity: 0.6 } : {}
      ]"
      src="../../assets/icons/vote.svg"
    />

    {{ finalScore }}

    <img
      :style="[
        localUserScore < 0 ? { 'background-color': '#bbbbbb' } : {},
        createrIdMatch ? { opacity: 0.6 } : {}
      ]"
      @click="downvoteHandler"
      class="downvote"
      src="../../assets/icons/vote.svg"
    />
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
    },
    createrId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      localTotalScore: this.totalScore,
      localUserScore: this.userScore,
      createrIdMatch: this.createrId === this.$store.state.user.id
    };
  },
  computed: {
    finalScore() {
      if (this.localTotalScore < 1000) {
        return this.localTotalScore;
      } else return this.kFormatter(this.localTotalScore);
    }
  },
  methods: {
    kFormatter(num) {
      return Math.abs(num) > 999
        ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
        : Math.sign(num) * Math.abs(num);
    },
    upvoteHandler() {
      if (this.createrIdMatch) {
        return;
      }
      if (this.localUserScore === 1) {
        this.localUserScore--;
        this.localTotalScore--;
      } else if (this.localUserScore < 0) {
        this.localTotalScore += 2;
        this.localUserScore += 2;
      } else {
        this.localTotalScore++;
        this.localUserScore++;
      }

      this.$emit("userscore", this.localUserScore);
    },
    downvoteHandler() {
      if (this.createrIdMatch) {
        return;
      }
      if (this.localUserScore === -1) {
        this.localUserScore++;
        this.localTotalScore++;
      } else if (this.localUserScore > 0) {
        this.localTotalScore -= 2;
        this.localUserScore -= 2;
      } else {
        this.localTotalScore--;
        this.localUserScore--;
      }
      this.$emit("userscore", this.localUserScore);
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
  transition: 0.3s ease-in-out;
}

.downvote {
  transform: rotateZ(180deg);
}
</style>