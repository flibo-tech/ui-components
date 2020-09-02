<template>
  <div>
    <textarea v-model="content" placeholder="Enter text"></textarea>
    {{processedContent}}
  </div>
</template>

<script>
import Emoji from "../../assets/emoji";
export default {
  name: "TextField",
  data() {
    return {
      content: "",
      processedContent: ""
    };
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
      let word = this.content.substring(
        this.content.lastIndexOf("@") + 1,
        this.content.lastIndexOf(" ")
      );
      console.log(`[${word}]()`);
      this.processedContent = this.content.replace(`@${word}`, `[${word}]()`);
    }
  },
  watch: {
    content: function(val) {
      console.log(typeof "😁")
      this.processedContent = val;
      if (this.content) {
        this.addEmoji(val);
      }
      if (this.content.match("@")) {
        this.addHighlight();
      }
    }
  }
};
</script>

<style scoped>
* {
  color: black;
}
</style>