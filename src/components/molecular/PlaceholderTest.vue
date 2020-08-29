<template>
  <div class="container">
    <div>
      <Placeholder :height="130" :circle="true" :dark="true" />
      <Placeholder :height="50" :borderRadius="10" :dark="true" />
      <Placeholder :height="50" :borderRadius="50" :dark="true" />
    </div>
    <div>
      <Placeholder :height="100" :borderRadius="10" />
      <Placeholder :height="200" :borderRadius="10" />
      <Placeholder :height="180" :circle="true" />
    </div>
    <div>
      <Placeholder :height="80" :circle="true" />
      <Placeholder :height="30" :borderRadius="10" />
      <Placeholder :height="30" :borderRadius="50" />
      <Placeholder :height="80" :circle="true" />
      <Placeholder :height="80" :borderRadius="10" />
      <Placeholder :height="30" :borderRadius="50" />
    </div>
    <div>
      <Placeholder :height="130" :borderRadius="10" />
      <Placeholder :height="280" :circle="true" />
    </div>
  </div>
</template>

<script>
import Placeholder from "../atomic/Placeholder";

export default {
  name: "PlaceholderTest",
  components: {
    Placeholder
  }
};
</script>

<style lang="scss" scoped>
$background: #f6f7f8;
$grey-nuance-lighter: #eeeeee;
$grey-nuance-darker: #dddddd;
$fade-grey: #e8e8e8;

.container {
  display: grid;
  grid-template-columns: 150px 200px 100px 300px;
  //grid-template-columns: 1fr 1fr 1fr 1fr;
  background: #fff;
  max-width: 800px;
  /* border: 1px solid $fade-grey;
  border-radius: 3px; */
  position: relative;
  margin-top: 20px;
}

.loads {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-name: placeload;
  animation-name: placeload;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  background: $background;
  background: $grey-nuance-lighter;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(8%, $grey-nuance-lighter),
    color-stop(18%, $grey-nuance-darker),
    color-stop(33%, $grey-nuance-lighter)
  );
  background: -webkit-linear-gradient(
    left,
    #eeeeee 8%,
    #dddddd 18%,
    #eeeeee 33%
  );
  background: linear-gradient(
    to right,
    $grey-nuance-lighter 8%,
    $grey-nuance-darker 18%,
    $grey-nuance-lighter 33%
  );
  -webkit-background-size: 800px 104px;
  background-size: 1200px 104px;
  position: relative;
}

@-webkit-keyframes placeload {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}

@keyframes placeload {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
</style>
