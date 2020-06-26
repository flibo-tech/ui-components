<template>
  <button 
    :class="[checkType(buttonType), checkIcon(icon)]"
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
  }
};
</script>

<style lang="scss" scoped>
$border-radius: 5px;
$primary-color: #7352ff;
$textOnly-color: #adadad;

button {
  font-family: 'Roboto', sans-serif; 
  font-weight: medium;
}
.primary {
  border: none;
  border-radius: $border-radius;
  width: 300px;
  height: 48px;
  color: white;
  font-size: 14px;
  min-width: 100px;
  background-color: $primary-color;
  cursor: pointer;
  transition-property: background-color;
  transition-timing-function:ease-out;
  transition-duration: 0.5s;
}
.primary:active {
  background-color: #3c20b8;
}
.primary:disabled {
  cursor: auto;
  background-color: grey;
}

.secondary {
  font-family: 'Roboto', sans-serif; 
  font-weight: medium;
  border: 2px solid $primary-color;
  border-radius: $border-radius;
  font-size: 14px;
  min-width: 100px;
  width: 300px;
  height: 48px;
  color: $primary-color;
  cursor: pointer;
}
.secondary:disabled {
  cursor: auto;
  color: white;
  border-color: rgb(36, 36, 36);
  background-color: grey;
}

.textOnly {
  border: none;
  background-color: Transparent;
  font-size: 13px;
  color: $textOnly-color;
  cursor: pointer;
  transition-property: color;
  transition-timing-function:ease-out;
  transition-duration: 0.5s;
}
.textOnly:active {
  color: white;
}
.textOnly:disabled {
  cursor: auto;
  color: grey;
}

.iconOnly {
  border: none;
  width: 25px;
  height: 25px;
  cursor: pointer;
}
.iconOnly:disabled {
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