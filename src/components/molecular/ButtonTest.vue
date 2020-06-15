<template>
      <Button 
      :text="text"
      :icon="icon"
      :buttonType="buttonType"
      :loading="loading"
      :disabled="disabled"
      v-on:clicked="buttonClicked"
      />
</template>

<script>
import Button from '../atomic/Button'
export default {
      components: {
            Button,
      },

      data() {
            return {
                  text: "Let's Discover",
                  icon: "",
                  buttonType: "primary",
                  loading: true,
                  disabled: false,   
            }
      },

      methods: {
            buttonClicked() {
                  alert('Button Clicked')
            }
      }
}
</script>