<template>
  <div>
    <p :style="{'margin-left': depth * 30 + 'px'}"> {{ currentComment.comment }} </p>
    <Comment
      v-for="comment in currentComment.comments"
      :key="comment.id"
      :currentComment="comment"
      :depth="depth + 1"
    />
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: ["currentComment", "nodes", "depth"],
  data() {
    return {
     
    };
  }
};
</script>

<style>
</style>