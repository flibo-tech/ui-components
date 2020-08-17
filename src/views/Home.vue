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
    <MovieImageLandscape
      v-if="store.component == 'MovieImageLandscape'"
      imageUrl="https://image.tmdb.org/t/p/original/hpDQDYsR53uBj0JxRsDx1qniuA9.jpg"
    />
    <MovieImagePortrait
      v-if="store.component == 'MovieImagePortrait'"
      imageUrl="https://image.tmdb.org/t/p/w500/yk4J4aewWYNiBhD49WD7UaBBn37.jpg"
    />
    <div
      v-if="
        ['MovieImageLandscape', 'MovieImagePortrait'].includes(store.component)
      "
      style="line-height: 2; font-size: 20px;"
      id="text-1"
    >
      <div @click="store.component = null">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum neque
          et nesciunt deserunt nam voluptate suscipit ducimus, non commodi
          inventore beatae quos quam ipsam expedita reprehenderit fugit autem
          aliquam consectetur. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatem dolore officiis repudiandae enim sunt
          quas autem omnis, neque unde praesentium distinctio deserunt ipsa
          reiciendis nihil veritatis quo voluptatibus a! Veritatis. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Voluptatibus ipsum
          voluptas sapiente. Deserunt quibusdam vero quo doloribus, qui ipsum,
          beatae omnis quaerat rem maiores reiciendis laudantium suscipit esse
          eius maxime? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          In, nihil voluptas nostrum tempore facilis cumque repellendus
          asperiores harum minima, dolor fuga excepturi. Ea doloremque cumque
          facere quas harum deleniti ipsam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nemo corporis deleniti quas obcaecati
          hic laboriosam nulla aperiam ut tempore unde ullam, rerum quidem ab
          consectetur dolore quod cum architecto sint.
        </p>
      </div>
      <div>
        <h1>Lorem ipsum dolor</h1>
        <h1>Lorem ipsum dolor</h1>
        <h1>Lorem ipsum dolor</h1>
      </div>
    </div>
    <PosterTest v-if="store.component == 'PosterTest'" />
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
import PosterTest from "./../components/molecular/PosterTest";
import MovieImageLandscape from "./../components/atomic/MovieImageLandscape";
import MovieImagePortrait from "./../components/atomic/MovieImagePortrait";

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
    PosterTest,
    MovieImageLandscape,
    MovieImagePortrait
  },
  data() {
    return {
      store: this.$store.state,
    };
  }
};
</script>

<style>
.home-container {
  width: 100vw;
}
</style>
