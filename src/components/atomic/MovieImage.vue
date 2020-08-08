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
      endConditionCheck: false,
      isChecked: false
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
      if (screenWidth < imageWidth) {
        // console.log(screenWidth, "Screen", imageWidth, "Image");
        this.$refs.movieImage.style.height =
          this.imageHeight - scopeScroll + "px";
        this.lastScrollPos = scopeScroll;
        this.endConditionCheck = true;
      } else if (this.endConditionCheck) {
        document.getElementById("text-1").style.paddingTop = "0px";
        this.$refs.movieImageContainer.style.position = "relative";
        window.scrollTo(0, 0);
        this.endConditionCheck = false;
      
      } else if (window.scrollY === 0) {
        window.scrollTo(0, this.lastScrollPos);
        this.$refs.movieImageContainer.style.position = "fixed";
        this.$refs.movieImage.style.height =
          this.imageHeight + scopeScroll + "px";
        document.getElementById("text-1").style.paddingTop = this.imageHeight + "px";
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