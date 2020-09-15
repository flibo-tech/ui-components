<template>
  <div>
    <TextField type="post" :isSubmitClicked="isSubmitClicked" />
    <Button
      icon="send"
      buttonType="iconOnly"
      :iconCircle="true"
      :size="50"
      v-on:clicked="isSubmitClicked = true"
    />
  </div>
</template>

<script>
import Button from "../atomic/Button";
import TextField from "../atomic/TextField";
export default {
  name: "Post",
  components: { Button, TextField },
  data() {
    return {
      isSubmitClicked: false
    };
  }
};
</script>

<style scoped>
</style>