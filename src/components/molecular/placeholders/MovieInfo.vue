<template>
  <div class="container content">
    <Placeholder :height="35" :dark="true" style="width: 75%;" />
    <Placeholder v-for="index in 3" :key="index" :height="15" :dark="false" />
    <Placeholder :height="25" :dark="false" style="width: 50%;" />
    <div class="artists">
      <Placeholder v-for="index in 5" :key="index" :height="85" :dark="false" />
    </div>
    <div class="movies">
      <Placeholder
        v-for="index in 5"
        :key="index"
        :height="185"
        :dark="false"
      />
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
  max-width: 1000px;
  /* border: 1px solid $fade-grey;
  border-radius: 3px; */
  position: relative;
  margin-top: 20px;
  padding: 10px;
}
.content {
  display: grid;
  grid-gap: 10px;
  grid-template-rows: 35px 15px 15px 15px 25px 85px 185px;
}
.artists {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 55px 55px 55px 55px 55px;
}
.movies {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 125px 125px 125px 125px 125px;
}
</style>
