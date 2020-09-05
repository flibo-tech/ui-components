<template>
  <div class="container">
    <Placeholder :height="35" :dark="true" style="width: 75%" />
    <Placeholder :height="70" :dark="false" />
    <Placeholder :height="25" :dark="false" style="width: 50%" />
    <div class="artists">
      <Placeholder :height="115" :dark="false" />
      <Placeholder :height="115" :dark="false" />
      <Placeholder :height="115" :dark="false" />
      <Placeholder :height="115" :dark="false" />
      <Placeholder :height="115" :dark="false" />
    </div>
    <div class="movies">
      <Placeholder :height="150" :dark="false" />
      <Placeholder :height="150" :dark="false" />
      <Placeholder :height="150" :dark="false" />
      <Placeholder :height="150" :dark="false" />
      <Placeholder :height="150" :dark="false" />
    </div>
  </div>
</template>

<script>
import Placeholder from "../../atomic/Placeholder";
export default {
  name: "MovieInfo",
  components: {
    Placeholder
  }
};
</script>

<style lang="scss" scoped>
.container {
  background: #fff;
  max-width: 1000px;
  /* border: 1px solid $fade-grey;
  border-radius: 3px; */
  position: relative;
  margin-top: 20px;
  padding: 10px;
}
.artists {
  display: grid;
  grid-template-columns: 80px 80px 80px 80px 80px;
}
.movies {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
</style>
