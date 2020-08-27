<template>
  <div class="placeload">
    <div
      v-if="!this.circle"
      class="image-placeholder loads"
      :style="
        'border-radius: ' +
          this.borderRadius +
          'px; height: ' +
          this.height +
          'px;'
      "
    ></div>
    <div
      v-if="this.circle"
      class="image-placeholder loads"
      :style="'border-radius: 50%;' + ' height: ' + this.height + 'px;'"
    ></div>
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
  }
};
</script>

<style lang="scss" scoped>
$background: #f6f7f8;
$grey-nuance-lighter: #eeeeee;
$grey-nuance-darker: #dddddd;
$fade-grey: #e8e8e8;

.placeload {
  padding: 10px;
  .image-placeholder {
    width: 100%;
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
