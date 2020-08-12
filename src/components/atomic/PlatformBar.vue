<template>
  <div :class="platCalc" v-if="noOfPlatforms">
    <div class="one" v-if="noOfPlatforms === 1">
      <img src="../../assets/platforms/netflix.png" />
    </div>

    <div class="two" v-if="noOfPlatforms === 2">
      <img src="../../assets/platforms/netflix.png" />
      <img src="../../assets/platforms/netflix.png" />
    </div>

    <div class="three" v-if="noOfPlatforms >= 3">
      <img src="../../assets/platforms/netflix.png" />
      <img src="../../assets/platforms/netflix.png" />
      <img src="../../assets/platforms/netflix.png" />
      <img src="../../assets/platforms/netflix.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PlatformBar",

  props: {
    // containerWidth: {
    //   type: Number,
    //   required: true
    // },
    platforms: {
      type: Array,
      required: false
    },
    stream: {
      type: Object,
      required: false
    }
  },

  data() {
    return {
      noOfPlatforms: 2,
      userPlatforms: null,
      moviePlatforms: null,
      finalPlatforms: null
    };
  },

  computed: {
    platCalc() {
      let className = null;
      if (this.noOfPlatforms === 1) {
        className = "platform-container";
      } else if (this.noOfPlatforms === 2) {
        className = "two-plat";
      } else {
        className = "three-plus-plat";
      }
      return className;
    },
    changePlatName() {
      let lowerCased = this.platforms.map((el) => {
      return el.toLowerCase()
      })
      let replaceSpace = lowerCased.map((el) => {
        return el.replace(/ /g, "_")
      })
      return replaceSpace;
    }
  },

  methods: {
    calcPlat() {
      this.userPlatforms = this.changePlatName;
      this.moviePlatforms = Object.keys(this.stream);
      // this.noOfPlatforms = this.moviePlatforms.length;
    }
  },

  mounted() {
    this.calcPlat();
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.platform-container {
  background-color: rgb(255, 255, 255);
  width: 90px;
  height: 90px;
  border-radius: 50%;
}

.two-plat {
  background-color: rgb(255, 255, 255);
  width: 190px;
  height: 90px;
  border-radius: 50px;
}

.three-plus-plat {
  background-color: rgb(255, 255, 255);
  width: 250px;
  height: 90px;
  border-radius: 50px;
}

.one > img {
  padding: 5px;
  max-width: 100%;
  border-radius: 50%;
}

.two {
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  align-items: center;
}

.two img {
  padding: 2px;
  max-width: 45%;
  border-radius: 50%;
}

.three {
  display: flex;
  justify-content: flex-start;
  height: 100%;
  align-items: center;
  border-radius: 50px;
  overflow-x: scroll;
}

.three:first-child {
  padding-left: 5px;
}

.three img {
  padding: 2px;
  max-width: 33%;
  border-radius: 50%;
}
</style>