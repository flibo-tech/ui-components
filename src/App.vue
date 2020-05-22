<template>
  <div id="app" class="f-container">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
export default {
  components: { Navigation }
};
</script>

<style lang="scss">
.f-container {
  display: grid;
  grid-template-columns: 300px 1fr;
}
</style>
