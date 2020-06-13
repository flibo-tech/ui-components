<template>
    <div :class="checkRating(randomRating, randomStatus)">
<!-- Text will be shown instead of SVG icon for Haven't Seen button -->
      <p v-if="randomRating === 'hseen'"> Haven't Seen </p>    
    </div>
    
</template>

<script>
export default {
  name: "RatingLabel",

  methods: {
// To check which css class will be binded with div
//randomRating and randomStatus are props given by SwipeTest.vue
    checkRating(randomRating, randomStatus) {
      let ratingClass = ''
      if (randomRating === 'liked') {
        if (randomStatus === true) {
          ratingClass = 'liked-swiped'
        }
        else {
          ratingClass = 'liked'
        }
      }
      else if (randomRating === 'disliked') {
        if (randomStatus === true) {
          ratingClass = 'disliked-swiped'
        }
        else {
          ratingClass = 'disliked'
        }
      }
      if (randomRating === 'loved') {
        if (randomStatus === true) {
          ratingClass = 'loved-swiped'
        }
        else {
          ratingClass = 'loved'
        }
      }
      if (randomRating === 'hseen') {
        if (randomStatus === true) {
          ratingClass = 'hseen-swiped'
        }
        else {
          ratingClass = 'hseen'
        }
      }
      return ratingClass;
    },
  },

  props: {
    randomRating: {
      //Both types should be defined because in the intial stage randomRating was an array which was then parsed into String
      type: [Array, String]
    },
    randomStatus: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
/* Style for Haven't seen if v-if for div is true */
div p {
  color: white;
  text-align: center;
  padding-top: 0.3rem;
  font-family: Arial, Helvetica, sans-serif;
}

/* Liked + Liked-active */
.liked {
  border-radius: 100%;
  background-color: black;
  opacity: 0.2;
  background-image: url("../../assets/Icons/like-icon-white.svg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 50px;
  height: 50px;
  background-size: 30px 30px;
}
.liked-swiped {
  border-radius: 100%;
  background-color:rgb(150, 221, 109);
  opacity: 0.8;
  background-image: url("../../assets/Icons/like-icon-white.svg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 50px;
  height: 50px;
  background-size: 30px 30px;
}

/* Disliked + Disliked active */
.disliked {
  border-radius: 100%;
  background-color: black;
  opacity: 0.2;
  background-image: url("../../assets/Icons/dislike-icon-white.svg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 50px;
  height: 50px;
  background-size: 30px 30px;
}
.disliked-swiped {
  border-radius: 100%;
  background-color:rgb(207, 70, 66);
  opacity: 0.8;
  background-image: url("../../assets/Icons/dislike-icon-white.svg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 50px;
  height: 50px;
  background-size: 30px 30px;
}

/* Loved + Loved active*/
.loved {
  border-radius: 100%;
  background-color: black;
  opacity: 0.2;
  background-image: url("../../assets/Icons/love-icon-white.svg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 50px;
  height: 50px;
  background-size: 30px 30px;
}
.loved-swiped {
  border-radius: 100%;
  background-color:rgb(185, 56, 179);
  opacity: 0.8;
  background-image: url("../../assets/Icons/love-icon-white.svg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 50px;
  height: 50px;
  background-size: 30px 30px;
}

/* Haven't Seen + Haven't Seen active */
.hseen {
  border-radius: 15px;
  background-color: black;
  color: white;
  opacity: 0.2;
  width: 120px;
  height: 30px;
  background-size: 30px 30px;
}
.hseen-swiped {
  border-radius: 15px;
  background-color: rgb(0, 0, 0);
  opacity: 0.8;
  width: 120px;
  height: 30px;
  background-size: 30px 30px;
}
</style>
