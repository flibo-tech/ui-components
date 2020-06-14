<template>
  <div>
    <div v-if="store.component == null">
      This website contains all the components (atomic &amp; molecular) used in
      FLIBO.
    </div>
    <Button v-if="store.component == 'Button'" />
    <RatingLabel v-if="store.component == 'RatingLabel'" />
    <ButtonTest v-if="store.component == 'ButtonTest'" />
    <SwipeTest v-if="store.component == 'SwipeTest'" />
    <SwipeTestPreview v-if="store.component == 'SwipeTestPreview'" />
  </div>
</template>

<script>
import Button from "./../components/atomic/Button";
import RatingLabel from "./../components/atomic/RatingLabel";
import ButtonTest from "./../components/molecular/ButtonTest";
import SwipeTest from "./../components/molecular/SwipeTest";
import SwipeTestPreview from "./../components/molecular/SwipeTestPreview";

export default {
  name: "Home",
  components: { Button, ButtonTest, RatingLabel, SwipeTest, SwipeTestPreview },
  data() {
    return {
      store: this.$store.state
    };
  }
};
</script>
