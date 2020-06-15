<template>
  <button 
    :class="[checkType(buttonType), checkIcon(icon), checkDisabled(buttonType, disabled)]"
    :disabled="disabled"
    @click="$emit('clicked'); buttonClicked();"
  >
    <p v-if="!icon && buttonType != 'iconOnly' && !buttonClickedBool">{{ buttonText }}</p>
    <div v-if="buttonClickedBool && loading" class="loader"> </div>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    buttonType: {
      type: String,
      required: true,
      default: "primary"
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      buttonClickedBool: false,
      buttonText: ""
    }
  },

  methods: {
    checkType(buttonType) {
      this.buttonText = this.text;
      let buttonClass = "";
      if (buttonType === "primary") {
        buttonClass = "primary";
        this.buttonText = this.text.toUpperCase();
      } else if (buttonType === "secondary") {
        buttonClass = "secondary";
      } else if (buttonType === "textOnly") {
        buttonClass = "textOnly";
      } else if (buttonType === "iconOnly") {
        buttonClass = "iconOnly";
      }
      return buttonClass;
    },

    buttonClicked() {
      if(this.loading) {
      this.buttonClickedBool = true;
      }
    },

    checkIcon(icon) {
      let iconClass = "";
      switch (icon) {
        case 'like':
          iconClass = "like";
          return iconClass;
        case 'dislike':
          iconClass = "dislike";
          return iconClass;
        default:
          iconClass = '';
      }
    },

    checkDisabled(buttonType, disabled) {
      let disabledClass = '';
      if (buttonType === 'primary' && disabled) {
        disabledClass = 'primaryDisabled'
      }
      else if (buttonType === 'secondary' && disabled) {
        disabledClass = 'secondaryDisabled'
      }
      else if (buttonType === 'textOnly' && disabled) {
        disabledClass = 'textOnlyDisabled'
      }
      else if (buttonType === 'iconOnly' && disabled) {
        disabledClass = 'iconOnlyDisabled'
      }
      return disabledClass;
    }
  }
};
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
.primaryDisabled {
  cursor: auto;
  background-color: grey;
}

.secondary {
  border: 2px solid rgb(31, 18, 105);
  border-radius: 15px;
  width: 300px;
  height: 40px;
  background-color: rgb(105, 190, 216);
  color: blueviolet;
  cursor: pointer;
}
.secondaryDisabled {
  cursor: auto;
  color: white;
  border-color: rgb(36, 36, 36);
  background-color: grey;
}

.textOnly {
  border: none;
  color: blueviolet;
  cursor: pointer;
}
.textOnlyDisabled {
  cursor: auto;
  color: grey;
}

.iconOnly {
  border: none;
  width: 25px;
  height: 25px;
  cursor: pointer;
}
.iconOnlyDisabled {
  cursor: auto;
}

.like {
  background-position: center;
  background-size: 25px;
  background-repeat: no-repeat;
  background-image: url("../../assets/Icons/like-icon-white.svg");
}

.dislike {
  background-position: center;
  background-size: 25px;
  background-repeat: no-repeat;
  background-image: url("../../assets/Icons/dislike-icon-white.svg");
}

.loader {
  margin: auto;
  border: 3px solid #ffffff;
  border-top: 3px solid #000000; 
  border-radius: 50%;
  width: 15px;
  height: 15px;
  animation: spin 2s linear infinite;
}

button:focus {
  outline: none;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>