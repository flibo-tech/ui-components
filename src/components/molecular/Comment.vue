<template>
  <div class="comment-comp-container">
    <div class="comment-comp-view">
      <div class="comment-comp-current">
        <img
          @click="showPreview = true"
          class="comment-comp-profile"
          :src="currentComment.creator_picture"
        />
        <div class="comment-comp-content">
          <p>
            <strong @click="showPreview = true">{{
              currentComment.creator_name
            }}</strong>
            <TextView
              class="custom"
              v-if="currentComment.comment"
              :text="currentComment.comment"
              :parent="actionType + '_details'"
              v-on="$listeners"
            />
          </p>
          <div class="comment-comp-reaction">
            <TimeSince :timestamp="currentComment.created_at" :short="true" />
            <Vote
              class="comment-comp-vote"
              :actionId="currentComment.action_id"
              :parentReactionId="currentComment.parent_reaction_id"
              :totalVote="currentComment.upvotes"
              :creatorId="currentComment.creator_id"
              :userVote="currentComment.user_vote"
              v-on:updateUserVote="voteHandler"
              v-on:updateTotalVote="totalVoteHandler"
            />
            <p class="comment-comp-reply" @click="reply">Reply</p>
          </div>
          <div
            @click="[(showMore = !showMore), fetchComments()]"
            class="comment-comp-more"
            v-if="currentComment.total_comments"
          >
            <div
              v-if="showMore === false"
              class="comment-comp-horizontal-divider"
            ></div>
            <p v-if="showMore === false">
              {{ currentComment.total_comments }} replies
            </p>
          </div>
        </div>
      </div>
    </div>
    <p class="comment-comp-loading" v-if="fetchingData">Loading...</p>
    <transition name="comment">
      <div
        v-if="showMore && Object.keys(currentComment.comments).length"
        class="comment-comp-sub-comment"
      >
        <div class="comment-comp-vertical-divider"></div>
        <div>
          <Comment
            @reply="forward"
            v-for="comment in currentComment.comments"
            :key="comment.id"
            :currentComment="comment"
          />
        </div>
      </div>
      <div
        v-if="
          showMore &&
            !Object.keys(currentComment.comments).length &&
            subComments
        "
        class="comment-comp-sub-comment"
      >
        <div @click="showMore = false" class="comment-comp-divider-container">
          <div class="comment-comp-vertical-divider"></div>
        </div>
        <div>
          <Comment
            @reply="forward"
            v-for="comment in subComments"
            :key="comment.id"
            :currentComment="comment"
          />
        </div>
      </div>
    </transition>
    <UserPreview
      v-if="showPreview"
      :id="currentComment.creator_id"
      :name="currentComment.creator_name"
      :parent="parent"
      @close-preview="showPreview = false"
      v-on="$listeners"
    />
  </div>
</template>

<script>
import axios from "axios";
import UserPreview from "./UserPreview";
import TextView from "./TextView";
import Vote from "./Vote";
import TimeSince from "../atomic/TimeSince";
export default {
  name: "Comment",
  components: { TextView, Vote, UserPreview, TimeSince },
  props: ["currentComment", "nodes"],
  data() {
    return {
      actionType: "request",
      showMore: false,
      parent: "comment",
      showPreview: false,
      subComments: null,
      fetchingData: false
    };
  },
  methods: {
    fetchComments() {
      if (this.subComments) {
        return;
      }
      this.fetchingData = true;
      axios
        .post(this.$store.state.api_host + "fetch_comments", {
          session_id: this.$store.state.session_id,
          guest_id: null,
          action_id: 6128,
          parent_reaction_id: 239,
          fetched_comment_ids: [1]
        })
        .then(response => {
          if (response.status == 200) {
            this.subComments = response.data.comments;
            this.fetchingData = false;
          }
        })
        .catch(error => {
          // console.log(error);
          if ([401, 419].includes(error.response.status)) {
            window.location =
              this.$store.state.login_host +
              "logout?session_id=" +
              this.$store.state.session_id;
            this.$store.state.session_id = null;
            this.$emit("logging-out");
          } else {
            // console.log(error.response.status);
          }
        });
    },
    reply() {
      this.$emit("reply", {
        creator_id: this.currentComment.creator_id,
        creator_name: this.currentComment.creator_name,
        reaction_id: this.currentComment.reaction_id
      });
    },
    forward(subCommentReply) {
      this.$emit("reply", subCommentReply);
    },
    voteHandler(currentUserVote) {
      this.currentComment.user_vote = currentUserVote;
    },
    totalVoteHandler(currentTotalVote) {
      this.currentComment.upvotes = currentTotalVote;
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}
.comment-comp-profile {
  cursor: pointer;
  margin-right: 0.7em;
  border-radius: 50%;
  width: 40px;
  height: 40px;
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
  cursor: pointer;
  font-size: 12px;
}

.custom {
  display: inline;
}

.comment-comp-more {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.comment-comp-more p {
  font-size: 12px;
  color: #8e8e8e;
  margin-left: 1em;
}

.comment-comp-horizontal-divider {
  height: 1px;
  background-color: #d1d1d1;
  width: 40px;
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
  height: 90%;
  background-color: #d1d1d1;
}

.comment-comp-sub-comment {
  display: flex;
  justify-content: stretch;
}

.comment-comp-content > p > strong {
  font-size: 14px;
  cursor: pointer;
  margin-right: 0.6em;
}
.comment-comp-divider-container {
  flex: 0 0 51px;
}

.comment-comp-reply {
  font-size: 12px;
  color: #8e8e8e;
}

.comment-comp-loading {
  color: #8e8e8e;
  font-size: 12px;
  margin-left: 51px;
}
</style>