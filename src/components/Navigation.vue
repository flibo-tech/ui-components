<template>
  <nav>
    <h1 @click="store.component = null">Home</h1>
    <br />
    <h1>Atoms</h1>
    <h4 @click="store.component = 'Button'">
      Button
    </h4>
    <h4 @click="store.component = 'liked'">
      Like Button
    </h4>
    <h4 @click="store.component = 'loved'">
      Love Button
    </h4>
    <h4 @click="store.component = 'disliked'">
      Dislike Button
    </h4>
    <h4 @click="store.component = 'back'">
      Back Button
    </h4>
    <h4 @click="store.component = 'flibo'">
      FLIBO
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

<style scoped>

nav {
  border: 1px solid slateblue;
  margin-right: 20px;
  padding: 3%;
}
</style>
