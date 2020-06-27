<template>
  <div class="container">
    <Logo class="first" logoColor="light" :height="100" />
    <Logo class="second" logoColor="dark" :height="100" />
    <Logo class="third" logoColor="light" :height="70" />
    <Logo class="four" logoColor="dark" :height="70" />
    <Logo class="five" logoColor="light" :height="30" />
    <Logo class="six" logoColor="dark" :height="30" />
    <div class="seven">
      <h3>Props/Events</h3>
      <pre>
1. iconColor - dark / light
2. height - > 0 (prop input will be converted into px)
              </pre>
    </div>
  </div>
</template>

<script>
import Logo from "../atomic/Logo";
export default {
  name: "LogoTestPreview",
  components: {
    Logo
  }
};
</script>

<style scoped>
.container {
  display: grid;
  grid-gap: 50px;
  justify-items: center;
}

.first {
  grid-column-start: 1;
  grid-column-end: 3;
}

.second {
  grid-column-start: 4;
  grid-column-end: 6;
}

.third {
  grid-row: 2;
  grid-column-start: 1;
  grid-column-end: 3;
}

.four {
  grid-row: 2;
  grid-column-start: 4;
  grid-column-end: 6;
}

.five {
  grid-row: 3;
  grid-column-start: 1;
  grid-column-end: 3;
}

.six {
  grid-row: 3;
  grid-column-start: 4;
  grid-column-end: 6;
}

.seven {
  grid-row: 4;
  justify-self: left;
  grid-column-start: 1;
  grid-column-end: 6;
}
</style>