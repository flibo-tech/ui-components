<template>
  <div>
    <transition-group name="solo-comments">
      <Comment
        @reply="reply"
        v-for="comment in totalComments"
        :key="comment.reaction_id"
        :currentComment="comment"
        :isChild="false"
        parent="comment"
        v-on:commentHandler="commentHandler"
      />
    </transition-group>
  </div>
</template>

<script>
import axios from "axios";
import Comment from "./Comment";
export default {
  name: "CommentContainer",
  components: { Comment },
  data() {
    return {
      totalComments: null,
      // delete the comm variable
      comm: [
        {
          reaction_id: 239,
          parent_reaction_id: null,
          action_id: 6128,
          comment:
            "Upvoted comment [Bhaskar Choudhary](user,171) do you have any suggestions for me? I'm talking about  the like of [Don2](content,16610) or any movie by [Quentin Tarantino](artist, 870953). Testing [Shantanu](artist, 408138)",
          total_comments: 20.0,
          spoiler: false,
          spoiler_remarks: null,
          upvotes: 2,
          created_at: 1601623972.197614,
          creator_id: 168,
          creator_name: "Bhaskar Choudhary",
          creator_picture:
            "https://flibo-images.s3-us-west-2.amazonaws.com/profile_pictures/168-bhaskar-choudhary.jpeg",
          user_spoiler_remark: -1,
          user_vote: 1,
          comments: [
            {
              reaction_id: 241,
              parent_reaction_id: 239,
              action_id: 6128,
              comment:
                "Child comment 1 [Bhaskar Choudhary](user,171) do you have any suggestions for me? I'm talking about  the like of [Don2](content,16610) or any movie by [Quentin Tarantino](artist, 870953). Testing [Shantanu](artist, 408138)",
              total_comments: null,
              spoiler: false,
              spoiler_remarks: null,
              upvotes: 1,
              created_at: 1601624086.749076,
              creator_id: 168,
              creator_name: "Bhaskar Choudhary",
              creator_picture:
                "https://flibo-images.s3-us-west-2.amazonaws.com/profile_pictures/168-bhaskar-choudhary.jpeg",
              user_spoiler_remark: -1,
              user_vote: 1,
              comments: []
            },
            {
              reaction_id: 242,
              parent_reaction_id: 239,
              action_id: 6128,
              comment:
                "Child comment 2 [Bhaskar Choudhary](user,171) do you have any suggestions for me? I'm talking about  the like of [Don2](content,16610) or any movie by [Quentin Tarantino](artist, 870953). Testing [Shantanu](artist, 408138)",
              total_comments: null,
              spoiler: false,
              spoiler_remarks: null,
              upvotes: -1,
              created_at: 1601624089.224034,
              creator_id: 168,
              creator_name: "Bhaskar Choudhary",
              creator_picture:
                "https://flibo-images.s3-us-west-2.amazonaws.com/profile_pictures/168-bhaskar-choudhary.jpeg",
              user_spoiler_remark: -1,
              user_vote: -1,
              comments: []
            },
            {
              reaction_id: 243,
              parent_reaction_id: 239,
              action_id: 6128,
              comment:
                "Child comment 3 [Bhaskar Choudhary](user,171) do you have any suggestions for me? I'm talking about  the like of [Don2](content,16610) or any movie by [Quentin Tarantino](artist, 870953). Testing [Shantanu](artist, 408138)",
              total_comments: null,
              spoiler: false,
              spoiler_remarks: null,
              upvotes: -1,
              created_at: 1601624092.748752,
              creator_id: 168,
              creator_name: "Bhaskar Choudhary",
              creator_picture:
                "https://flibo-images.s3-us-west-2.amazonaws.com/profile_pictures/168-bhaskar-choudhary.jpeg",
              user_spoiler_remark: -1,
              user_vote: -1,
              comments: []
            },
            {
              reaction_id: 245,
              parent_reaction_id: 239,
              action_id: 6128,
              comment:
                "Child comment 3 [Bhaskar Choudhary](user,171) do you have any suggestions for me? I'm talking about  the like of [Don2](content,16610) or any movie by [Quentin Tarantino](artist, 870953). Testing [Shantanu](artist, 408138)",
              total_comments: null,
              spoiler: false,
              spoiler_remarks: null,
              upvotes: -1,
              created_at: 1601636663.164028,
              creator_id: 168,
              creator_name: "Bhaskar Choudhary",
              creator_picture:
                "https://flibo-images.s3-us-west-2.amazonaws.com/profile_pictures/168-bhaskar-choudhary.jpeg",
              user_spoiler_remark: -1,
              user_vote: -1,
              comments: []
            },
            {
              reaction_id: 250,
              parent_reaction_id: 239,
              action_id: 6128,
              comment:
                "Child comment 3 [Bhaskar Choudhary](user,171) do you have any suggestions for me? I'm talking about  the like of [Don2](content,16610) or any movie by [Quentin Tarantino](artist, 870953). Testing [Shantanu](artist, 408138)",
              total_comments: null,
              spoiler: false,
              spoiler_remarks: null,
              upvotes: -1,
              created_at: 1601637252.332327,
              creator_id: 168,
              creator_name: "Bhaskar Choudhary",
              creator_picture:
                "https://flibo-images.s3-us-west-2.amazonaws.com/profile_pictures/168-bhaskar-choudhary.jpeg",
              user_spoiler_remark: -1,
              user_vote: -1,
              comments: []
            }
          ]
        },
        {
          reaction_id: 237,
          parent_reaction_id: null,
          action_id: 6128,
          comment:
            "Downvoted comment [Bhaskar Choudhary](user,171) do you have any suggestions for me? I'm talking about  the like of [Don2](content,16610) or any movie by [Quentin Tarantino](artist, 870953). Testing [Shantanu](artist, 408138)",
          total_comments: null,
          spoiler: false,
          spoiler_remarks: null,
          upvotes: -2,
          created_at: 1601623950.733039,
          creator_id: 168,
          creator_name: "Bhaskar Choudhary",
          creator_picture:
            "https://flibo-images.s3-us-west-2.amazonaws.com/profile_pictures/168-bhaskar-choudhary.jpeg",
          user_spoiler_remark: -1,
          user_vote: -1,
          comments: []
        }
      ]
    };
  },
  mounted() {
    this.submitVote();
  },
  methods: {
    submitVote() {
      axios
        .post(this.$store.state.api_host + "fetch_comments", {
          session_id: this.$store.state.session_id,
          guest_id: null,
          action_id: 6128,
          parent_reaction_id: null,
          fetched_comment_ids: [1]
        })
        .then(response => {
          if (response.status == 200) {
            this.totalComments = response.data.comments;
            // remove this
            // this.totalComments[0].total_comments--;
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
    reply(a) {
      console.log(a);
    },
    commentHandler(fetchedComments) {
      //
      let subCommentReactionId = fetchedComments[0].parent_reaction_id;
      this.totalComments.forEach(parentComment => {
        if (subCommentReactionId === parentComment.reaction_id) {
          fetchedComments.forEach(subComment => {
            parentComment.comments.push(subComment);
          });
        }
      });
    }
  }
};
</script>

<style scoped>
.solo-comments-move {
  transition: all 0.1s;
}
</style>