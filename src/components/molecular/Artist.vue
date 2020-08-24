<template>
  <Person :image="image" :width="200" :height="250" name="Some name" />
</template>

<script>
import Person from "../atomic/Person";
export default {
  name: "Artist",
  // props: {
  //   artistId: {
  //     type: Number,
  //     required: true
  //   },
  //   name: {
  //     type: String,
  //     required: true
  //   },
  //   image: {
  //     type: String,
  //     required: true
  //   },
  //   skipContentId: {
  //     type: Number,
  //     required: true
  //   }
  // },
  components: { Person },
  data() {
    return {
      // remove data when using props
      image: "https://image.tmdb.org/t/p/w500/qCpZn2e3dimwbryLnqxZuI88PTi.jpg",
      width: 200,
      height: 250,
      name: "Some Name"
    };
  }
};
</script>

<style scoped>
</style>