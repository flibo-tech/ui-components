<template>
  <div
    v-if="noOfPlatforms >= 1"
    class="platform-container"
    :style="[noOfPlatforms === 1 ? {'width': containerWidth * (30/100) + 'px',
    'height': containerWidth * (30/100) + 'px'} 
    :
    {'width': containerWidth * (60/100) + 'px',
    'height': containerWidth * (30/100) + 'px',
    'transition': 'width 0.3s linear'},
    plusClicked ?  {'width': containerWidth * (90/100) + 'px'} : {}]"
  >
    <img
      @click="goToPlatform(link, 'feed_poster')"
      v-if="plusClicked === false"
      :src="
                'https://flibo-images.s3-us-west-2.amazonaws.com/logos/platforms/' +
                finalPlatforms[0] +
                '.jpg'
              "
    />
    <div class="image-container" v-if="plusClicked">
      <img
        @click="goToPlatform(link, 'feed_poster')"
        v-for="platform in finalPlatforms"
        v-bind:key="platform.id"
        :src="
                'https://flibo-images.s3-us-west-2.amazonaws.com/logos/platforms/' +
                platform +
                '.jpg'
              "
      />
    </div>
    <div
      v-if="noOfPlatforms > 1 && plusClicked === false"
      class="plus-sign"
      @click="plusClicked = !plusClicked"
    >+ {{ noOfPlatforms - 1 }}</div>
  </div>
</template>

<script>
export default {
  props: {
    containerWidth: {
      type: Number,
      required: true
    },
    platformArr: {
      type: Array,
      required: false
    },
    moviePlatformsObj: {
      type: Object,
      required: false
    }
  },

  data() {
    return {
      plusClicked: false
    };
  },

  computed: {
    noOfPlatforms() {
      return this.moviePlatforms.length;
    },
    moviePlatforms() {
      return Object.keys(this.moviePlatformsObj);
    },
    userPlatforms() {
      let lowerCased = this.platformArr.map(el => {
        return el.toLowerCase();
      });
      let replaceSpace = lowerCased.map(el => {
        return el.replace(/ /g, "_");
      });
      return replaceSpace;
    },
    finalPlatforms() {
      let finalPlatform = [];
      this.moviePlatforms.forEach(element => {
        this.userPlatforms.forEach(userPlat => {
          if (element === userPlat) {
            finalPlatform.push(element);
          }
        });
      });
      this.moviePlatforms.forEach(el => {
        finalPlatform.push(el);
      });

      finalPlatform = finalPlatform.filter(function(elem, pos) {
        return finalPlatform.indexOf(elem) == pos;
      });
      return finalPlatform;
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
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.platform-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 50px;
  background-color: white;
  max-width: 200px;
  max-height: 80px;
}
.image-container {
  width: 100%;
  height: 100%;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  overflow-x: scroll;
}
.image-container::-webkit-scrollbar {
  display: none;
}
.plus-sign {
  font-family: "Roboto", Arial;
  color: black;
  font-size: 30px;
}
img {
  padding: 5px;
  border-radius: 50%;
  max-height: 100%;
}
</style>