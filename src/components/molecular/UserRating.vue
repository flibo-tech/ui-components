<template>
  <div>
    <Button icon="love" buttonType="iconOnly" :size="iconSize" :state="rating === 3" />
    <Button icon="thumbs_up" buttonType="iconOnly" :size="iconSize" :state="rating === 1" />

    <Button icon="thumbs_down" buttonType="iconOnly" :size="iconSize" :state="rating === 2" />
  </div>
</template>

<script>
import Button from "../atomic/Button";
export default {
  name: "UserRating",
  // props: {
  //   rating: {
  //     type: Number,
  //     default: 0
  //   },
  //   iconSize: {
  //     type: Number,
  //     required: true,
  //   }
  // },
  data() {
    return {
      // remove data when using prop
      rating: 1,
      iconSize: 30
    };
  },
  components: {
    Button
  }
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-between;
}
</style>