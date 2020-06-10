<template>
  <div class="molecule">
    <LoveButton v-show="$store.state.reaction === 'loved'" />
    <br />
    <DislikeButton v-show="$store.state.reaction === 'disliked'" />
    <div class="card" @mouseenter="dir">
      <button class="up" @click="direction('up')">UP</button><br />
      <button class="left" @click="direction('left')">LEFT</button>
      <button class="down" @click="direction('right')">RIGHT</button><br />
      <button class="left" @click="direction('down')">DOWN</button>
    </div>
    <LikeButton v-show="$store.state.reaction === 'liked'" />
    <br />
    <NotSeen v-show="$store.state.reaction === 'notSeen'" />
  </div>
</template>

<script>
import NotSeen from "./../atomic/NotSeen";
import LikeButton from "./../atomic/LikeButton";
import LoveButton from "./../atomic/LoveButton";
import DislikeButton from "./../atomic/DislikeButton";

import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "TwoButtons",
  components: { NotSeen, LikeButton, LoveButton, DislikeButton },
  computed: {
    ...mapGetters(["isLoved"])
  },
  methods: {
    ...mapActions(["direction"]),
    dir() {
      console.log('e');
    }
  }
};
</script>

<style scoped>
.card {
  display: inline-block;
  height: 300px;
  width: 200px;
  margin: 10px;
  background-color: bisque;
  border-radius: 10px;
  text-align: center;
}
</style>
