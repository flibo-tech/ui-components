<template>
  <div id="app" class="f-container">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
export default {
  components: { Navigation },
  computed: {
    my_store: function() {
      return this.$store.state;
    }
  },
  watch: {
    my_store: {
      handler() {
        localStorage.setItem("my_store", JSON.stringify(this.my_store));
      },
      deep: true
    }
  }
};
</script>

<style lang="scss">
.f-container {
  display: grid;
  grid-template-columns: 300px 1fr;
  background-color: #272431;
  color: lightyellow;
  border: 5px solid rgb(235, 142, 75);
}
</style>
