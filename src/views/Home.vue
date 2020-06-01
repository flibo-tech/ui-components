<template>
  <div>
    <div v-if="store.component == null">
      This website contains all the components (atomic &amp; molecular) used in
      FLIBO.
    </div>
    <Button v-if="store.component == 'Button'" />
    <LikeButton v-if="store.component == 'liked'" />
    <LoveButton v-if="store.component == 'loved'" />
    <DislikeButton v-if="store.component == 'disliked'" />
    <TwoButtons v-if="store.component == 'TwoButtons'" />
  </div>
</template>

<script>
import Button from "./../components/atomic/Button";
import LikeButton from "./../components/atomic/LikeButton";
import LoveButton from "./../components/atomic/LoveButton";
import DislikeButton from "./../components/atomic/DislikeButton";
import TwoButtons from "./../components/molecular/TwoButtons";

export default {
  name: "Home",
  components: { Button, LikeButton, LoveButton, DislikeButton, TwoButtons },
  data() {
    return {
      store: this.$store.state
    };
  }
};
</script>
