<template>
  <div
    class="feed-poster-container"
    :style="
      'width: ' + containerWidth + 'px; height: ' + 1.5 * containerWidth + 'px;'
    "
  >
    <img
      :src="image"
      class="poster"
      :style="'height: ' + 1.5 * containerWidth + 'px;'"
      alt="poster"
      @click="openContent"
    />

     <Trailer class="trailer"
    :contentId="contentId"
    trailerId="32"
    :whereToWatch="whereToWatch"
    :parent="parent"
    :size="30"
     />

    <PlatformBar class="platform-bar"
      :platformArr="platforms"
      :moviePlatformsObj="whereToWatchOptions"
      :containerWidth="containerWidth"
    />
  </div>
</template>

<script>
import PlatformBar from "./PlatformBar";
import Trailer from "./Trailer";
export default {
  name: "App",
  props: {
    containerWidth: {
      type: Number,
      required: true
    },
    contentId: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    trailerId: {
      type: String,
      required: false
    },
    whereToWatch: {
      type: Object,
      required: false
    },
    parent: {
      type: String,
      required: true
    },
    feedType: {
      type: String,
      required: false
    },
    platforms: {
      type: Array
    }
  },

  components: {
    PlatformBar, Trailer
  },

  data() {
    return {
      is_mobile: window.screen.height > window.screen.width,
      play_trailer: false
    };
  },
  computed: {
    showPlatforms() {
      if (
        Object.keys(this.whereToWatch || {}).includes("stream") ||
        Object.keys(this.whereToWatch || {}).includes("rent") ||
        Object.keys(this.whereToWatch || {}).includes("buy")
      ) {
        return true;
      } else {
        return false;
      }
    },
    whereToWatchOptions() {
      if (Object.keys(this.whereToWatch || {}).includes("stream")) {
        return this.whereToWatch.stream;
      } else if (Object.keys(this.whereToWatch || {}).includes("rent")) {
        return this.whereToWatch.rent;
      } else if (Object.keys(this.whereToWatch || {}).includes("buy")) {
        return this.whereToWatch.buy;
      } else {
        return [];
      }
    }
  },
  methods: {
    goToPlatform(link, traffic_origin) {
      this.$emit("leave-feed");
      var activity = {
        api: "outbound_traffic",
        content_id: this.contentId,
        url: link,
        traffic_origin:
          (this.parent == "search_results" ? "search_filter" : this.parent) +
          "__" +
          traffic_origin
      };
      this.$emit("update-api-counter", activity);
    },
    playTrailer() {
      this.play_trailer = true;
      var activity = {
        api: "play_trailer",
        content_id: this.contentId,
        trailer_origin: this.feedType
          ? (this.parent == "search_results" ? "search_filter" : this.parent) +
            "__" +
            this.feedType
          : this.parent == "search_results"
          ? "search_filter"
          : this.parent
      };
      this.$emit("update-api-counter", activity);
    },
    openContent() {
      this.$emit("leave-feed");
      var info = {
        origin: this.parent,
        sub_origin: this.feedType,
        content_id: this.contentId,
        title: this.title
      };
      this.$emit("open-content-page", info);
    }
  }
};
</script>

<style lang="scss" scoped>
.trailer {
  position: absolute;
  top: 50%;
}

.platform-bar {
  position: absolute;
  grid-row-start: 3;
  transform: translateY(-50%);
}
.feed-poster-container {
  position: relative;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
}
.poster {
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 1;
  width: 100%;
  border-radius: 8px;
  background-color: #f8f8f8;
}
.play-trailer {
  grid-row-start: 2;
  grid-column-start: 1;
  transform: translateY(-50%);
  width: 50%;
  padding: 15px;
  max-width: 70px;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}
.where-to-watch-container {
  grid-row-end: 3;
  grid-column-start: 1;
  align-self: end;
  width: 100%;
  overflow-x: scroll;
  padding: 5px 0px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  border-radius: 0 0 8px 8px;
}
.where-to-watch-subcontainer {
  position: relative;
  display: flex;
  width: fit-content;
  max-width: 100%;
  margin-left: 50%;
  transform: translateX(-50%);
}
.poster-platforms-container {
  display: inline-block;
  vertical-align: top;
  text-align: center;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}
.poster-platform-cropper {
  width: 28px;
  height: 28px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
}
.poster-platform-icon {
  display: inline-block;
  position: absolute;
  width: 100%;
  margin-left: -50%;
}
.fadeIn {
  animation: fadeIn 0.3s;
}
.fadeOut {
  animation: fadeOut 0.6s;
}
.black-background {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  display: table;
  top: 0%;
  left: 0%;
  z-index: 100000;
}
.youtube-player-header {
  position: fixed;
  top: calc(50vh - 28.125vw - 20vh - 25px);
  left: 10px;
  z-index: 100001;
  white-space: initial;
  font-size: 20px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.05;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
}
.youtube-player-loader {
  border: 10px solid #f3f3f3;
  border-top: 10px solid #3498db;
  border-radius: 50%;
  width: 14vw;
  height: 14vw;
  animation: spin 2s linear infinite;
  position: fixed;
  top: calc(50vh - 20vh - 7vw);
  left: calc(50% - 7vw);
  z-index: 100000;
}
.desktop-youtube-player-loader {
  border: 10px solid #f3f3f3;
  border-top: 10px solid #3498db;
  border-radius: 50%;
  width: 75px;
  height: 75px;
  animation: spin 2s linear infinite;
  position: fixed;
  top: 312.5px;
  left: calc(50vw - 37.5px);
  z-index: 100000;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.youtube-player {
  position: fixed;
  width: 100vw;
  height: 56.25vw;
  top: calc(50vh - 28.125vw - 20vh);
  left: 0;
  z-index: 100001;
}
.youtube-player-platforms {
  display: inline-flex;
  overflow: scroll;
  max-width: 100%;
}
.youtube-player-platform-cropper {
  width: 50px;
  height: 50px;
  position: relative;
  overflow: hidden;
  border-radius: 20%;
}
.youtube-player-platform-icon {
  display: inline-block;
  position: absolute;
  width: 100%;
  margin-left: -50%;
}
.youtube-player-platforms-container {
  display: inline-block;
  vertical-align: top;
  text-align: center;
  margin: 20px 10px 0px 10px;
}
.tap-to-watch-text {
  white-space: nowrap;
  font-size: 20px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.05;
  letter-spacing: normal;
  text-align: center;
  color: #333333;
}
.youtube-player-streaming-box {
  position: fixed;
  top: calc(60vh + 28.125vw - 25vh);
  left: 50%;
  transform: translateX(-50%);
  z-index: 100001;
  background-color: #ffffff;
  border-radius: 7px;
  padding: 10px;
  max-width: 95vw;
  text-align: center;
}
::-webkit-scrollbar {
  display: none;
}
</style>