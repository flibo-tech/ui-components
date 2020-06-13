<template>
    <div :class="checkRating(rating, active)">
<!-- Text will be shown instead of SVG icon for Haven't Seen button -->
      <p v-if="rating === 'haventSeen'"> Haven't Seen </p>    
    </div>
</template>

<script>
export default {
  name: "RatingLabel",

  methods: {
// To check which css class will be binded with div
//rating and active are props given by SwipeTest.vue
    checkRating(rating, active) {
      let ratingClass = ''
      if (rating === 'liked') {
        if (active === true) {
          ratingClass = 'liked-swiped'
        }
        else {
          ratingClass = 'liked'
        }
      }
      else if (rating === 'disliked') {
        if (active === true) {
          ratingClass = 'disliked-swiped'
        }
        else {
          ratingClass = 'disliked'
        }
      }
      if (rating === 'loved') {
        if (active === true) {
          ratingClass = 'loved-swiped'
        }
        else {
          ratingClass = 'loved'
        }
      }
      if (rating === 'haventSeen') {
        if (active === true) {
          ratingClass = 'haventSeen-swiped'
        }
        else {
          ratingClass = 'haventSeen'
        }
      }
      return ratingClass;
    },
  },

  props: {
    rating: {
      //Both types should be defined because in the intial stage rating was an array which was then parsed into String
      type: [Array, String]
    },
    active: {
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
.haventSeen {
  border-radius: 15px;
  background-color: black;
  color: white;
  opacity: 0.2;
  width: 120px;
  height: 30px;
  background-size: 30px 30px;
}
.haventSeen-swiped {
  border-radius: 15px;
  background-color: rgb(0, 0, 0);
  opacity: 0.8;
  width: 120px;
  height: 30px;
  background-size: 30px 30px;
}
</style>
