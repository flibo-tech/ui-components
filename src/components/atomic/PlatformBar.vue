<template>
  <div :class="platCalc" v-if="noOfPlatforms">
    <div class="one" ref="one" v-if="noOfPlatforms === 1">
      <!-- <img src="../../assets/platforms/netflix.png" /> -->
    </div>

    <div class="two" ref="two" v-if="noOfPlatforms === 2">
    </div>

    <div class="three" ref="three" v-if="noOfPlatforms >= 3">
      <img src="../../assets/platforms/netflix.png" />
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
      } else if (this.noOfPlatforms === 2) {
        className = "two-plat";
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
      } else if (platform === "jmy_anime_list") {
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
      let div = document.querySelector(".three-plus-plat");
      div.classList.add("scrollable");
      this.notScrollable = false;
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
      } else if (this.noOfPlatforms === 2) {
        this.$nextTick(() => {
          for (let i = 0; i < 2; i++) {
            document.createElement("img");
            let img = document.createElement("img");
            div = this.$refs.two;
            img.src = this.checkImage(this.finalPlatforms[i]);
            img.style.width = "90px";
            img.style.height = "90px";
            img.style.boxSizing = "border-box";
            div.appendChild(img);
          }
        });
      } else if (this.noOfPlatforms >= 3 && this.notScrollable === false) {
        this.$nextTick(() => {
          for (let i = 0; i < this.moviePlatforms.length; i++) {
            document.createElement("img");
            let img = document.createElement("img");
            div = this.$refs.two;
            img.src = this.checkImage(this.finalPlatforms[i]);
            img.style.width = "90px";
            img.style.height = "90px";
            img.style.boxSizing = "border-box";
            div.appendChild(img);
          }
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

.two-plat {
  background-color: rgb(255, 255, 255);
  width: 200px;
  height: 100px;
  border-radius: 50px;
}

.three-plus-plat {
  background-color: rgb(255, 255, 255);
  width: 180px;
  height: 100px;
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
  max-width: 45%;
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

.three img {
  max-width: 50%;
  border-radius: 50%;
}

.scrollable {
  width: 220px;
}
</style>