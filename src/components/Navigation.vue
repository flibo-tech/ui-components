<template>
  <nav>
    <h1 @click="store.component = null">Home</h1>
    <br />
    <h1>Atoms</h1>
    <h4 class="nav-item" @click="store.component = 'Button'" >
      Button
    </h4>
     <h4 class="nav-item" @click="store.component = 'RatingLabel'" >
      Raing Label
    </h4>
    
    <br />
    <h1>Molecules</h1>
    <h4 @click="store.component = 'TwoButtons'">
      TwoButtons
    </h4>
    <h4 @click="store.component = 'SwipeTest'">
      Swipe Test
    </h4>
    
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      store: this.$store.state
    };
  }
};
</script>

<style scoped>
nav {
  width: 200px;
  text-align: center;
  border-right: 2px solid rgb(235, 142, 75);
  margin-right: 20px;
  padding: 3%;
}

.nav-item {
  padding: 5px 5px;
  margin: 5px;
  height: 15px;
  border: none;
  border-radius: 10px;
  background-color: rgb(124, 124, 124);
  color: rgb(252, 252, 252);
}

h4:hover {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
}
</style>