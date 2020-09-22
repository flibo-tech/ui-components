<template>
  <div>
    <TagSuggestions
      class="suggestion-box"
      v-if="searchString && !selectedShow"
      :searchString="searchString"
      searchType="content"
      v-on:clicked="submit"
    />
    <div class="main-container">
      <h1>What do you want to do?</h1>
      <div class="btn-close-circle" v-on:clicked="$emit('close')">
        <Button icon="cross" buttonType="iconOnly" :size="30" />
      </div>
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
        <input
          v-if="selectedType === 'review' || selectedType === 'suggestion'"
          placeholder="Movie"
          v-model="searchString"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import TypeCard from "../atomic/TypeCard";
import TagSuggestions from "./TagSuggestions";
import Button from "../atomic/Button";
export default {
  name: "TypeCardTest",
  components: {
    TypeCard,
    TagSuggestions,
    Button
  },
  data() {
    return {
      selectedType: "",
      searchString: "",
      selectedShow: null
    };
  },
  methods: {
    changeState(type) {
      this.selectedType = type;
      if (this.selectedType === "request") {
        this.$emit("clicked", this.selectedType);
      }
    },
    submit(item) {
      this.selectedShow = item;
      this.searchString = item.subject;
      this.$emit("clicked", this.selectedShow, this.selectedType);
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
  background-color: white;
  border-radius: 26px;
  height: auto;
  width: 90%;
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
.suggestion-box {
  position: absolute;
  max-height: 50vh;
  z-index: 2;
}

.btn-close-circle {
  top: 12px;
  right: 12px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: #FF6060;
}
</style>