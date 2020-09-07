<template>
  <span @click="$emit('highlighted')">{{ title }}</span>
</template>

<script>
export default {
  name: "Highlight",
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: false
    }
  }
};
</script>

<style scoped>
span {
  font-weight: 900;
  text-decoration: underline;
}
</style>