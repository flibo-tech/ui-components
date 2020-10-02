<template>
  <div style="padding: 100px 0">
    <TextView
      v-if="description"
      :text="description"
      :parent="actionType + '_details'"
      v-on="$listeners"
    />
  </div>
</template>

<script>
import TextView from "./TextView";

export default {
  name: "Home",
  components: {
    TextView
  },
  data() {
    return {
      description:
        "[Bhaskar Choudhary](user,171) do you have any suggestions for me? I'm talking about  the like of [Don2](content,16610) or any movie by [Quentin Tarantino](artist, 870953). Testing [Shantanu](artist, 408138)",
      actionType: "request"
    };
  }
};
</script>

<style>
</style>