<template>
  <div :style="adjustPosition">
    <img :src="image" />
    <p :style="{'top': spacing + 'px'}">{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: "Person",

  // props: {
  //   name: {
  //     type: String,
  //     required: true
  //   },
  //   image: {
  //     type: String,
  //     required: true
  //   },
  //   spacing: {
  //     type: Number,
  //     default: 0,
  //     require: false
  //   },
  //   position: {
  //     type: String,
  //     default: "bottom"
  //   }
  // }

  data() {
    return {
      image:
        "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/1800/star.jpg",
      name: "Some name",
      spacing: 0,
      position: "right"
    };
  },

  computed: {
    adjustPosition() {
      switch (this.position) {
        case "right":
          return {
            "flex-direction": "row"
          };
        case "left":
          return {
            "flex-direction": "row-reverse"
          };
        case "top":
          return {
            "flex-direction": "column-reverse"
          };
        default:
          return {
            "flex-direction": "column"
          };
      }
    }
  }
};
</script>

<style scoped>
div {
  display: flex;
  width: 200px;
  align-items: center;
}

img {
  width: 100%;
  border-radius: 5px;
}

p {
  position: relative;
  font-family: "Roboto";
}
</style>