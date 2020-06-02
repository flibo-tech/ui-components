<template>
  <nav>
    <h1 @click="store.component = null">Home</h1>
    <br />
    <hr />
    <h1>ATOMICS</h1>
    <h4 class="nav-item" @click="store.component = 'start'">
      Start Rating
    </h4>
    <h4 class="nav-item" @click="store.component = 'progressBar'">
      Progress Bar
    </h4>
    <h4 class="nav-item" @click="store.component = 'liked'">
      Like Button
    </h4>
    <h4 class="nav-item" @click="store.component = 'loved'">
      Love Button
    </h4>
    <h4 class="nav-item" @click="store.component = 'disliked'">
      Dislike Button
    </h4>
    <h4 class="nav-item" @click="store.component = 'back'">
      Back Button
    </h4>
    <h4 class="nav-item" @click="store.component = 'notSeen'">
      Haven't Seen
    </h4>
    <h4 class="nav-item" @click="store.component = 'flibo'">
      FLIBO
    </h4>
    <br />
    <hr />
    <h1>MOLECUES</h1>
    <h4 class="nav-item" @click="store.component = 'Card'">
      Card
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
  text-align: center;
  border-right: 2px solid rgb(235, 142, 75);
  margin-right: 20px;
  padding: 3%;
}

.nav-item {
  padding: 5px 5px;
  margin: 5px;
  height: 25px;
  border: none;
  border-radius: 10px;
  background-color: rgb(240, 158, 158);
  color: rgb(73, 55, 55);
}

h4:hover {
  background-color: grey;
  color: beige;
}
</style>
