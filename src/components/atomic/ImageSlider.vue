<template>
  <flickity class="gallery" ref="flickity" :options="flickityOptions">
    <div class="gallery-cell">1</div>
    <div class="gallery-cell">2</div>
    <div class="gallery-cell">3</div>
    <div class="gallery-cell">4</div>
    <div class="gallery-cell">5</div>
  </flickity>
</template>

<script>
import Flickity from "vue-flickity";

export default {
  name: "imageSlider",
  components: {
    Flickity
  },
  data() {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true
      }
    };
  },
  computed: {
    selectedIndex() {
      return this.$refs.flickity.selectedIndex();
    }
  }
};
</script>

<style scoped>
.gallery {
  background: #eee;
}

.gallery-cell {
  width: 28%;
  height: 200px;
  margin-right: 10px;
  background: #8c8;
  counter-increment: gallery-cell;
}

.gallery-cell.is-selected {
  background: #ed2;
}

/* cell number */
.gallery-cell:before {
  display: block;
  text-align: center;
  content: counter(gallery-cell);
  line-height: 200px;
  font-size: 80px;
  color: white;
}
</style>