<template>
  <div
    class="feed-poster-container"
    :style="
      'width: ' + containerWidth + 'px;'"
  >
    <img
      :src="image"
      class="poster"
      :style="'height: ' + 1.5 * containerWidth + 'px;'"
      alt="poster"
      @click="openContent"
    />

    <Trailer
      class="trailer"
      :contentId="contentId"
      trailerId="32"
      :whereToWatch="whereToWatch"
      :parent="parent"
      :size="30"
    />

    <PlatformBar
      class="platform-bar"
      :platformArr="platforms"
      :moviePlatformsObj="whereToWatchOptions"
      :containerWidth="containerWidth"
    />
    <div
      v-if="showName"
      class="title"
      :style="[
Object.keys(whereToWatchOptions).length >= 1  ? {'top': containerWidth / 4 + 'px' } : {'top': '20px'}]"
    >{{ title }}</div>
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
      type: Array,
      required: false,
      dafault: []
    },
    showName: {
      type: Boolean,
      required: false,
      default: true
    }
  },

  components: {
    PlatformBar,
    Trailer
  },

  data() {
    return {
      is_mobile: window.screen.height > window.screen.width,
      play_trailer: false
    };
  },
  computed: {
    whereToWatchOptions() {
      if (Object.keys(this.whereToWatch || {}).includes("stream")) {
        return this.whereToWatch.stream;
      } else if (Object.keys(this.whereToWatch || {}).includes("rent")) {
        return this.whereToWatch.rent;
      } else if (Object.keys(this.whereToWatch || {}).includes("buy")) {
        return this.whereToWatch.buy;
      } else {
        return {};
      }
    }
  },
  methods: {
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
.title {
  position: absolute;
  text-align: center;
  font-family: "Roboto";
  grid-row-start: 3;
}

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
</style>