<template>
  <div :class="platCalc" ref="container" v-if="noOfPlatforms">
    <div class="one" ref="one" v-if="noOfPlatforms === 1">
      <!-- <img src="../../assets/platforms/netflix.png" /> -->
    </div>

    <div class="three" ref="three" v-if="noOfPlatforms >= 2">
      <!-- <img src="../../assets/platforms/netflix.png" /> -->
      <div class="plus" @click="scrollable" v-if="notScrollable">+ {{ noOfPlatforms - 1 }}</div>
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
    },
    noOfPlat: {
      type: Number
    }
  },

  data() {
    return {
      noOfPlatforms: null,
      userPlatforms: null,
      moviePlatforms: null,
      finalPlatforms: null,
      notScrollable: true
    };
  },

  computed: {
    platCalc() {
      let className = null;
      if (this.noOfPlatforms === 1) {
        className = "platform-container";
      } else {
        className = "three-plus-plat";
      }
      return className;
    },
    changePlatName() {
      let lowerCased = this.platforms.map(el => {
        return el.toLowerCase();
      });
      let replaceSpace = lowerCased.map(el => {
        return el.replace(/ /g, "_");
      });
      return replaceSpace;
    }
  },

  methods: {
    checkImage(platform) {
      let path = null;
      if (platform === "netflix") {
        path = "https://i.ibb.co/FwGDHZg/netflix.png";
      } else if (platform === "jio_cinema") {
        path = "https://i.ibb.co/rHW1NyC/hotstar.png";
      } else if (platform === "amazon_prime_video") {
        path = "https://i.ibb.co/FwGDHZg/netflix.png";
      } else if (platform === "my_anime_list") {
        path = "https://i.ibb.co/rHW1NyC/hotstar.png";
      } else {
        console.log("Platform not found.");
      }
      return path;
    },
    calcPlat() {
      this.userPlatforms = this.changePlatName;
      this.moviePlatforms = Object.keys(this.stream);
      // this.noOfPlatforms = this.moviePlatforms.length;
    },

    calcFinalPlat() {
      let finalPlat = [];
      this.moviePlatforms.forEach(element => {
        this.userPlatforms.forEach(userPlat => {
          if (element === userPlat) {
            finalPlat.push(element);
          }
        });
      });
      this.moviePlatforms.forEach(el => {
        finalPlat.push(el);
      });

      finalPlat = finalPlat.filter(function(elem, pos) {
        return finalPlat.indexOf(elem) == pos;
      });
      return finalPlat;
    },

    scrollable() {
      let div = this.$refs.three;
      while (div.firstChild) {
        div.removeChild(div.firstChild);
      }
      this.$refs.container.classList.remove("three-plus-plat");
      div.classList.add("scrollable");
      this.notScrollable = false;

      for (let i = 0; i < this.moviePlatforms.length; i++) {
        document.createElement("img");
        let img = document.createElement("img");
        div = this.$refs.three;
        img.src = this.checkImage(this.finalPlatforms[i]);
        img.style.width = "80px";
        img.style.height = "80px";
        img.style.padding = "0 7px";
        div.insertBefore(img, div.firstChild);
      }
    },

    addIcons() {
      let div = null;
      if (this.noOfPlatforms === 1) {
        this.$nextTick(() => {
          div = this.$refs.one;
          let img = document.createElement("img");
          img.style.width = "90px";
          img.style.height = "90px";
          img.style.padding = "5px";
          img.style.boxSizing = "border-box";

          img.src = this.checkImage(this.finalPlatforms[0]);
          div.appendChild(img);
        });
      } else if (this.noOfPlatforms >= 2) {
        this.$nextTick(() => {
          document.createElement("img");
          let img = document.createElement("img");
          div = this.$refs.three;
          img.src = this.checkImage(this.finalPlatforms[0]);
          img.style.width = "80px";
          img.style.height = "80px";
          img.style.boxSizing = "border-box";
          div.insertBefore(img, div.firstChild);
        });
      }
    }
  },

  mounted() {
    this.calcPlat();
    this.finalPlatforms = this.calcFinalPlat();
    this.noOfPlatforms = this.noOfPlat;
    this.addIcons();
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
img {
  width: 90px;
  height: 90px;
}
.platform-container {
  background-color: rgb(255, 255, 255);
  width: 90px;
  height: 90px;
  border-radius: 50%;
}

.three-plus-plat {
  background-color: rgb(255, 255, 255);
  width: 180px;
  height: 90px;
  border-radius: 50px;
}

.one > img {
  padding: 5px;
  max-width: 100%;
  border-radius: 50%;
}

.plus {
  font-family: "Roboto", sans-serif;
  color: black;
  font-size: 3em;
  cursor: pointer;
}

.three {
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  align-items: center;
  border-radius: 50px;
}


.scrollable {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 50px;
  background-color: rgb(255, 255, 255);
  padding-left: 160px;
  width: 220px;
  height: 90px;
  overflow: scroll;
}
.scrollable::-webkit-scrollbar {
  display: none;
}
</style>