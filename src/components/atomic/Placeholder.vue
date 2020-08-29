<template>
  <div class="placeload">
    <div class="image-placeholder loads" :style="customStyle"></div>
  </div>
</template>

<script>
export default {
  name: "Placeholder",
  props: {
    circle: {
      type: Boolean,
      required: false,
      default: false
    },
    height: {
      type: Number,
      required: false,
      default: 16
    },
    borderRadius: {
      type: Number,
      required: false,
      default: 8
    },
    dark: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  computed: {
    customStyle() {
      if (!this.circle)
        return (
          "border-radius: " +
          this.borderRadius +
          "px; width: 100%; height: " +
          this.height +
          "px;"
        );
      else
        return (
          "border-radius: 50%;" +
          " width: " +
          this.height +
          "px;" +
          " height: " +
          this.height +
          "px;"
        );
    }
  }
};
</script>

<style lang="scss" scoped>
$background: #f6f7f8;
$grey-nuance-darker: #efefef;
$grey-nuance-lighter: #f8f8f8;
$fade-grey: #e8e8e8;

.placeload {
  padding: 10px;
}

.loads {
  -webkit-animation-duration: 1.25s;
  animation-duration: 1.25s;
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
    color-stop(8%, $grey-nuance-darker),
    color-stop(18%, $grey-nuance-lighter),
    color-stop(33%, $grey-nuance-darker)
  );
  background: -webkit-linear-gradient(
    left,
    #efefef 8%,
    #f8f8f8 18%,
    #efefef 33%
  );
  background: linear-gradient(
    to right,
    $grey-nuance-darker 8%,
    $grey-nuance-lighter 18%,
    $grey-nuance-darker 33%
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
