<template>
  <div class="platform-container" v-if="noOfPlatforms">
      <img src="../../assets/platforms/netflix.png" v-if="noOfPlatforms === 1">

     <div class="two-plat" v-if="noOfPlatforms === 2">
      <!-- <img src="../../assets/platforms/netflix.png"> -->
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
      noOfPlatforms: 1,
    }
  },

  mounted() {
    console.log(this.platforms, this.stream)
  }

  
}
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

img {
  padding: 5px;
  max-width: 100%;
  border-radius: 50%;
}

</style>