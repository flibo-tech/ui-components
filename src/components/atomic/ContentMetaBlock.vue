<template>
  <div class="outer">
    <div class="inner">
      {{ text }}
      <span v-if="this.highlight !== null" class="highlight">{{
        highlight
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentMetaBlock",
  props: {
    text: {
      type: String,
      required: true
    },
    highlight: {
      type: String,
      required: false,
      default: null
    }
  }
};
</script>

<style scoped>
.outer {
  width: 75px;
  height: 14px;
  background: #f4f4f4;
  border-radius: 4px;
  padding: 5px;
}
.inner {
  text-align: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #222222;
}
.highlight {
  font-weight: bold;
}
</style>
