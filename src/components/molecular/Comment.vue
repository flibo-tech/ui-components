<template>
  <div class="comment-comp-container">
    <div
      class="comment-comp-view"
      :style="{ 'margin-left': depth * 30 + 'px' }"
    >
      <img class="comment-comp-profile" :src="currentComment.creator_picture" />
      <strong>{{currentComment.creator_name}}</strong>
      <TextView
        v-if="currentComment.comment"
        :text="currentComment.comment"
        :parent="actionType + '_details'"
        v-on="$listeners"
      />
    </div>
    <Comment
      v-for="comment in currentComment.comments"
      :key="comment.id"
      :currentComment="comment"
      :depth="depth + 1"
    />
  </div>
</template>

<script>
import TextView from "./TextView";
export default {
  name: "Comment",
  components: { TextView },
  props: ["currentComment", "nodes", "depth"],
  data() {
    return {
      actionType: "request"
    };
  }
};
</script>

<style scoped>
.comment-comp-profile {
  border-radius: 50%;
  width: 31px;
  height: 31px;
}

.comment-comp-view {
}
</style>