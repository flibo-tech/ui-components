<template>
  <button class="fb">
    <div class="grid-container">
      <div class="item1">
        <img src="./../../assets/facebook.png" alt="img" />
      </div>
      <div class="item2">Sign in with Facebook</div>
    </div>
  </button>
</template>

<script>
export default {
  name: "FacebookButton"
};
</script>

<style scoped>
img {
  width: 20px;
  height: 20px;
}
.fb {
  margin: none;
  text-align: center;
  width: 320px;
  height: 48px;
  border: none;
  border-radius: 10px;
  background-color: #4267b2;
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
  font-size: 16px;
}

.grid-container {
  margin: none;
  display: grid;
  grid-template-columns: 70px 170px;
  grid-gap: 1px;
}

.item1 {
  margin-top: 3px;
}
</style>
