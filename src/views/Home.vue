<template>
  <div>
    <div v-if="store.component == null">
      This website contains all the components (atomic &amp; molecular) used in
      FLIBO.
    </div>
    <Button v-if="store.component == 'Button'" />
    <TwoButtons v-if="store.component == 'TwoButtons'" />
  </div>
</template>

<script>
import Button from "./../components/atomic/Button";
import TwoButtons from "./../components/molecular/TwoButtons";

export default {
  name: "Home",
  components: { Button, TwoButtons },
  data() {
    return {
      store: this.$store.state
    };
  }
};
</script>
