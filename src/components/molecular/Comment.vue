<template>
  <div class="comment-comp-container">
    <div
      class="comment-comp-view"
      :style="{ 'margin-left': depth * 40 + 'px' }"
    >
      <div class="comment-comp-current">
        <img
          class="comment-comp-profile"
          :src="currentComment.creator_picture"
        />
        <div class="comment-comp-content">
          <p>
            <strong>{{ currentComment.creator_name }}</strong>
            <TextView
              class="custom"
              v-if="currentComment.comment"
              :text="currentComment.comment"
              :parent="actionType + '_details'"
              v-on="$listeners"
            />
          </p>
          <div class="comment-comp-reaction">
            <Vote
              class="comment-comp-vote"
              :actionId="currentComment.action_id"
              :parentReactionId="currentComment.parent_reaction_id"
              :totalVote="currentComment.upvotes"
              :creatorId="currentComment.creator_id"
              :userVote="currentComment.user_vote"
            />
            <p>Reply</p>
          </div>
          <div
            @click="showMore = !showMore"
            class="comment-comp-more"
            v-if="currentComment.total_comments"
          >
            <div class="comment-comp-horizontal-divider"></div>
            <p v-if="showMore === false">
              {{ currentComment.total_comments }} replies
            </p>
            <p v-if="showMore">Show less</p>
          </div>
        </div>
      </div>
    </div>
    <transition name="comment">
      <div v-if="showMore" class="comment-comp-sub-comment">
        <div class="comment-comp-vertical-divider"></div>
        <div>
          <Comment
            v-for="comment in currentComment.comments"
            :key="comment.id"
            :currentComment="comment"
            :depth="depth + 1"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import TextView from "./TextView";
import Vote from "./Vote";
export default {
  name: "Comment",
  components: { TextView, Vote },
  props: ["currentComment", "nodes", "depth"],
  data() {
    return {
      actionType: "request",
      showMore: false
    };
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.comment-comp-profile {
  margin-right: 0.7em;
  border-radius: 50%;
  width: 35px;
  height: 35px;
}

.comment-comp-content {
  margin: 0;
  display: flex;
  flex-flow: column nowrap;
}

.comment-comp-content p {
  margin: 0;
}

.comment-comp-vote {
  margin: 0.5em;
  width: 100px;
}

.comment-comp-current {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  margin-bottom: 1em;
}

.comment-comp-reaction {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

.comment-comp-reaction * {
  margin-right: 1em;
}

.comment-comp-reaction p {
  font-size: 14px;
}

.custom {
  display: inline;
}

strong {
  font-size: 14px;
}

.comment-comp-more {
  display: flex;
  align-items: center;
}

.comment-comp-more p {
  margin-left: 1em;
}

.comment-comp-horizontal-divider {
  height: 1px;
  background-color: #aaaaaa;
  width: 100px;
}

.comment-enter-active,
.comment-leave-active {
  transition: all 0.3s ease;
}
.comment-enter, .comment-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(30px);
  opacity: 0;
}

.comment-comp-vertical-divider {
  width: 1px;
  background-color: #aaaaaa;
}

.comment-comp-sub-comment {
  display: flex;
  justify-content: stretch;
}
</style>