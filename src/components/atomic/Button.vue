<template>
  <button
  :class="checkType(buttonType)"
  > {{ text }} </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: null
    },
    // icon: {
    //   type: 
    // },
    buttonType: {
      type: String,
      required: true,
      default: 'primary'
    },
    loading: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    checkType(buttonType) {
      let buttonClass = ''
      if (buttonType === 'primary') {
        buttonClass = 'primary'
        this.text = this.text.toUpperCase()
      }
      else if(buttonType === 'secondary') {
        buttonClass = 'secondary'
      }
      else if (buttonType === 'textOnly') {
        buttonClass = 'textOnly'
      }
      else if (buttonType === 'iconOnly') {
        buttonClass = 'iconOnly'
      }
      return buttonClass;
    }
  }
}
</script>

<style scoped>
  .primary {
    border: none;
    border-radius: 15px;
    width: 300px;
    height: 40px;
    color: white;
    background-color: blueviolet;
    cursor: pointer;
  }

  .secondary {
    border: 2px solid blueviolet;
    border-radius: 15px;
    width: 300px;
    height: 40px;
    color: blueviolet;
    cursor: pointer;
  }

  .textOnly {
    border: none;
    color: blueviolet;
    cursor: pointer;
  }
</style>