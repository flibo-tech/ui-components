<template>
  <div class="home">
    <div v-if="store.component == null">
      This website contains all the components (atomic &amp; molecular) used in
      FLIBO.
    </div>
    <FLIBO class="atomic" v-if="store.component == 'flibo'" />
    <NotSeen class="atomic" v-if="store.component == 'notSeen'" />
    <LikeButton class="atomic" v-if="store.component == 'liked'" />
    <LoveButton class="atomic" v-if="store.component == 'loved'" />
    <DislikeButton class="atomic" v-if="store.component == 'disliked'" />
    <BackButton class="atomic" v-if="store.component == 'back'" />
    <TwoButtons class="atomic" v-if="store.component == 'TwoButtons'" />
  </div>
</template>

<script>
import FLIBO from "./../components/atomic/FliboLogo";
import NotSeen from "./../components/atomic/NotSeen";
import LikeButton from "./../components/atomic/LikeButton";
import LoveButton from "./../components/atomic/LoveButton";
import DislikeButton from "./../components/atomic/DislikeButton";
import BackButton from "./../components/atomic/BackButton";
import TwoButtons from "./../components/molecular/TwoButtons";

export default {
  name: "Home",
  components: {
    FLIBO,
    NotSeen,
    LikeButton,
    LoveButton,
    DislikeButton,
    BackButton,
    TwoButtons
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
  text-align: center;
}
</style>
