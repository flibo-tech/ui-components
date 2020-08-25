<template>
  <div class="container">
    <div class="placeload">
      <div class="image-placeholder loads" :style="{'width': width + 'px', 'height': height + 'px'}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RectanglePlaceholder",
  props: {
    height: {
      type: Number,
      required: true
    },
    width: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
$background: #f6f7f8;
$grey-nuance-lighter: #eeeeee;
$grey-nuance-darker: #dddddd;
$fade-grey: #e8e8e8;

.container {
  .placeload {
    padding: 5px;
    .image-placeholder {
      width: 500px;
      height: 250px;
    }
  }
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
  background: linear-gradient(to right, $grey-nuance-lighter 8%, $grey-nuance-darker 18%, $grey-nuance-lighter 33%);
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