<template>
  <div class="container">
    <Placeholder :height="500" :dark="false" />
    <div class="profilepic" style="transform: translateY(-50%);">
      <Placeholder
        :height="130"
        :dark="true"
        :circle="true"
        style=" grid-column-start: 2;"
        
      />
    </div>

    <Placeholder :height="30" :dark="false" style="width: 75%" />
    <Placeholder :height="30" :dark="false" style="width: 50%" />
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
  background: #fff;
  max-width: 1000px;
  /* border: 1px solid $fade-grey;
  border-radius: 3px; */

  position: relative;
  margin-top: 20px;
  padding: 10px;
}
.profilepic {
  display: grid;
  grid-template-columns: 1fr 130px 1fr;
}
</style>
