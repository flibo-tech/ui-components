<template>
  <div class="main-container">
    <h1>What do you want to do?</h1>
    <div class="card-container">
      <TypeCard
        type="request"
        text="You can request for movies here."
        v-on:clicked="changeState"
        :active="selectedType==='request'"
      />
      <TypeCard
        type="suggestion"
        text="This is a suggestion box."
        v-on:clicked="changeState"
        :active="selectedType==='suggestion'"
      />
      <TypeCard
        type="review"
        text="You can write a review."
        v-on:clicked="changeState"
        :active="selectedType==='review'"
      />
    </div>
    <transition name="input">
      <input v-if="selectedType === 'review' || selectedType === 'suggestion'" placeholder="Movie" />
    </transition>
    <br />
    <transition name="input">
      <input v-if="selectedType === 'review' || selectedType === 'suggestion'" placeholder="Title" />
    </transition>
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
* {
  box-sizing: border-box;
  font-family: "Roboto";
}
.main-container {
  position: absolute;
  top: 50%;
  transform: translatY(-50%);
  background-color: white;
  border-radius: 26px;
  height: auto;
  width: 90vw;
  margin: 2em;
  padding-bottom: 2em;
}
.card-container {
  padding: 1em 2em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1em;
}

h1 {
  font-size: 1.5em;
  padding: 1em 0em 0em 1em;
}

input {
  font-size: 1.5em;
  width: 90%;
  margin: 1em 1em 0em 1em;
  padding: 0.5em;
  border: none;
  border-bottom: 1px solid #9b9b9b;
}

input::placeholder {
  color: #9b9b9b;
}

.input-enter-active,
.input-leave-active {
  transition: opacity 0.2s;
}
.input-enter,
.input-leave-to {
  opacity: 0;
}
</style>