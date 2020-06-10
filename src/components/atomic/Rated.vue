<template>
  <div class="rating">
    Rate {{ count }} / 25
    <button class="inc" @click="increase">Rate ME</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "Rated",
  computed: {
    ...mapGetters(["count"])
  },
  methods: {
    ...mapActions(["increase"])
  }
};
</script>

<style scoped>
.rating {
  margin: 10px 2px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
  opacity: 0.96;
  color: #ffffff;
}
</style>
