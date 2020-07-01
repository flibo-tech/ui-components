<template>
  <div class="container">
    <div class="image-container"></div>
    <div class="liked"></div>
    <div class="disliked"></div>
    <div class="loved"></div>
    <div class="haventSeen">HAVEN'T WATCHED</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  position: relative;
  width: 300px;
  height: 450px;
}
.image-container {
  width: 300px;
  height: 450px;
  margin-top: 100px;
  background-image: url("../../assets/images/poster.jpg");
  animation-name: tilt;
  animation-duration: 7s;
  animation-iteration-count: infinite;
  border-radius: 6px;
  background-size: cover;
}
@keyframes tilt {
  12.5% {
    transform: rotateZ(10deg) translate(100px, 0px);
  }
  25% {
    transform: translate(0px, 0px);
  }
  37.5% {
    transform: rotateZ(-10deg) translate(-100px, 0px);
  }
  50% {
    transform: translate(0px, 0px);
  }
  62.5% {
    transform: rotateZ(5deg) translate(0px, -100px)
  }
  75% {
    transform: translate(0px, 0px);
  }
  87.5% {
    transform: rotateZ(5deg) translate(0px, 100px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

@keyframes liked {
  12.5% {
    background-color: rgba(122, 168, 108, 1);
  }
  25% {
    background-color: rgba(0, 0, 0, 0.2);
  }
  100% {
    background-color: rgba(0, 0, 0, 0.2);
  }
}

@keyframes disliked {
  25% {
    background-color: rgba(0, 0, 0, 0.2);
  }
  37.5% {
    background-color: rgba(214, 80, 80, 1);
  }
  50% {
    background-color: rgba(0, 0, 0, 0.2);
  }
}

@keyframes loved {
  50% {
    background-color: rgba(0, 0, 0, 0.2);
  }
  62.5% {
    background-color:rgba(115, 82, 255, 1);
  }
  75% {
    background-color: rgba(0, 0, 0, 0.2);
  }
}

@keyframes haventSeen {
   75% {
    background-color: rgba(0, 0, 0, 0.2);
  }
  87.5% {
    background-color: rgba(88, 90, 101, 1);
  }
  100% {
    background-color: rgba(0, 0, 0, 0.2);
  }
}
.liked {
  animation-name: liked;
  animation-duration: 7s;
  animation-iteration-count: infinite;
  top: 50%;
  transform: translatey(-50%);
  right: -30px;
  position: absolute;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  background-image: url("../../assets/icons/like-icon-white.svg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 56px;
  height: 56px;
  background-size: 27px;
}
.disliked {
  animation-name: disliked;
  animation-duration: 7s;
  animation-iteration-count: infinite;
  left: -30px;
  top: 50%;
  transform: translatey(-50%);
  position: absolute;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  background-image: url("../../assets/icons/dislike-icon-white.svg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 56px;
  height: 56px;
  background-size: 27px;
}
.loved {
  animation-name: loved;
  animation-duration: 7s;
  animation-iteration-count: infinite;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  background-image: url("../../assets/icons/love-icon-white.svg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 56px;
  height: 56px;
  background-size: 27px;
}
.haventSeen {
  animation-name: haventSeen;
  animation-duration: 7s;
  animation-iteration-count: infinite;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 28px;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  width: 160px;
  height: 56px;
  background-size: 27px;
  color: white;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: medium;
  font-size: 13px;
}
</style>
