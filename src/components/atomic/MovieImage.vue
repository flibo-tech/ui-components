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
      endConditionCheck: true
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
      } else if (this.endConditionCheck) {
        console.log("elseIf");
        document.getElementById("text-1").style.paddingTop = "0px";
        this.$refs.movieImageContainer.style.position = "relative";
        window.scrollTo(0, 0);
        this.endConditionCheck = false;
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
  position: fixed;
  overflow: hidden;
}
</style>