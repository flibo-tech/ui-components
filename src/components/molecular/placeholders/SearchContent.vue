<template>
  <div class="container">
    <div style="grid-column-start: 2;">
      <Placeholder :height="85" :dark="false" />
    </div>

    <div class="content" style="grid-column-start: 4;">
      <Placeholder
        :height="15"
        :dark="true"
        style="width: 50%; grid-row-start: 1;"
      />
      <Placeholder
        :height="35"
        :dark="false"
        style="width: 25%; grid-row-start: 3;"
      />
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
  grid-template-columns: 16px 55px 24px 1fr 16px;
  max-width: 1000px;
  align-items: center;
  /* border: 1px solid $fade-grey;
  border-radius: 3px; */
  position: relative;
  margin-top: 20px;
  padding: 10px;
}
.content {
  display: grid;
  grid-template-rows: 15px 10px 35px;
}
</style>
