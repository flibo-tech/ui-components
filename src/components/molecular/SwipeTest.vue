<template>
      <div>
            <RatingLabel 
                  :rating="randomRating"
                  :active="randomStatus"
                  
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
                  randomStatus: null,
            }
      },

      mounted() {
// For preview purpose. Rating and Status are being randomize
                  this.randomRating = this.rating[Math.floor(Math.random()* 4)]
                  this.randomStatus = Math.random() >= 0.5;
      },

      computed: mapState(['rating'])

      
}
</script>