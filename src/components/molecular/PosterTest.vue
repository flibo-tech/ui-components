<template>
  <div class="container">
    <Poster
      image="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/1800/star.jpg"
      :containerWidth="150"
      :contentId="321"
      title="Some Movie"
      parent="Something"
      :platforms="platforms"
      :whereToWatch="where_to_watch_1"
      :showName = false
    />

    <Poster
      image="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/1800/star.jpg"
      :containerWidth="200"
      :contentId="321"
      title="Other Movie"
      parent="Something"
      :platforms="platforms"
      :whereToWatch="where_to_watch_2"
      :showName = true
    /> 
     <Poster
      image="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/1800/star.jpg"
      :containerWidth="200"
      :contentId="321"
      title="Other Movie"
      parent="Something"
      :platforms="platforms"
      :whereToWatch="where_to_watch_3"
      :showName = true
    /> <br>
  </div>
</template>

<script>
import Poster from "../atomic/Poster";
export default {
  components: { Poster },

  data() {
    return {
      platforms: ["Netflix", "Amazon Prime Video", "Jio Cinema", "Hotstar"],
      where_to_watch_1: {
        buy: {
          amazon_prime_video: "https://www.primevideo.com/",
          jio_cinema: "https://www.jiocinema.com/",
          netflix: "https://www.netflix.com/",
          my_anime_list: "someUrl"
        },
        rent: {
          amazon_prime_video: "https://www.primevideo.com/",
          jio_cinema: "someUrl",
          netflix: "someUrl",
          my_anime_list: "someUrl"
        },
        stream: {
          netflix: "https://www.netflix.com/"
        }
      },
      where_to_watch_2: {
        buy: {
          amazon_prime_video: "someUrl",
          jio_cinema: "https://www.jiocinema.com/",
          netflix: "someUrl",
          my_anime_list: "someUrl"
        },
        rent: {
          amazon_prime_video: "someUrl",
          jio_cinema: "someUrl",
          netflix: "someUrl",
          my_anime_list: "someUrl"
        },
        stream: {
          amazon_prime_video: "https://www.primevideo.com/",
          jio_cinema: "https://www.jiocinema.com/",
          netflix: "https://www.netflix.com/",
          hotstar: "someUrl",
        }
      },
      where_to_watch_3: {}
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  width: 1000px;
}
</style>