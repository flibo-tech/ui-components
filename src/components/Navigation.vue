<template>
  <nav>
    <h1 @click="store.component = null">List of Atoms</h1>
    <ul style="text-align: left;">
      <li>Button</li>
      <li>ProgressBar</li>
      <li>Rate</li>
      <li>RatingLabel</li>
      <li>Logo</li>
    </ul>
    <br />
    <h1>Atoms</h1>
     <h4 class="nav-item" @click="store.component = 'SwipeTest'">
      Swipe Test
    </h4>
    <h4 class="nav-item" @click="store.component = 'ButtonTest'">
      Button Test
    </h4>
     <h4 class="nav-item" @click="store.component = 'RateProgress'">
      RateProgress
    </h4>
    <h4 class="nav-item" @click="store.component = 'JsonAnimation'">
      JSON Animation
    </h4>
    <h4 class="nav-item" @click="store.component = 'LogoTest'">
      Logo Test
    </h4>
    <h4 class="nav-item" @click="store.component = 'CardAnimation'">
      Card Animation
    </h4>
    
    <br />
    <h1>Molecules</h1>
    <h4 class="nav-item" @click="store.component = 'SwipeTestPreview'">
      Swipe Preview
    </h4>
    <h4 class="nav-item" @click="store.component = 'ButtonTestPreview'">
      Button Preview
    </h4>
    <h4 class="nav-item" @click="store.component = 'LogoTestPreview'">
      Logo Preview
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