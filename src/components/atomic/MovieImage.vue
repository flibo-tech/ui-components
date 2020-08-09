<template>
  <div ref="movieImageContainer" class="image-container">
    <img ref="movieImage" :src="getImg" />
  </div>
</template>

<script>
export default {
  name: "MovieImage",

  props: {
    imageUrl: {
      type: String
    }
  },

  mounted() {
    this.imageHeight = this.$refs.movieImage.getBoundingClientRect().height;
    document.getElementById("text-1").style.paddingTop =
      this.imageHeight + "px";
    window.addEventListener("scroll", this.onScroll);
  },

  data() {
    return {
      store: this.$store.state,
      lastScrollPos: null,
      lastPadding: null,
      imageHeight: null,
      endConditionCheck: true,
      previousScroll: 0,
      isScrollingUp: false
    };
  },

  computed: {
    getImg() {
      return require("../../assets/" + this.imageUrl + ".jpg");
    }
  },

  methods: {
    onScroll() {
      let scopeScroll = window.scrollY;
      let imageWidth = this.$refs.movieImage.getBoundingClientRect().width;
      let screenWidth = screen.width;
      let settledImage = this.$refs.movieImage.getBoundingClientRect().height;
      if (screenWidth <= imageWidth) {
        console.log(1);
        // console.log(screenWidth, "Screen", imageWidth, "Image");
        this.$refs.movieImage.style.height =
          this.imageHeight - scopeScroll + "px";
        this.lastScrollPos = scopeScroll;
      this.$refs.movieImage.style.min
        this.updateScrollDirection();
        if (this.isScrollingUp) {
          this.$refs.movieImage.style.width = "auto";
          console.log(1.5);
          document.getElementById("text-1").style.paddingTop =
            settledImage + scopeScroll + "px";
          // this.$refs.movieImage.style.height =
          //   this.imageHeight - scopeScroll + "px";
          // this.endConditionCheck = true;
        }
        if (this.$refs.movieImage.getBoundingClientRect().width < screenWidth * 95/100) {
          console.log("width check")
          this.$refs.movieImage.style.width = 100 + "vw";
          // this.$refs.movieImage.style.height = "10px";
        }
      } else if (this.endConditionCheck) {
        console.log(2);

        document.getElementById("text-1").style.paddingTop = "0px";
        this.$refs.movieImageContainer.style.position = "relative";
        this.updateScrollDirection();

        window.scrollTo(0, 0);
        this.endConditionCheck = false;
      } else if (
        window.scrollY === 0 &&
        this.isScrollingUp &&
        settledImage != this.imageHeight
      ) {
        console.log(3);
        console.log(screenWidth, "screen width", imageWidth, "image width");

        window.scrollTo(0, this.lastScrollPos);
        this.$refs.movieImageContainer.style.position = "fixed";
        this.$refs.movieImage.style.width = screenWidth + "px";
      } else {
        this.updateScrollDirection();
      }

      this.previousScroll = window.scrollY;
    },

    updateScrollDirection() {
      if (window.scrollY <= this.previousScroll) {
        this.isScrollingUp = true;
      } else {
        this.isScrollingUp = false;
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
  height: 80vh;
}
.image-container {
  left: 50%;
  transform: translateX(-50%);
  padding-top: 0px;
  position: fixed;
  overflow: hidden;
}
</style>