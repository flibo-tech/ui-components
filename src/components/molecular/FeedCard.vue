<template>
  <div class="container">
    <div style="grid-column-start: 2;">
      <Placeholder :height="300" :dark="false" />
    </div>

    <div style="grid-column-start: 4;">
      <Placeholder :height="35" :dark="true" />
      <Placeholder :height="30" :dark="false" />
      <Placeholder :height="30" :dark="false" />
      <Placeholder :height="30" :dark="false" />
      <Placeholder :height="30" :dark="false" />
    </div>
  </div>
</template>

<script>
import Placeholder from "../atomic/Placeholder";

export default {
  name: "FeedCard",
  components: {
    Placeholder
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 16px 200px 48px 1fr 16px;
  //grid-template-columns: 1fr 1fr 1fr 1fr;
  background: #fff;
  max-width: 1000px;
  /* border: 1px solid $fade-grey;
  border-radius: 3px; */
  position: relative;
  margin-top: 20px;
  padding: 10px;
}
</style>
