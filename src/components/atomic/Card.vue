<template>
  <div class="card">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="220"
      viewBox="0 0 220 150"
    ></svg>
  </div>
</template>

<script>
export default {};
</script>

<style>
.card {
  width: 150px;
  height: 220px;
  background-color: #777;
  border-radius: 7px;
}

.card :hover {
  border-radius: 7px;
  animation-name: tilt;
  animation-duration: 5s;
  animation-iteration-count: 10;
}
@keyframes tilt {
  0% {
    opacity: 0.75;
  }
  12.5% {
    background-color: #bbb;
    transform: rotateZ(10deg) translate(50px, 0px);
    opacity: 0.9;
  }
  25% {
    background-color: #777;
    transform: translate(0px, 0px);
    opacity: 0.75;
  }
  37.5% {
    background-color: #bbb;
    transform: translate(0px, -50px);
    opacity: 0.9;
  }
  50% {
    background-color: #777;
    transform: translate(0px, 0px);
    opacity: 0.75
  }
  62.5% {
    background-color: #bbb;
    transform: rotateZ(-10deg) translate(-50px, 0px);
    opacity: 0.9;
  }
  75% {
    background-color: #777;
    transform: translate(0px, 0px);
    opacity: 0.75
  }
  87.5% {
    background-color: #bbb;
    transform: translate(0px, 50px);
    opacity: 0.9;
  }
  100% {
    background-color: #777;
    transform: translate(0px, 0px);
    opacity: 0.75
  }
}
</style>
