<template>
  <div>
    <div>
      <div ref="movieImageContainer" class="image-container">
        <img ref="movieImage" :src="getImg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieImage",

  props: {
    imageUrl: {
      type: String
    },
    scrollProp: {
      type: Number
    }
  },

  data() {
    return {
      store: this.$store.state,
      lastScrollPos: null,
      initialScroll: false

    };
  },

  computed: {
    getImg() {
      return require("../../assets/" + this.imageUrl + ".jpg");
    }
  },

  watch: {
    scrollProp(scrollProp) {
      let scopeScroll = scrollProp;
      let imageWidth = this.$refs.movieImage.getBoundingClientRect().width;
      let imageHeight = this.$refs.movieImage.getBoundingClientRect().height;
      // let lastPadding;

      let screenWidth = screen.width;
      if (screenWidth + 60 < imageWidth) {
        // console.log(screenWidth, "Screen", imageWidth, "Image");
        this.$refs.movieImage.style.height = imageHeight - scopeScroll + "px";
        this.$refs.movieImage.style.paddingTop = scopeScroll + "px";
        // lastPadding = this.$refs.movieImage.style.paddingTop;
        this.lastScrollPos = scopeScroll;
        // console.log(lastPadding)
        console.log(this.lastScrollPos);
        this.initialScroll = true;
      }
       else if(scopeScroll <= this.lastScrollPos && this.initialScroll) {
         console.log("elseIf")
        this.$refs.movieImage.style.paddingTop = scopeScroll + "px";
      }
    }
  }
};
</script>

<style scoped>
p {
  font-size: 20px;
  line-height: 2;
}
img {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  height: 80vh;
}
.image-container {
  padding-top: 0px;
  position: sticky;
  overflow: hidden;
}
</style>