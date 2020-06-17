<template>
  <div v-if="value <= maxValue && value >= 0">
    Rate <span>{{ value }}/{{ maxValue }}</span>
  </div>
</template>

<script>
export default {
  name: "Rate",

  props: {
    value: {
      type: Number,
      default: 0
    },

    maxValue: {
      type: Number,
      default: 25
    }
  },

};
</script>

<style lang="scss" scoped>
$primary-font: 'Roboto', sans-serif;
div {
  font-family: $primary-font;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
}

div span {
  font-family: $primary-font;
  font-weight: 300;
}
</style>