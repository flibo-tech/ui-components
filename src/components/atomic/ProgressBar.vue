<template>
  <div class="bar">
    <Rated />
    <div class="progress-bar">
      <div
        class="progress"
        :style="{
          width: count * 4 + '%',
          'background-color': '#a2d194'
        }"
      ></div>
    </div>
  </div>
</template>

<script>
import Rated from "./Rated";
import { mapGetters } from "vuex";
export default {
  name: "ProgressBar",
  components: {
    Rated
  },
  computed: {
    ...mapGetters(["count"])
  }
};
</script>

<style scoped>
.bar {
  margin: 10px;
  display: block;
  width: 321px;
}
.progress-bar {
  margin: 0;
  background-color: #666;
  border-radius: 4px 4px 4px 4px;
  height: 15px;
}
.progress {
  margin: none;
  padding: none;
  display: inline-block;
  height: 15px;
  border-radius: 4px 4px 4px 4px;
  transition: width 500ms;
}
</style>
