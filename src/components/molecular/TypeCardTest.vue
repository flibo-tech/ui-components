<template>
  <div>
    <TypeCard
      type="review"
      text="You can write a review."
      v-on:clicked="changeState"
      :active="selectedType==='review'"
    />
    <TypeCard
      type="suggestion"
      text="This is a suggestion box."
      v-on:clicked="changeState"
      :active="selectedType==='suggestion'"
    />
    <TypeCard
      type="request"
      text="You can request for movies here."
      v-on:clicked="changeState"
      :active="selectedType==='request'"
    />
  </div>
</template>

<script>
import TypeCard from "../atomic/TypeCard";
export default {
  name: "TypeCardTest",
  components: {
    TypeCard
  },
  data() {
    return {
      selectedType: ""
    };
  },
  methods: {
    changeState(type) {
      this.selectedType = type;
    }
  }
};
</script>

<style scoped>
div {
  display: flex;
  width: 100%;
  margin: 2em;
  flex-direction: row;
}
</style>