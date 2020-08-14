<template>
  <div
    ref="movieImageContainer"
    style="position: fixed;"
    class="landscape-image-container"
  >
    <img ref="movieImage" class="landscape-content-image" :src="imageUrl" />
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
    this.imageInitialHeight = this.$refs.movieImage.getBoundingClientRect().height;
    document.getElementById("text-1").style.paddingTop =
      this.imageInitialHeight + "px";
    window.addEventListener("scroll", this.onScroll);
  },

  data() {
    return {
      store: this.$store.state,
      imageInitialHeight: 0,
      previousScroll: 0,
      isScrollingUp: false
    };
  },

  methods: {
    onScroll() {
      let scroll_position = window.scrollY;
      let scroll = Math.abs(scroll_position - this.previousScroll);
      let imageWidth = this.$refs.movieImage.getBoundingClientRect().width;
      let imageHeight = this.$refs.movieImage.getBoundingClientRect().height;
      let textPaddingTop = document
        .getElementById("text-1")
        .style.paddingTop.replace("px", "");
      let screenWidth = screen.width;

      if (!this.isScrollingUp) {
        if (this.$refs.movieImageContainer.style.position == "fixed") {
          if (screenWidth < imageWidth) {
            this.$refs.movieImage.style.height =
              Math.max(
                imageHeight - scroll,
                (imageHeight / imageWidth) * screenWidth
              ) + "px";
            this.updateScrollDirection();
          } else {
            document.getElementById("text-1").style.paddingTop = "0px";
            this.$refs.movieImageContainer.style.position = "relative";
            this.$refs.movieImage.style.height =
              (imageHeight / imageWidth) * screenWidth + "px";
            this.updateScrollDirection();
            window.scrollTo(0, 0);
          }
        } else {
          this.updateScrollDirection();
        }
      } else if (this.isScrollingUp) {
        if (this.$refs.movieImageContainer.style.position == "relative") {
          if (scroll_position == 0) {
            document.getElementById("text-1").style.paddingTop =
              imageHeight + 100 + "px";
            this.$refs.movieImageContainer.style.position = "fixed";
            this.updateScrollDirection();
            window.scrollTo(0, 100);
          } else {
            this.updateScrollDirection();
          }
        } else if (this.$refs.movieImageContainer.style.position == "fixed") {
          if (imageHeight < this.imageInitialHeight) {
            this.$refs.movieImage.style.height = imageHeight + scroll + "px";
            if (textPaddingTop < this.imageInitialHeight) {
              document.getElementById("text-1").style.paddingTop =
                imageHeight + 100 + scroll + "px";
              this.updateScrollDirection();
              window.scrollTo(0, 100);
            } else {
              this.updateScrollDirection();
            }
          } else {
            this.updateScrollDirection();
          }
        }
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
.landscape-content-image {
  position: relative;
  display: block;
  height: 80vh;
  transition: height 10ms linear;
}
.landscape-image-container {
  left: 50%;
  transform: translateX(-50%);
  padding-top: 0px;
  overflow: hidden;
}
</style>