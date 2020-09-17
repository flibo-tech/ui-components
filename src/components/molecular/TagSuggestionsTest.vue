<template>
  <TagSuggestions searchString="in" searchType="content" :height="300" />
</template>

<script>
import TagSuggestions from "../atomic/TagSuggestions";

export default {
  name: "TagSuggestionsTest",
  components: {
    TagSuggestions
  }
};
</script>
