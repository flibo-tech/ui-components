<template>
  <Vote v-on:userscore="userScore($event)" :totalScore="233" :createrId="590" class="vote" />
</template>

<script>
import axios from "axios";

import Vote from "./Vote";
export default {
  name: "VoteContainer",
  components: {
    Vote
  },
  data() {
    return {
      actionId: 6124,
      score: null
    };
  },
  methods: {
    fetchData() {
      var self = this;
      axios
        .post(self.$store.state.api_host + "vote", {
          session_id: self.$store.state.session_id,
          action_id: self.actionId,
          parent_reaction_id: null,
          vote: this.score
        })
        .then(function(response) {
          if (response.status == 200) {
            console.log(response);
          }
        })
        .catch(function(error) {
          // console.log(error);
          if ([401, 419].includes(error.response.status)) {
            window.location =
              self.$store.state.login_host +
              "logout?session_id=" +
              self.$store.state.session_id;
            self.$store.state.session_id = null;
            self.$emit("logging-out");
          } else {
            // console.log(error.response.status);
          }
        });
    },
    userScore(score) {
      this.score = score;
      console.log(this.score);
    }
  },
  watch: {
    score: function() {
      this.fetchData();
    }
  },
};
</script>

<style>
.vote {
  width: 100px;
}
</style>