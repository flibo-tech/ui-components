<template>
  <div class="container">
    <Placeholder :height="500" :dark="false" />
    <Placeholder :height="35" :dark="true" />
    <Placeholder :height="30" :dark="false" style="width: 75%" />
  </div>
</template>

<script>
import Placeholder from "../../atomic/Placeholder";
export default {
  name: "MoviePage",
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
</style>
