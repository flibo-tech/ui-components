<template>
<div style="display: inline-block" @click="quickViewEnabled = true" >
  <Person  :image="image" :width="width" :height="height" :name="name" />
  <QuickView v-if="quickViewEnabled" :artistId="artistId" :skipContentId="skipContentId" />
</div>
</template>

<script>
import Person from "../atomic/Person";
import QuickView from "../atomic/QuickView";
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
  components: { Person, QuickView },
  data() {
    return {
      // remove data when using props
      image: "https://image.tmdb.org/t/p/w500/qCpZn2e3dimwbryLnqxZuI88PTi.jpg",
      width: 200,
      height: 250,
      name: "Some Name",
      artistId: 288143,
      quickViewEnabled: false,
      skipContentId: 122356
    };
  },
};
</script>

<style scoped>
</style>