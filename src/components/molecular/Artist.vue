<template>
  <div>
    <div @click="quickView">
      <Person :image="image" :width="width" :height="height" :name="name" />
    </div>
    <div v-if="quickViewEnabled && artistData" class="quickview">
      <Poster
        v-for="movie in filteredMovies"
        :key="movie.index"
        class="poster"
        :containerWidth="180"
        :contentId="movie.content_id"
        :image="movie.poster"
        :title="movie.title"
        :whereToWatch="movie.where_to_watch"
        :platforms="['Netflix']"
        parent="artist"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Person from "../atomic/Person";
import Poster from "../atomic/Poster";
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
  components: { Person, Poster },
  data() {
    return {
      // remove data when using props
      image: "https://image.tmdb.org/t/p/w500/qCpZn2e3dimwbryLnqxZuI88PTi.jpg",
      width: 200,
      height: 250,
      name: "Some Name",
      artistId: 288143,
      skipContentId: 122356,
      quickViewEnabled: false,
      artistData: null
    };
  },

  methods: {
    quickView() {
      this.quickViewEnabled = !this.quickViewEnabled;
      axios
        .post("https://app.flibo.ai/more_by_artist", {
          session_id: "1591181440dfmMXlLBw1NhObTx",
          artist_id: this.artistId,
          credit_category: "cast",
          country: "India",
          guest_id: null
        })
        .then(
          response => (
            (this.artistData = response.data.contents),
            (self.fetching_more = false),
            console.log(this.artistData)
          )
        )
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  computed: {
    filteredMovies() {
      return this.artistData.filter(el => el.content_id != this.skipContentId);
    }
  }
};
</script>

<style scoped>
.quickview {
  padding: 2em 2em 6em 2em;
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0;
  background-color: white;
  color: black;
  width: 100vw;
  overflow: scroll;
  z-index: 1;
}
.quickview::-webkit-scrollbar {
  display: none;
}
.quickview .poster {
  padding: 0 1em;
  flex-shrink: 0;
}
</style>