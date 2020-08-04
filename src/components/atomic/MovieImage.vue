<template>
  <div>
    <div>
      <div ref="movieImageContainer" class="image-container">
        <img ref="movieImage" :src="getImg" />
      </div>
      <div @click="store.component = null">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum neque et nesciunt deserunt nam voluptate suscipit ducimus, non commodi inventore beatae quos quam ipsam expedita reprehenderit fugit autem aliquam consectetur.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolore officiis repudiandae enim sunt quas autem omnis, neque unde praesentium distinctio deserunt ipsa reiciendis nihil veritatis quo voluptatibus a! Veritatis.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus ipsum voluptas sapiente. Deserunt quibusdam vero quo doloribus, qui ipsum, beatae omnis quaerat rem maiores reiciendis laudantium suscipit esse eius maxime?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, nihil voluptas nostrum tempore facilis cumque repellendus asperiores harum minima, dolor fuga excepturi. Ea doloremque cumque facere quas harum deleniti ipsam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo corporis deleniti quas obcaecati hic laboriosam nulla aperiam ut tempore unde ullam, rerum quidem ab consectetur dolore quod cum architecto sint.
        </p>
      </div>
      <div>
          <h1>Lorem ipsum dolor</h1>
          <h1>Lorem ipsum dolor</h1>
          <h1>Lorem ipsum dolor</h1>
         
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

  data() {
    return {
      store: this.$store.state
    };
  },

  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },

  computed: {
    getImg() {
      return require("../../assets/" + this.imageUrl + ".jpg");
    }
  },

  methods: {
    onScroll() {
      console.log("Scroll");
      let scroll = window.scrollY;
      let x = (this.$refs.movieImage.style.width = 270 - scroll / 5);
      if (x >= 100) {
        this.$refs.movieImage.style.width = 270 - scroll / 5 + "%";
        this.$refs.movieImageContainer.style.position = "sticky";
        
        console.log(x)
        if ( x === 110) {
            console.log("rel")
            this.$refs.movieImageContainer.style.position = "inherit";
        }
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
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 270%;
}
.image-container {
  position: sticky;
  top: 0;
  width: 100%;
  height: 80vh;
  overflow: hidden;
}
</style>