<template>
  <div>
    <Button icon="love" buttonType="iconOnly" :size="iconSize" :state="loveState" />
    <Button icon="thumbs_up" buttonType="iconOnly" :size="iconSize" :state="likeState" />

    <Button icon="thumbs_down" buttonType="iconOnly" :size="iconSize" :state="dislikeState" />
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
      rating: 1,
      iconSize: 30
    };
  },
  components: {
    Button
  },
  computed: {
    likeState() {
      if (this.rating === 1) {
        return true;
      } else {
        return false;
      }
    },
    dislikeState() {
      if (this.rating === 2) {
        return true;
      } else {
        return false;
      }
    },
    loveState() {
      if (this.rating === 3) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-between;
}
</style>