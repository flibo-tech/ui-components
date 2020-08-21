<template>
<div>
      <Button 
      text="Start Rating"
      buttonType="primary"
      :disabled=false
      v-on:clicked="buttonClicked"
      />

      <Button 
      text="Text Only"
      buttonType="textOnly"
      :disabled=false
      v-on:clicked="buttonClicked"
      />

      <Button 
      icon="thumbs_up"
      buttonType="iconOnly"
      v-on:clicked="buttonClicked"
      :size="30"
      :state="state"
      />

      <Button 
      icon="back"
      buttonType="iconOnly"
      v-on:clicked="buttonClicked"
      />

      <!-- <Button 
      :text="text"
      icon="back"
      buttonType="iconOnly"
      :disabled="false"
      :loading="loading"
      v-on:clicked="buttonClicked"
      /> -->
      <!-- <Button 
      :text="text"
      icon="star"
      :state = false
      buttonType="iconOnly"
      :disabled="false"
      :loading="loading"
      v-on:clicked="buttonClicked"
      /> -->

      <!-- <Button 
      :text="text"
      icon="star"
      :state = true
      buttonType="iconOnly"
      :disabled="false"
      :loading="loading"
      v-on:clicked="buttonClicked"
      /> -->
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
                  state: false
            }
      },

      methods: {
            buttonClicked() {
                  this.state = !this.state;
                  console.log('Button Clicked')
            }
      }
}
</script>