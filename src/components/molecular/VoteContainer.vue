<template>
  <Vote :totalScore="30" class="vote" />
</template>

<script>
import Vote from "./Vote";
export default {
  name: "VoteContainer",
  components: {
    Vote
  }
}
</script>

<style>
.vote {
  width: 100px;
}
</style>