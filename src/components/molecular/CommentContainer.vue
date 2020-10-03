<template>
  <div>
    <Comment v-for="comment in totalComments" :key="comment.id" :currentComment="comment" :depth="0" />
  </div>
</template>

<script>
// import axios from "axios";
import Comment from "./Comment";
export default {
  name: "CommentContainer",
  components: { Comment },
  data() {
    return {
      tree: {
        nodes: [
          {
            label: "Thank you for reviewing. Much appreciated. ",
            nodes: [
              {
                label:
                  "Messi  Romance movies never tend to interest me or really make the romance seem to be genuine and authentic. But honestly, this movie had me close to tears, which is strange considering it’s a movie about a man falling in love with an A.I. "
              },
              {
                label:
                  "Raul  Romance movies never tend to interest me or really make the romance seem to be genuine and authentic. But honestly."
              }
            ]
          }
        ]
      },
      totalComments: [
        {
          action_id: 6128,
          comment:
            "Upvoted comment [Bhaskar Choudhary](user,171) do you have any suggestions for me? I'm talking about  the like of [Don2](content,16610) or any movie by [Quentin Tarantino](artist, 870953). Testing [Shantanu](artist, 408138)",
          comments: [
            {
              reaction_id: 241,
              parent_reaction_id: 239.0,
              action_id: 6128,
              creator_id: 168,
              creator_name: "Bhaskar Choudhary",
              creator_picture:
                "https://flibo-images.s3-us-west-2.amazonaws.com/profile_pictures/168-bhaskar-choudhary.jpeg",
              created_at: 1601624086.749076,
              comment:
                "Child comment 1 [Bhaskar Choudhary](user,171) do you have any suggestions for me? I'm talking about  the like of [Don2](content,16610) or any movie by [Quentin Tarantino](artist, 870953). Testing [Shantanu](artist, 408138)",
              total_comments: null,
              spoiler: false,
              spoiler_remarks: null,
              upvotes: null,
              user_spoiler_remark: -1,
              user_vote: 0,
              comments: []
            },
            {
              reaction_id: 242,
              parent_reaction_id: 239.0,
              action_id: 6128,
              creator_id: 168,
              creator_name: "Bhaskar Choudhary",
              creator_picture:
                "https://flibo-images.s3-us-west-2.amazonaws.com/profile_pictures/168-bhaskar-choudhary.jpeg",
              created_at: 1601624089.224034,
              comment:
                "Child comment 2 [Bhaskar Choudhary](user,171) do you have any suggestions for me? I'm talking about  the like of [Don2](content,16610) or any movie by [Quentin Tarantino](artist, 870953). Testing [Shantanu](artist, 408138)",
              total_comments: null,
              spoiler: false,
              spoiler_remarks: null,
              upvotes: null,
              user_spoiler_remark: -1,
              user_vote: 0,
              comments: []
            },
            {
              reaction_id: 243,
              parent_reaction_id: 239.0,
              action_id: 6128,
              creator_id: 168,
              creator_name: "Bhaskar Choudhary",
              creator_picture:
                "https://flibo-images.s3-us-west-2.amazonaws.com/profile_pictures/168-bhaskar-choudhary.jpeg",
              created_at: 1601624092.748752,
              comment:
                "Child comment 3 [Bhaskar Choudhary](user,171) do you have any suggestions for me? I'm talking about  the like of [Don2](content,16610) or any movie by [Quentin Tarantino](artist, 870953). Testing [Shantanu](artist, 408138)",
              total_comments: null,
              spoiler: false,
              spoiler_remarks: null,
              upvotes: null,
              user_spoiler_remark: -1,
              user_vote: 0,
              comments: []
            }
          ],
          created_at: 1601623972.197614,
          creator_name: "Bhaskar Choudhary",
          creator_picture:
            "https://flibo-images.s3-us-west-2.amazonaws.com/profile_pictures/168-bhaskar-choudhary.jpeg",
          reaction_id: 239,
          spoiler: false,
          spoiler_remarks: null,
          total_comments: 3.0,
          upvotes: 1.0,
          creator_id: 168,
          user_spoiler_remark: -1,
          user_vote: 0
        },
        {
          action_id: 6128,
          comment:
            "Downvoted comment [Bhaskar Choudhary](user,171) do you have any suggestions for me? I'm talking about  the like of [Don2](content,16610) or any movie by [Quentin Tarantino](artist, 870953). Testing [Shantanu](artist, 408138)",
          comments: [],
          created_at: 1601623950.733039,
          creator_name: "Bhaskar Choudhary",
          creator_picture:
            "https://flibo-images.s3-us-west-2.amazonaws.com/profile_pictures/168-bhaskar-choudhary.jpeg",
          reaction_id: 237,
          spoiler: false,
          spoiler_remarks: null,
          total_comments: null,
          upvotes: -1.0,
          creator_id: 168,
          user_spoiler_remark: -1,
          user_vote: 0
        }
      ]
    };
  },
  mounted() {
    // this.submitVote();
  },
  methods: {
    // submitVote() {
    //   axios
    //     .post(this.$store.state.api_host + "fetch_comments", {
    //       session_id: this.$store.state.session_id,
    //       guest_id: null,
    //       action_id: 6128,
    //       parent_reaction_id: null,
    //       fetched_comment_ids: [1]
    //     })
    //     .then(response => {
    //       if (response.status == 200) {
    //         this.comments = response.data.comments
    //         console.log(this.comments)
    //       }
    //     })
    //     .catch(error => {
    //       // console.log(error);
    //       if ([401, 419].includes(error.response.status)) {
    //         window.location =
    //           this.$store.state.login_host +
    //           "logout?session_id=" +
    //           this.$store.state.session_id;
    //         this.$store.state.session_id = null;
    //         this.$emit("logging-out");
    //       } else {
    //         // console.log(error.response.status);
    //       }
    //     });
    // }
  }
};
</script>

<style>
</style>