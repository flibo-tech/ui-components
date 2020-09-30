<template>
  <div>
    <div v-for="item in arr" :key="item.id">
      <Vote
        :actionId="item.actionId"
        :totalVote="item.totalVote"
        :creatorId="item.creatorId"
        :userVote="item.userVote"
        v-on:updateUserVote="voteHandler(item, $event)"
        v-on:updateTotalVote="totalVoteHandler(item, $event)"
      />
    </div>
  </div>
</template>

<script>
import Vote from "./Vote";
export default {
  name: "VoteContainer",
  components: {
    Vote
  },
  data() {
    return {
      arr: [
        {
          actionId: 6124,
          parentReactionId: null,
          totalVote: 32,
          userVote: 0,
          creatorId: 590
        },
        {
          actionId: 6124,
          parentReactionId: null,
          totalVote: 32312,
          userVote: 1,
          creatorId: 590
        },
        {
          actionId: 6124,
          parentReactionId: null,
          totalVote: 231,
          userVote: 0,
          creatorId: 5907
        }
      ]
    };
  },
  methods: {
    voteHandler(item, currentUserScore) {
      item.userVote = currentUserScore;
    },
     totalVoteHandler(item, currentTotalScore) {
      item.totalVote = currentTotalScore;
      console.log(this.arr);
    }
  }
};
</script>

<style>
.vote {
  width: 100px;
}
</style>