<template>
  <div>
    <div id="app" class="f-container">
      <Navigation
        v-if="
          !['MovieImageLandscape', 'MovieImagePortrait', 'Artist'].includes(
            store.component
          )
        "
      />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
export default {
  components: { Navigation },
  data() {
    return {
      store: this.$store.state
    };
  },
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
body {
  margin: 0;
  padding: 0;
  background-color: #272431;
}
.f-container {
  position: relative;
  top: 0;
  display: grid;
  grid-template-columns: 300px 1fr;
  color: rgb(0, 0, 0);
  background-color: #272431;
}
</style>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");
</style>