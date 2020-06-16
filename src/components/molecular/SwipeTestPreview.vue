<template>
  <div style="width:300px;">
    <RatingLabel :rating="rating[0]" :active="activeLiked" style="margin: auto;" />
    <RatingLabel :rating="rating[1]" :active="activeDisliked" style="float: right;" />
    <RatingLabel :rating="rating[2]" :active="activeLoved" />
    <RatingLabel :rating="rating[3]" :active="activehaventSeen" style="margin: auto;" />

    <h3>Props/Events</h3>
    <pre>
1. rating - liked / disliked / loved / haventSeen
2. active - true / false
    </pre>
  </div>
</template>

<script>
import RatingLabel from "../atomic/RatingLabel";
import { mapState } from "vuex";
export default {
  components: {
    RatingLabel
  },

  data() {
    return {
      activeLiked: false,
      activeDisliked: false,
      activeLoved: false,
      activehaventSeen: false
    };
  },

  methods: {
    changeActiveLiked() {
      let vm = this;
      setInterval(function() {
        if (vm.activeLiked) {
          vm.activeLiked = !vm.activeLiked;
          vm.activeDisliked = !vm.activeDisliked;
        } else if (vm.activeDisliked) {
          vm.activeDisliked = !vm.activeDisliked;
          vm.activehaventSeen = !vm.activehaventSeen;
        } else if (vm.activehaventSeen) {
          vm.activehaventSeen = !vm.activehaventSeen;
          vm.activeLoved = !vm.activeLoved;
        } else if (vm.activeLoved) {
          vm.activeLoved = !vm.activeLoved;
          vm.activeLiked = !vm.activeLiked;
        }
      }, 2000);
    }
  },

  mounted() {
    this.activeLiked = !this.activeLiked;
    this.changeActiveLiked();
  },

  computed: mapState(["rating"])
};
</script>
