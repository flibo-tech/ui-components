<template>
  <div>
    <div class="textfield-wrapper">
      <div class="search-div" v-show="searchString">
        <ul>
          <li
            v-for="movie in movies"
            :key="movie"
            @click="[selectedWord = movie, addHighlight()]"
          >{{ movie }}</li>
        </ul>
      </div>

      <textarea
        @paste.prevent
        @focus="showCounter = true"
        @keydown.delete="removeSearch"
        :style="type === 'post' ? {'width': '100%'}: { 'width': '85%' } "
        :maxlength="maxLimit"
        :rows="type === 'comment' ? 1 : 15"
        v-model="content"
        ref="inputField"
        placeholder="Enter text"
      ></textarea>

      <transition name="counter-animation">
        <Counter
          :style="type === 'post' ? { 'right': '10px', 'bottom': '-40px' }:{'right': '0px', 'bottom': '0px'}"
          v-if="showCounter"
          class="counter"
          :limit="type === 'post' ? 500 : 500"
          :count="length"
          :radius="10"
          :width="3"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import Emoji from "../../assets/emoji";
import Counter from "./CharacterCounter";

export default {
  name: "TextField",
  data() {
    return {
      content: "",
      selectedWord: "",
      maxLimit: null,
      negateLength: null,
      showCounter: false,
      idsForMovies: [],
      movies: ["Inception", "The Dark Knight"],
      highlightWords: {}
    };
  },
  props: {
    type: {
      type: String,
      required: true
    },
    isSubmitClicked: {
      type: Boolean
    }
  },
  components: { Counter },
  computed: {
    processedContent() {
      let text = this.content;
      let matchedEmojis = null;

      const count = str => {
        const re = /[\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}]/gu;
        return (str || "").match(re) || [];
      };
      matchedEmojis = count(this.content);

      matchedEmojis.forEach(el => {
        let code = this.emojiUnicode(el);
        text = text.replace(el, `&#x${code}`);
      });
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
    },
    searchString() {
      let str = "";
      if (
        this.content.match(/@./g) &&
        this.content.lastIndexOf("@") > this.content.lastIndexOf(" ")
      ) {
        str = this.content.substring(
          this.content.lastIndexOf("@") + 1,
          this.content.indexOf(" ", this.content.lastIndexOf("@")) === -1
            ? this.content.length
            : this.content.indexOf(" ", this.content.lastIndexOf("@"))
        );
      }
      return str;
    },
    length() {
      let length = 0;
      length = this.content.length - this.negateLength;
      return length;
    }
  },
  methods: {
    autoGrow(element) {
      element.style.height = "auto";
      element.style.height = element.scrollHeight + "px";
    },
    removeSearch() {
      let lastWord = null;
      let highlight = Object.keys(this.highlightWords);
      const getLastWord = words => {
        let n = words.split(" ");
        let end = n[n.length - 1];
        for (let i = 0; i <= highlight.length; i++) {
          if (end === "@" + highlight[i]) {
            end = end.slice(0, -1);
            return end;
          }
        }
        return;
      };
      lastWord = getLastWord(this.content);
      this.content = this.content.replace(lastWord, "");
    },
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
      console.log(currentKeyNameTrim)
          this.content = val.replace(currentKeyNameTrim, Emoji.emoji[i].value);
        }
      }
    },
    addHighlight() {
      let processedWord = null;
      let word = this.selectedWord;
      processedWord = word.toLowerCase().replace(/ /g, "_");
      this.highlightWords[processedWord] = {
        type: "content",
        id: 123,
        text: word
      };
      this.selectedWord = processedWord;
      this.negateLength = this.negateLength + (processedWord.length + 1);
      this.$refs.inputField.focus();
    }
  },
  watch: {
    isSubmitClicked: function() {
      if (this.isSubmitClicked) {
        console.log(this.processedContent);
      }
    },
    content: function(val) {
      if (this.content) {
        this.addEmoji(val);
      }
      this.autoGrow(this.$refs.inputField);
      if (this.length >= 500) {
        this.maxLimit = this.content.length;
      }
      for (let content in this.highlightWords) {
        this.idsForMovies.forEach(varId => {
          console.log("HI")
          if (varId != this.highlightWords[content].id) {
            this.idsForMovies.push(this.highlightWords[content].id);
          }
        });
      }
    },
    selectedWord: function() {
      if (this.content.lastIndexOf("@") != -1 && this.selectedWord != "") {
        let searchWord = this.content.substring(
          this.content.lastIndexOf("@") + 1,
          this.content.length
        );
        if (searchWord) {
          this.content = this.content.replace(
            searchWord,
            this.selectedWord + " "
          );
        } else {
          this.content = this.content + this.selectedWord + " ";
        }
      }
      this.selectedWord = "";
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

.textfield-wrapper {
  position: relative;
}
.counter {
  z-index: 10;
  position: absolute;
}
textarea {
  color: #686868;
  border: none;
  outline: none;
  resize: none;
}

.counter-animation-enter-active,
.counter-animation-leave-active {
  transition: opacity 0.2s ease-out;
}

.counter-animation-enter,
.counter-animation-leave-to {
  opacity: 0;
}
</style>