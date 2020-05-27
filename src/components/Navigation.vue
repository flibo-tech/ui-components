<template>
  <nav>
    <h1 @click="store.component = null">Home</h1>
    <br />
    <h1>Atoms</h1>
    <h4 @click="store.component = 'Button'">
      Button
    </h4>
    <br />
    <h1>Molecules</h1>
    <h4 @click="store.component = 'TwoButtons'">
      TwoButtons
    </h4>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      store: this.$store.state
    };
  }
};
</script>
