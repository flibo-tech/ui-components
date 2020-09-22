<template>
  <div class="action-options-container">
    <div class="action-options-header">
      <h1>What do you want to do?</h1>
      <div class="btn-close-circle" v-on:clicked="$emit('close')">
        <Button icon="cross" buttonType="iconOnly" :size="30" />
      </div>
    </div>
    <div class="card-container">
      <TypeCard
        type="request"
        text="You can request for movies here."
        v-on:clicked="changeState"
        :active="selectedType === 'request'"
      />
      <TypeCard
        type="suggestion"
        text="This is a suggestion box."
        v-on:clicked="changeState"
        :active="selectedType === 'suggestion'"
      />
      <TypeCard
        type="review"
        text="You can write a review."
        v-on:clicked="changeState"
        :active="selectedType === 'review'"
      />
    </div>
    <transition name="input">
      <div v-if="selectedType === 'review' || selectedType === 'suggestion'">
        <input placeholder="Search a movie / show" v-model="searchString" />
        <TagSuggestions
          class="suggestion-box"
          v-if="searchString && !selectedContent"
          :searchString="searchString"
          searchType="content"
          v-on:clicked="submit"
        />
      </div>
    </transition>
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
      selectedContent: null
    };
  },
  methods: {
    changeState(type) {
      this.selectedType = type;
      this.searchString = "";
      this.selectedContent = null;
      if (this.selectedType === "request") {
        this.$emit("clicked", this.selectedType);
      }
    },
    submit(item) {
      this.selectedContent = item;
      this.searchString = item.subject;
      this.$emit("clicked", this.selectedContent, this.selectedType);
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: "Roboto";
}
.action-options-container {
  position: fixed;
  left: 50vw;
  top: 50vh;
  transform: translateX(-50%) translateY(-50%);
  background-color: white;
  border-radius: 24px;
  height: auto;
  width: 90vw;
  padding: 2em;
  max-height: 90vh;
  overflow: scroll;
}
.action-options-header {
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 16px;
  align-items: center;
}
.card-container {
  display: grid;
  margin-top: 20px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1em;
}

.action-options-header h1 {
  grid-column: 1;
  font-size: 20px;
  margin: 0;
}

.btn-close-circle {
  grid-column: 2;
  top: 12px;
  right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

input {
  font-size: 1.5em;
  width: 90%;
  margin: 1em 1em 0em 0em;
  height: 50px;
  border: none;
  border-bottom: 1px solid #9b9b9b8f;
}

input::placeholder {
  color: #9b9b9b;
}

input:focus {
  outline: none;
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
  transform: translateY(calc(-100% - 50px));
  width: 75vw;
  height: 60vh;
  z-index: 2;
}
::-webkit-scrollbar {
  display: none;
}
</style>