<template>
  <div
    ref="movieImageContainer"
    :style="
      'position: fixed; max-height: ' +
        Math.min(1.5 * screenWidth, 0.8 * screenHeight) +
        'px;'
    "
    class="portrait-image-container"
  >
    <img
      class="content-image"
      style="width: 100%;"
      ref="movieImage"
      :src="imageUrl"
    />

    <img class="portrait-background-image" ref="movieImageBG" :src="imageUrl" />
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
    this.imageInitialHeight = this.$refs.movieImageContainer.getBoundingClientRect().height;
    this.heightThreshold = 0.3 * window.innerHeight;
    this.widthFactor = 100 / this.imageInitialHeight;
    document.getElementById("text-1").style.paddingTop =
      this.imageInitialHeight + "px";
    window.addEventListener("scroll", this.onScroll);
  },

  data() {
    return {
      store: this.$store.state,
      imageInitialHeight: 0,
      previousScroll: 0,
      isScrollingUp: false,
      heightThreshold: 0,
      widthFactor: 0,
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight
    };
  },

  methods: {
    onScroll() {
      let scroll_position = window.scrollY;
      let scroll = Math.abs(scroll_position - this.previousScroll);
      let imageHeight = this.$refs.movieImageContainer.getBoundingClientRect()
        .height;
      let textPaddingTop = document
        .getElementById("text-1")
        .style.paddingTop.replace("px", "");

      if (!this.isScrollingUp) {
        if (this.$refs.movieImageContainer.style.position == "fixed") {
          if (imageHeight > this.heightThreshold) {
            this.$refs.movieImageContainer.style.height =
              Math.max(imageHeight - scroll, this.heightThreshold) + "px";

            this.$refs.movieImage.style.width =
              this.widthFactor *
                this.$refs.movieImageContainer.getBoundingClientRect().height +
              "%";
            this.updateScrollDirection();
          } else {
            document.getElementById("text-1").style.paddingTop = "0px";
            this.$refs.movieImageContainer.style.position = "relative";
            this.$refs.movieImageContainer.style.height =
              this.heightThreshold + "px";
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
            this.$refs.movieImageContainer.style.height =
              imageHeight + scroll + "px";
            this.$refs.movieImage.style.width =
              this.widthFactor *
                this.$refs.movieImageContainer.getBoundingClientRect().height +
              "%";
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
.portrait-image-container {
  width: 100%;
  height: 100%;
  background-color: #f5f4f4;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 0px;
  overflow: hidden;
}
.content-image {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  z-index: 2;
}
.portrait-background-image {
  position: absolute;
  width: 100%;
  margin-top: -100%;
  filter: blur(5px);
  z-index: 1;
}
</style>