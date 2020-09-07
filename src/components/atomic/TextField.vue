<template>
  <div>
    <div class="search-div" v-if="searchDiv" @click="searchDiv = false">
      <ul>
        <li v-for="movie in movies" :key="movie" @click="selectedWord = movie">{{ movie }}</li>
      </ul>
    </div>
    <textarea @keyup.key.@="searchDiv = true" v-model="content" placeholder="Enter text"></textarea>
    <button @click="submit">Submit</button>
  </div>
</template>

<script>
import Emoji from "../../assets/emoji";
// import axios from "axios";
export default {
  name: "TextField",
  data() {
    return {
      content: "",
      selectedWord: "",
      searchDiv: false,
      movies: ["Inception", "The Dark Knight"],
      highlightWords: {}
    };
  },
  computed: {
    processedContent() {
      let text = this.content;
      Object.keys(this.highlightWords).forEach(key => {
        if (this.content.match(key)) {
          let regex = new RegExp(`@${key}`,"g")
          text = text.replace(
            regex,
            `[${this.highlightWords[key].text}](${this.highlightWords[key].type},${this.highlightWords[key].id})`
          );
        }
      });
      return text;
    }
  },
  methods: {
    addEmoji(val) {
      for (let i = 0; i < Emoji.emoji.length; i++) {
        let currentKeyName = Emoji.emoji[i].key;
        let currentKeyNameTrim = currentKeyName.replace("\\", "");
        if (val.match(currentKeyName) != null) {
          this.content = val.replace(currentKeyNameTrim, Emoji.emoji[i].value);
        }
      }
    },
    
    addHighlight() {
      let processedWord = null;
      let word = null;
      // word = this.content.substring(
      //   this.content.lastIndexOf("@") + 1,
      //   this.content.indexOf(" ", this.content.lastIndexOf("@"))
      // );
      if (this.selectedWord) {
        word = this.selectedWord;
      }
      // const fetchData = function(word) {
      //   axios
      //     .post("https://app.flibo.ai/live_search", {
      //       session_id: "1591181440dfmMXlLBw1NhObTx",
      //       string: word,
      //       search_type: "content",
      //       guest_id: null
      //     })
      //     .then(response => {
      //       console.log(response)
      //     });
      // };
      // fetchData(word);
      processedWord = word.toLowerCase().replace(/ /g, "_");
      this.highlightWords[processedWord] = {
        type: "content",
        id: 123,
        text: word
      };
      this.content = this.content.replace(word, processedWord);
    },
    submit() {
      console.log(this.processedContent);
    }
  },
  watch: {
    content: function(val) {
      if (this.content) {
        this.addEmoji(val);
      }
      if (
        this.content.lastIndexOf("@") != -1 &&
        this.content.indexOf(" ", this.content.lastIndexOf("@")) != -1
      ) {
        this.addHighlight();
      }
      // let some = this.content.substring(this.content.lastIndexOf("@"), this.content.length);
      // console.log(some);
    },
    selectedWord: function() {
      this.content = this.content + this.selectedWord;
    }
  }
};
</script>

<style scoped>
* {
  color: black;
}
.search-div {
  width: 100%;
  height: 50vh;
  background-color: white;
}

textarea {
  width: 100%;
  height: 20vh;
}
</style>