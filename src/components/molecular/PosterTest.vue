<template>
  <Poster
  image="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/1800/star.jpg"
  :containerWidth="300"
  :contentId="321"
  title="Title"
  parent="Something"
   />
</template>

<script>
import Poster from '../atomic/Poster'
export default {
  components: { Poster },

  data() {
    return {
    }
  }
}
</script>

<style scoped>

</style>