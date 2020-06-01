<template>
  <button class="btn" :class="{ 'btn-loved': isLoved }" @click="myAction()">
    <img src="./../../assets/icons/love-icon-white.svg" alt="" />
  </button>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["isLoved"])
  },
  methods: {
    ...mapMutations(["myAction"])
  }
};
</script>

<style scoped>
.btn {
  padding: 10px;
  border-radius: 50%;
  border: none;
}
.btn-loved {
  animation-name: love-btn;
  animation-duration: 0.75s;
}

@keyframes love-btn {
  from {
    background-color: white;
    transform: rotate(-45deg);
  }
  to {
    background-color: rgb(80, 82, 228);
    transform: rotate(360deg);
  }
}
</style>
