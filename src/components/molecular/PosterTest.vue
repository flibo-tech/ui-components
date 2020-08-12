<template>
  <div class="container">
    <Poster
      image="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/1800/star.jpg"
      :containerWidth="200"
      :contentId="321"
      title="Title"
      parent="Something"
      :noOfPlat="1"
    />

    <Poster
      image="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/1800/star.jpg"
      :containerWidth="200"
      :contentId="321"
      title="Title"
      parent="Something"
      :noOfPlat="2"
    />

    <Poster
      image="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/1800/star.jpg"
      :containerWidth="200"
      :contentId="321"
      title="Title"
      parent="Something"
      :noOfPlat="3"
    />
  </div>
</template>

<script>
import Poster from "../atomic/Poster";
export default {
  components: { Poster },

  data() {
    return {};
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  width: 1000px;
}
</style>