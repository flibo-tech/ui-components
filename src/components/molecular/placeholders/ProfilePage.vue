<template>
  <div class="container">
    <Placeholder :height="400" :dark="false" />
    <div class="profilepic" style="transform: translateY(-50%);">
      <Placeholder
        :height="85"
        :dark="true"
        :circle="true"
        style=" grid-column-start: 2;"
      />
      <Placeholder
        :height="25"
        :dark="true"
        :circle="false"
        style=" grid-column-start: 2;"
      />
    </div>

    <Placeholder :height="20" :dark="true" style="width: 30%" />
    <Placeholder :height="20" :dark="false" style="width: 45%" />
    <Placeholder :height="20" :dark="false" style="width: 50%" />

    <div class="movies">
      <Placeholder
        v-for="index in 5"
        :key="index"
        :height="160"
        :dark="false"
      />
    </div>
  </div>
</template>

<script>
import Placeholder from "../../atomic/Placeholder";
export default {
  name: "ProfilePage",
  components: {
    Placeholder
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-gap: 10px;
  grid-template-rows: 400px 110px 20px 20px 20px 160px;
  max-width: 1000px;
  /* border: 1px solid $fade-grey;
  border-radius: 3px; */
  position: relative;
  margin-top: 20px;
  padding: 10px;
}
.profilepic {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 85px 1fr;
}
.movies {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 105px 105px 105px 105px 105px;
}
</style>
