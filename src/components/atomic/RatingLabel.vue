<template>
    <div :class="checkRating(rating, active)">
<!-- Text will be shown instead of SVG icon for Haven't Seen button -->
      <p v-if="rating === 'haventSeen'"> Haven't Seen </p>    
    </div>
</template>

<script>
export default {
  name: "RatingLabel",
   props: {
    rating: {
      type: String
    },
    active: {
      type: Boolean,
      default: false
    }
  },

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

div {
  transition-property: background-color, border-radius;
  transition-timing-function: linear;
  transition-duration: 0.5s;
}

/* Liked + Liked-active */
.liked {
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  background-image: url("../../assets/Icons/like-icon-white.svg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 50px;
  height: 50px;
  background-size: 30px 30px;
}
.liked-swiped {
  border-radius: 100%;
  background-color: rgba(122, 168, 108, 1);
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
  background-color: rgba(0, 0, 0, 0.2);
  background-image: url("../../assets/Icons/dislike-icon-white.svg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 50px;
  height: 50px;
  background-size: 30px 30px;
}
.disliked-swiped {
  border-radius: 100%;
  background-color: rgba(214, 80, 80, 1);
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
  background-color: rgba(0, 0, 0, 0.2);
  background-image: url("../../assets/Icons/love-icon-white.svg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 50px;
  height: 50px;
  background-size: 30px 30px;
}
.loved-swiped {
  border-radius: 100%;
  background-color:rgba(115, 82, 255, 1);
  background-image: url("../../assets/Icons/love-icon-white.svg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 50px;
  height: 50px;
  background-size: 30px 30px;
}

/* Haven't Seen + Haven't Seen active */
.haventSeen {
  border-radius: 28px;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  width: 120px;
  height: 30px;
  background-size: 30px 30px;
}
.haventSeen p {
  text-align: center;
}
.haventSeen-swiped {
  border-radius: 28px;
  background-color: rgba(88, 90, 101, 1);
  width: 120px;
  height: 30px;
  background-size: 30px 30px;
}
</style>
