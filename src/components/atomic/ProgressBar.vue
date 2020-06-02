<template>
  <span class="bar"> </span>
</template>

<script>
export default {
  name: "ProgressBar"
};
</script>

<style scoped>
.bar {
  margin: 0;
  padding: 0;
  display: inline-block;
  width: 30px;
  height: 12px;
  background-color: green;
  border-radius: 2px;
  transition: width 500ms;
}
</style>
