<template>
  <TagSuggestions
    searchString="len"
    searchType="content"
    style="width: 250px; height: 300px; overflow: scroll;"
    @clicked="log"
  />
</template>

<script>
import TagSuggestions from "../atomic/TagSuggestions";

export default {
  name: "TagSuggestionsTest",
  components: {
    TagSuggestions
  },
  methods: {
    log(a) {
      console.log(a);
    }
  }
};
</script>
