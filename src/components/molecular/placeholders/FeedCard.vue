<template>
  <div class="container">
    <div style="grid-column-start: 2;">
      <Placeholder :height="300" :dark="false" />
    </div>

    <div class="content" style="grid-column-start: 4;">
      <Placeholder :height="35" :dark="true" />
      <Placeholder :height="30" :dark="false" style="width: 75%;" />
      <Placeholder :height="30" :dark="false" style="width: 45%;" />
    </div>
  </div>
</template>

<script>
import Placeholder from "../../atomic/Placeholder";
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
  grid-template-columns: 16px 40vw 24px 1fr 16px;
  //grid-template-columns: 1fr 1fr 1fr 1fr;
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
  grid-template-rows: 35px 30px 30px;
}
</style>
