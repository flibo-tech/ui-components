<template>
  <div>
    <div class="search-div" v-if="searchDiv">
      <ul>
        <li
          v-for="movie in movies"
          :key="movie"
          @click="[selectedWord = movie, searchDiv = false]"
        >{{ movie }}</li>
      </ul>
    </div>
    <textarea @keyup.key.@="searchDiv = true" v-model="content" placeholder="Enter text"></textarea>
    <button @click="submit">Submit</button>
    &#x1f62b;
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
      let matchedEmojis = null;
      
      const count = str => {
        const re = /[\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}]/ug;
        return ((str || "").match(re) || []);
      };
      matchedEmojis = count(this.content);

      matchedEmojis.forEach((el) => {
        let code = this.emojiUnicode(el);
        text = text.replace(el, `e[&#x${code}]`);
      })
      Object.keys(this.highlightWords).forEach(key => {
        if (this.content.match(key)) {
          let regex = new RegExp(`@${key}`, "g");
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
    emojiUnicode(emoji) {
      var comp;
      if (emoji.length === 1) {
        comp = emoji.charCodeAt(0);
      }
      comp =
        (emoji.charCodeAt(0) - 0xd800) * 0x400 +
        (emoji.charCodeAt(1) - 0xdc00) +
        0x10000;
      if (comp < 0) {
        comp = emoji.charCodeAt(0);
      }
      return comp.toString("16");
    },
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
        this.checkAt = this.content.lastIndexOf("@");
      }
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