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
                  text: "Start Rating",
                  icon: "",
                  buttonType: "textOnly",
                  loading: false,
                  disabled: false,   
            }
      },

      methods: {
            buttonClicked() {
                  console.log('Button Clicked')
            }
      }
}
</script>