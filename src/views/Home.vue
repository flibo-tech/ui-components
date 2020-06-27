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
    <ButtonTestPreview v-if="store.component == 'ButtonTestPreview'" />
    <RateProgress v-if="store.component == 'RateProgress'" />
    <JsonAnimation v-if="store.component == 'JsonAnimation'" />
    <LogoTest v-if="store.component == 'LogoTest'" />
    <LogoTestPreview v-if="store.component == 'LogoTestPreview'" />
  </div>
</template>

<script>
import Button from "./../components/atomic/Button";
import RatingLabel from "./../components/atomic/RatingLabel";
import ButtonTest from "./../components/molecular/ButtonTest";
import SwipeTest from "./../components/molecular/SwipeTest";
import SwipeTestPreview from "./../components/molecular/SwipeTestPreview";
import ButtonTestPreview from "./../components/molecular/ButtonTestPreview";
import RateProgress from "./../components/molecular/RateProgress";
import JsonAnimation from "../components/atomic/JsonAnimation";
import LogoTest from "./../components/molecular/LogoTest";
import LogoTestPreview from "./../components/molecular/LogoTestPreview"

export default {
  name: "Home",
  components: {
    Button,
    ButtonTest,
    RatingLabel,
    SwipeTest,
    SwipeTestPreview,
    ButtonTestPreview,
    RateProgress,
    JsonAnimation,
    LogoTest,
    LogoTestPreview
  },
  data() {
    return {
      store: this.$store.state
    };
  }
};
</script>

<style>
</style>
