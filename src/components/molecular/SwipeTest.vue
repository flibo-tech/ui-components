<template>
      <div>
            <RatingLabel 
                  :randomRating="randomRating"
            />
      </div>
</template>

<script>
import { mapState } from 'vuex'
import RatingLabel from '../atomic/RatingLabel'

export default {
      name: 'SwipeTest',
      components: {
            RatingLabel,
      },
      data() {
            return {
                  randomRating: [],
            }
      },

      mounted() {
                  this.randomRating = this.rating[Math.floor(Math.random()* 4)] 
      },

      computed: mapState(['rating'])

      
}
</script>