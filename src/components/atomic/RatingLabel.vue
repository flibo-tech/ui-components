<template>
    <div 
    :class="checkRating(randomRating)"
      @click="onSubmit"
    >
      <p v-if="randomRating === 'hseen'"> Haven't Seen </p>
    </div>
    
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "RatingLabel",

  data() {
    return {
    }
  },

  methods: {
    ...mapMutations(["changeStatus"]),

    checkRating(randomRating) {
      let ratingClass = ''
      if (randomRating === 'liked') {
        ratingClass = 'liked'
      }
      else if (randomRating === 'disliked') {
        ratingClass = 'disliked'
      }
      if (randomRating === 'loved') {
        ratingClass = 'loved'
      }
      if (randomRating === 'hseen') {
        ratingClass = 'hseen'
      }
      return ratingClass;
    },

    onSubmit() {
      this.changeStatus()
    }
  },

  props: ['randomRating'],
};
</script>

<style scoped>

div p {
  color: white;
  text-align: center;
  padding-top: 0.3rem;
  font-family: Arial, Helvetica, sans-serif;
}

/* Liked Css + hover + active */
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
  transition: 0.3s;
}

.liked:hover {
  opacity: 0.5;
}

.liked:active {
  background-color:rgb(117, 226, 54);
}

/* Disliked Css + hover + active */
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
  transition: 0.3s;
}

.disliked:hover {
  opacity: 0.5;
}

.disliked:active {
  background-color:rgb(207, 70, 66);
}

/* Loved Css + hover + active */
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
  transition: 0.3s;
}

.loved:hover {
  opacity: 0.5;
}

.loved:active {
  background-color:rgb(68, 228, 214);
}

/* Haven't Seen Css + hover + active */
.hseen {
  border-radius: 15px;
  background-color: black;
  opacity: 0.2;
  width: 120px;
  height: 30px;
  background-size: 30px 30px;
  transition: 0.3s;
}

.hseen:hover {
  opacity: 0.5;
}

.hseen:active {
  background-color:rgb(82, 82, 82);
}

</style>
