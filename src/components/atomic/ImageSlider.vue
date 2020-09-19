<template>
  <flickity
    v-if="images.length"
    class="images"
    ref="flickity"
    :options="flickityOptions"
  >
    <div v-for="(image, index) in images" :key="index" class="image">
      <div class="img-wrapper">
        <img :src="image.replace('/original/', '/w500/')" alt="cover-poster" />
      </div>
    </div>
  </flickity>
</template>

<script>
import axios from "axios";
import Flickity from "vue-flickity";

export default {
  name: "imageSlider",
  components: {
    Flickity
  },
  props: {
    contentIds: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      store: this.$store.state,
      images: [],
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        percentPosition: true
      }
    };
  },
  created() {
    this.fetchImages();
  },
  computed: {
    selectedImage() {
      return this.images.length
        ? this.images[this.$refs.flickity.selectedIndex()]
        : null;
    }
  },
  watch: {
    contentIds: {
      handler() {
        this.fetchImages();
      }
    }
  },
  methods: {
    fetchImages() {
      var self = this;
      axios
        .post(self.$store.state.api_host + "fetch_content_images", {
          session_id: "1599211356d4w3ZodTtsPUt3E5", //self.$store.state.session_id,
          content_ids: self.contentIds
        })
        .then(function(response) {
          if (response.status == 200) {
            if (response.data.images.includes(self.selectedImage)) {
              self.images = [self.selectedImage];
              self.images.push(
                ...response.data.images.filter(
                  image => image != self.selectedImage
                )
              );
            } else {
              self.images = response.data.images;
            }
          } else if (response.status == 204) {
            self.images = [];
          }
        })
        .catch(function(error) {
          // console.log(error);
          if ([401, 419].includes(error.response.status)) {
            window.location =
              self.$store.state.login_host +
              "logout?session_id=" +
              self.$store.state.session_id;
            self.$store.state.session_id = null;
            self.$emit("logging-out");
          } else {
            // console.log(error.response.status);
          }
        });
    }
  }
};
</script>

<style scoped>
.image {
  height: 30vh;
  width: 80%;
  margin-right: 16px;
}

.img-wrapper {
  display: flex;
  width: 100%;
  max-height: 30vh;
  justify-content: space-evenly;
  margin-top: 15vh;
  transform: translateY(-50%);
}

.image img {
  max-width: 100%;
  max-height: inherit;
  filter: brightness(25%);
}

.image.is-selected img {
  filter: brightness(100%);
}
</style>