<template>
<div>
      <Button 
      :text="text"
      :icon="icon"
      :buttonType="buttonType"
      :disabled="disabled"
      :loading="loading"
      v-on:clicked="buttonClicked"
      />

      <ButtonExperimental
      :text="text"
      :icon="icon"
      :buttonType="buttonType"
      :buttonDisabled="true"
      :loading="loading"
      @clicked="buttonClicked"
      />
</div>
</template>

<script>
import Button from '../atomic/Button'
import ButtonExperimental from '../atomic/ButtonExperimental'
export default {
      components: {
            Button, ButtonExperimental
      },

      data() {
            return {
                  text: "Start Rating",
                  icon: "",
                  buttonType: "primary",
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