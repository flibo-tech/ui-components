<template>
  <div class="main-container" :style="adjustPosition">
    <div
      class="image-container"
      :style="{ width: width + 'px', height: height + 'px' }"
    >
      <img :src="image" />
    </div>
    <p :style="{ top: spacing + 'px', width: width + 'px' }">{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: "Person",

  props: {
    name: {
      type: String,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    spacing: {
      type: Number,
      default: 0,
      require: false
    },
    position: {
      type: String,
      default: "bottom"
    }
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
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container {
  overflow: hidden;
  border-radius: 8px;
}

img {
  width: 100%;
}

p {
  text-align: center;
  position: relative;
  font-family: "Roboto";
}
</style>
