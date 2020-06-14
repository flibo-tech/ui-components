<template>
      <Button 
      :text="text"
      :icon="icon"
      :buttonType="buttonType"
      :loading="loading"
      :disabled="disabled"
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
                  loading: false,
                  disabled: false,     
            }
      }
}
</script>