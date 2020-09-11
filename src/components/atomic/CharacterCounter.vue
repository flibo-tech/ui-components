<template>
  <div>
    <svg class="progress-ring" width="300" height="300">
      <circle
        :style="customStyle"
        class="progress-ring__circle"
        stroke="#294ED2"
        fill="transparent"
        :r="radius"
        cx="350"
        cy="150"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "CharacterCounter",
  props: {
    limit: {
      type: Number,
      required: true
    },
    count: {
      type: Number,
      required: true
    },
    radius: {
      type: Number,
      required: true
    },
    width: {
      type: Number,
      required: true
    }
  },
  computed: {
    percentage() {
      return (this.count / this.limit) * 100;
    },
    customStyle() {
      return (
        "stroke-dasharray: calc(2 * 22 / 7 * " +
        this.radius +
        " * " +
        this.percentage +
        " / 100), calc(2 * 22 / 7 * " +
        this.radius +
        " ); stroke-width: " +
        this.width +
        ";"
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.progress-ring__circle {
  transition: 0.35s stroke-dashoffset;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}
</style>
