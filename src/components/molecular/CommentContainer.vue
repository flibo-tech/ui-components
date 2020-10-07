<template>
  <div>
    <Comment @reply="reply" v-for="comment in totalComments" :key="comment.id" :currentComment="comment" />
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
      totalComments: null
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
            this.totalComments = response.data.comments
            console.log(this.totalComments)
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
    }
  }
};
</script>

<style>

</style>