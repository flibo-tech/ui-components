<template>
  <button class="btn" :class="{ 'btn-back': back }" @click="myAction()">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="15"
      viewBox="0 0 492 492"
    >
      <path
        d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12
			C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084
			c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864
			l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"
      />
    </svg>
  </button>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["back"])
  },
  methods: {
    ...mapMutations(["myAction"])
  }
};
</script>

<style scoped>
svg {
  fill: rgb(172, 172, 172);
}
.btn {
  padding: 5px 5px;
  border-radius: 50%;
  background-color: rgba(107, 107, 107, 0.1);
  border: none;
}

.btn-back {
  animation-name: back-btn;
  animation-duration: 0.75s;
}

@keyframes back-btn {
  from {
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    background-color: black;
    transform: rotate(-180deg);
    opacity: 0;
  }
}
</style>
