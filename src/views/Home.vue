<template>
  <div class="home-container">
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
    <CardAnimation v-if="store.component == 'CardAnimation'" />
    <ProgressTest v-if="store.component == 'ProgressTest'" />
    <MovieImage v-if="store.component == 'MovieImage'" 
    imageUrl="poster" />
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
import LogoTestPreview from "./../components/molecular/LogoTestPreview";
import CardAnimation from "../components/atomic/CardAnimation";
import ProgressTest from "./../components/molecular/ProgressTest";
import MovieImage from "./../components/atomic/MovieImage";

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
    LogoTestPreview,
    CardAnimation,
    ProgressTest,
    MovieImage
  },
  data() {
    return {
      store: this.$store.state
    };
  }
};
</script>

<style>
.home-container {
  width: 100vw;
}
</style>
