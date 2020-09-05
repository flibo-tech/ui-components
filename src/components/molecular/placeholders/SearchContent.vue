<template>
  <div class="container">
    <div style="grid-column-start: 2;">
      <Placeholder :height="150" :dark="false" />
    </div>

    <div style="grid-column-start: 4;">
      <Placeholder :height="30" :dark="true" style="width: 50%" />
      <Placeholder :height="30" :dark="false" style="width: 25%" />
    </div>
  </div>
</template>

<script>
import Placeholder from "../../atomic/Placeholder";
export default {
  name: "SearchContent",
  components: {
    Placeholder
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 16px 100px 24px 1fr 16px;
  background: #fff;
  max-width: 1000px;
  /* border: 1px solid $fade-grey;
  border-radius: 3px; */
  position: relative;
  margin-top: 20px;
  padding: 10px;
}
</style>
