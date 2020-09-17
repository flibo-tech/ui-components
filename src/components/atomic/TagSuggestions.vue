<template>
  <div :style="customStyle">
    <div v-bind:key="index" v-for="(item, index) in searchData">
      <Person
        :name="item.subject"
        :image="item.image"
        :height="100"
        position="right"
        :fontSize="15"
        fontWeight="normal"
        :scale="item.subject_type == 'friend' ? true : false"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Person from "./Person";

export default {
  name: "TagSuggestions",
  components: {
    Person
  },
  props: {
    searchString: {
      type: String,
      required: true
    },
    searchType: {
      type: String,
      required: true
    },
    height: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      searchData: []
    };
  },
  computed: {
    customStyle() {
      return (
        "background-color: #ffffff; overflow-y: scroll; width: 100%; height: " +
        this.height +
        "px;"
      );
    }
  },
  created() {
    console.log("created");
    this.suggestions();
  },
  watch: {
    searchString() {
      this.suggestions();
      console.log("searchstring change");
    },
    searchType() {
      this.suggestions();
      console.log("searchtype change");
    }
  },
  methods: {
    suggestions() {
      var self = this;
      axios
        .post("https://yzal-dev-app.flibo.ai/live_search", {
          session_id: "1599211356d4w3ZodTtsPUt3E5",
          string: self.searchString,
          search_type: self.searchType
        })
        .then(function(response) {
          if (self.searchType == "all") self.searchData = response.data.result;
          else if (self.searchType == "content")
            self.searchData = response.data.result.contents;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped></style>
