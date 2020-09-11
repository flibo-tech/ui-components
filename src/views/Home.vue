<template>
  <div
    :style="[
      store.component == 'MovieImagePortrait' ||
      store.component == 'MovieImageLandscape'
        ? { width: '100vw' }
        : {}
    ]"
  >
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
    <UserRating v-if="store.component == 'UserRating'" />
    <ContentMetaBlockTest v-if="store.component == 'ContentMetaBlockTest'" />
    <Person v-if="store.component == 'Person'" />
    <Artist v-if="store.component == 'Artist'" />
    <PlaceholderTest v-if="store.component == 'PlaceholderTest'" />
    <TextField v-if="store.component == 'TextField'" />
    <CharacterCounterTest v-if="store.component == 'CharacterCounterTest'" />

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
    <Trailer
      style="margin-top: 100px;"
      v-if="store.component == 'Trailer'"
      :contentId="114538"
      trailerId="yoLFk4JK_RM"
      :whereToWatch="whereToWatch"
      parent="home"
      feedType="flibo"
      :size="100"
    />
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
import UserRating from "./../components/molecular/UserRating";
import MovieImageLandscape from "./../components/atomic/MovieImageLandscape";
import MovieImagePortrait from "./../components/atomic/MovieImagePortrait";
import Trailer from "./../components/atomic/Trailer";
import TextField from "./../components/atomic/TextField";
import ContentMetaBlockTest from "./../components/molecular/ContentMetaBlockTest";
import PlaceholderTest from "./../components/molecular/PlaceholderTest";
import Artist from "./../components/molecular/Artist";
import CharacterCounterTest from "./../components/molecular/CharacterCounterTest";

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
    MovieImagePortrait,
    Trailer,
    UserRating,
    ContentMetaBlockTest,
    Artist,
    PlaceholderTest,
    TextField,
    CharacterCounterTest
  },
  data() {
    return {
      store: this.$store.state
    };
  }
};
</script>

<style></style>
