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

      <Button 
      :text="text"
      :icon="icon"
      :buttonType="buttonType"
      :disabled="true"
      :loading="loading"
      v-on:clicked="buttonClicked"
      />
      <Button 
      :text="text"
      :icon="icon"
      buttonType="primary"
      :disabled="false"
      :loading="false"
      v-on:clicked="buttonClicked"
      />
      <Button 
      :text="text"
      icon="back"
      buttonType="iconOnly"
      :disabled="false"
      :loading="loading"
      v-on:clicked="buttonClicked"
      />
      <Button 
      :text="text"
      icon="star"
      :state = false
      buttonType="iconOnly"
      :disabled="false"
      :loading="loading"
      v-on:clicked="buttonClicked"
      />

      <Button 
      :text="text"
      icon="star"
      :state = true
      buttonType="iconOnly"
      :disabled="false"
      :loading="loading"
      v-on:clicked="buttonClicked"
      />
</div>
</template>

<script>
import Button from '../atomic/Button'
// import ButtonExperimental from '../atomic/ButtonExperimental'
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