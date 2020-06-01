<template>
  <div>
    <div v-if="store.component == null">
      This website contains all the components (atomic &amp; molecular) used in
      FLIBO.
    </div>
    <FLIBO v-if="store.component == 'flibo'" />
    <Button v-if="store.component == 'Button'" />
    <LikeButton v-if="store.component == 'liked'" />
    <LoveButton v-if="store.component == 'loved'" />
    <DislikeButton v-if="store.component == 'disliked'" />
    <BackButton v-if="store.component == 'back'" />
    <TwoButtons v-if="store.component == 'TwoButtons'" />
  </div>
</template>

<script>
import FLIBO from "./../components/atomic/FliboLogo";
import Button from "./../components/atomic/Button";
import LikeButton from "./../components/atomic/LikeButton";
import LoveButton from "./../components/atomic/LoveButton";
import DislikeButton from "./../components/atomic/DislikeButton";
import BackButton from "./../components/atomic/BackButton";
import TwoButtons from "./../components/molecular/TwoButtons";

export default {
  name: "Home",
  components: {
    FLIBO,
    Button,
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
