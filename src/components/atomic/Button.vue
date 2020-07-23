<template>
  <button
    :class="[checkType, checkIcon]"
    @click="$emit('clicked'), buttonClicked($event)"
    id="btn"
  >
    <p v-if="!icon && buttonType != 'iconOnly'">{{ buttonText }}</p>
  </button>
</template>

<script>
export default {
  name: "Button",
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
      buttonText: this.text,
      buttons: document.getElementsByTagName("BUTTON")
    };
  },

  methods: {
    buttonClicked(event) {
    if (this.buttonType === 'primary') {
      let x = event.layerX;
      let y = event.layerY;
      let ripples = document.createElement("span");
      ripples.style.left = x + "px";
      ripples.style.top = y + "px";
      document.getElementById("btn").appendChild(ripples);

      setTimeout(() => {
        ripples.remove()
      }, 1000)
    }
    }
  },

  computed: {
    checkType() {
      let buttonClass = "";
      if (this.buttonType === "primary") {
        buttonClass = "primary";
        this.buttonText.toUpperCase();
      } else if (this.buttonType === "textOnly") {
        buttonClass = "textOnly";
      } else if (this.buttonType === "iconOnly") {
        buttonClass = "iconOnly";
      }
      return buttonClass;
    },
    checkIcon() {
      let iconClass = "";
      switch (this.icon) {
        case "back":
          iconClass = "back";
          return iconClass;
        default:
          iconClass = "";
      }
      return iconClass;
    }
  }
};
</script>

<style lang="scss" scoped>
$border-radius: 5px;
$primary-color: #7352ff;
$textOnly-color: #adadad;

button {
  position: relative;
  font-family: "Roboto", sans-serif;
  overflow: hidden;
  font-weight: medium;
}
button ::v-deep span {
  position: absolute;
  background: white;
  transform: translate(-50%, -50%);
  pointer-events: none;
  border-radius: 50%;
  opacity: 0.5;
  animation: animate 1s linear infinite;
}

@keyframes animate {
  0% {
    width: 0;
    height: 0;
    opacity: 0.5;
  }
  100% {
    width: 100vh;
    height: 100vh;
    opacity: 0;
  }
}

.primary {
  border: none;
  border-radius: $border-radius;
  width: 100%;
  height: 48px;
  color: white;
  font-size: 14px;
  min-width: 100px;
  background-color: $primary-color;
  cursor: pointer;
  text-transform: uppercase;
  transition-property: background-color;
  transition-timing-function: ease-out;
  transition-duration: 0.5s;
}

.textOnly {
  border: none;
  background-color: Transparent;
  font-size: 13px;
  color: $textOnly-color;
  cursor: pointer;
  transition-property: color;
  transition-timing-function: ease-out;
  transition-duration: 0.5s;
}
.textOnly:active {
  color: white;
}

.iconOnly {
  border: none;
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.back {
  background-position: center;
  background-size: 16px;
  background-repeat: no-repeat;
  background-color: transparent;
  background-image: url("../../assets/icons/back.svg");
}

button:focus {
  outline: none;
}
</style>