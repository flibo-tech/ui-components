<template>
  <div class="main-container">
    <div @click="quickView">
      <Person :image="image" :width="width" :height="height" :name="name" />
    </div>
    <div v-if="quickViewEnabled" class="quickview">
      <div class="view-header">
        <h2>
          More by
          <span>{{ name }}</span>
        </h2>
        <Button
          buttonType="iconOnly"
          icon="cross"
          v-on:clicked="quickViewEnabled = false"
          :size="28"
        />
      </div>
      <h2 v-if="!artistData">Loading...</h2>
      <div class="poster-container" v-if="artistData">
        <Poster
          v-for="movie in filteredMovies"
          :key="movie.index"
          class="poster"
          :containerWidth="180"
          :contentId="movie.content_id"
          :image="movie.poster"
          :title="movie.title"
          :whereToWatch="movie.where_to_watch"
          parent="artist"
        />
      </div>
    </div>
    <div class="modal-bg" v-if="quickViewEnabled && artistData" @click="quickViewEnabled = false"></div>
  </div>
</template>

<script>
import axios from "axios";
import Person from "../atomic/Person";
import Poster from "../atomic/Poster";
import Button from "../atomic/Button";
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
  components: { Person, Poster, Button },
  data() {
    return {
      // remove data when using props
      image: "https://image.tmdb.org/t/p/w500/qCpZn2e3dimwbryLnqxZuI88PTi.jpg",
      width: 200,
      height: 250,
      name: "Daniel Radcliffe",
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
            (self.fetching_more = false)
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
* {
  font-family: "Roboto";
}

.view-header {
  display: flex;
  justify-content: space-between;
  padding: 0 1em;
}
.poster-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: scroll;
}
.poster-container::-webkit-scrollbar {
  display: none;
}
.quickview {
  padding: 0em 0em 1em 1em;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  left: 50%;
  top: 50%;
  transform: translate(-50%);
  position: absolute;
  background-color: white;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  color: black;
  width: 90vw;
  z-index: 1;
  animation: 0.2s ease-out 0s 1 load;
}
@keyframes load {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.quickview .poster {
  padding: 0 1em;
  flex-shrink: 0;
}
.modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  animation: 0.2s ease-out 0s 1 load;
}

h2 {
  font-weight:300;
}
span {
  font-weight: 900;
}
.quickview > h2 {
  padding-left: 1em;
}
</style>