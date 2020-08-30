<template>
  <div>
    <FeedCard />
  </div>
  <!-- <div class="container">
    <div>
      <Placeholder :height="130" :circle="true" :dark="true" />
      <Placeholder :height="50" :borderRadius="10" :dark="true" />
      <Placeholder :height="50" :borderRadius="50" :dark="true" />
    </div>
    <div>
      <Placeholder :height="80" :circle="true" />
      <Placeholder :height="30" :borderRadius="10" />
      <Placeholder :height="30" :borderRadius="50" />
      <Placeholder :height="80" :circle="true" />
      <Placeholder :height="80" :borderRadius="10" />
      <Placeholder :height="30" :borderRadius="50" />
    </div>
  </div> -->
</template>

<script>
//import Placeholder from "../atomic/Placeholder";
import FeedCard from "./FeedCard";

export default {
  name: "PlaceholderTest",
  components: {
    //Placeholder,
    FeedCard
  }
};
</script>

<style lang="scss" scoped></style>
