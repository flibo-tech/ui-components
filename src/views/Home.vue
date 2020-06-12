<template>
  <div>
    <div v-if="store.component == null">
      This website contains all the components (atomic &amp; molecular) used in
      FLIBO.
    </div>
    <Button v-if="store.component == 'Button'" />
    <RatingLabel v-if="store.component == 'RatingLabel'" />
    <TwoButtons v-if="store.component == 'TwoButtons'" />
    <SwipeTest v-if="store.component == 'SwipeTest'" />
  </div>
</template>

<script>
import Button from "./../components/atomic/Button";
import RatingLabel from "./../components/atomic/RatingLabel";
import TwoButtons from "./../components/molecular/TwoButtons";
import SwipeTest from "./../components/molecular/SwipeTest";

export default {
  name: "Home",
  components: { Button, TwoButtons, RatingLabel, SwipeTest },
  data() {
    return {
      store: this.$store.state
    };
  }
};
</script>
