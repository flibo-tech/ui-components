<template>
  <Logo 
  :logoColor="logoColor"
  :height="height"
  />
</template>

<script>
import Logo from "../atomic/Logo"
export default {
  name: "LogoTest",
  components: {
    Logo
  },
  data() {
    return {
    logoColor: "light",
    height: 100,
    }
  }
}
</script>