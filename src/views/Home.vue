<template>
  <div class="home">
    <div v-if="store.component == null">
      This website contains all the components (atomic &amp; molecular) used in
      FLIBO.
    </div>
    <GoogleButton class="atomic" v-if="store.component == 'googleButton'" />
    <FacebookButton class="atomic" v-if="store.component == 'facebookButton'" />
    <StartRating class="atomic" v-if="store.component == 'startButton'" />
    <Rated class="atomic" v-if="store.component == 'rating'" />
    <ProgressBar class="atomic" v-if="store.component == 'progressBar'" />
    <LikeButton class="atomic" v-if="store.component == 'liked'" />
    <LoveButton class="atomic" v-if="store.component == 'loved'" />
    <DislikeButton class="atomic" v-if="store.component == 'disliked'" />
    <BackButton class="atomic" v-if="store.component == 'back'" />
    <NotSeen class="atomic" v-if="store.component == 'notSeen'" />
    <Card class="atomic" v-if="store.component == 'card'" />
    <FLIBO class="atomic" v-if="store.component == 'flibo'" />
  </div>
</template>

<script>
import GoogleButton from "./../components/atomic/GoogleButton";
import FacebookButton from "./../components/atomic/FacebookButton";
import Rated from "./../components/atomic/Rated";
import StartRating from "./../components/atomic/StartRating";
import FLIBO from "./../components/atomic/FliboLogo";
import LikeButton from "./../components/atomic/LikeButton";
import LoveButton from "./../components/atomic/LoveButton";
import DislikeButton from "./../components/atomic/DislikeButton";
import NotSeen from "./../components/atomic/NotSeen";
import BackButton from "./../components/atomic/BackButton";
import ProgressBar from "./../components/atomic/ProgressBar";
import Card from "./../components/atomic/Card";

export default {
  name: "Home",
  components: {
    GoogleButton,
    FacebookButton,
    StartRating,
    FLIBO,
    LikeButton,
    LoveButton,
    DislikeButton,
    BackButton,
    NotSeen,
    Card,
    Rated,
    ProgressBar
  },
  data() {
    return {
      store: this.$store.state
    };
  }
};
</script>

<style scoped>
.home {
  margin: auto;
}
</style>
