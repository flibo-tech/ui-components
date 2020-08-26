<template>
  <article>
    <button
      :class="[checkType, checkIcon]"
      @click="$emit('clicked'), buttonClicked($event), (state = !state)"
      ref="btn"
      :disabled="disabled"
    >
      <p v-if="!icon && buttonType != 'iconOnly'">{{ buttonText }}</p>
    </button>
  </article>
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
    },
    state: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number,
      required: false
    }
  },

  data() {
    return {
      buttonText: this.text
    };
  },

  methods: {
    buttonClicked(event) {
      if (
        this.buttonType === "textOnly" ||
        this.buttonType === "primary" ||
        this.buttonType === "iconOnly"
      ) {
        let x = event.layerX;
        let y = event.layerY;
        let ripples = document.createElement("span");
        if (this.buttonType === "iconOnly") {
          ripples.style.left = "50%";
          ripples.style.top = "50%";
        } else {
          ripples.style.left = x + "px";
          ripples.style.top = y + "px";
        }
        this.$refs.btn.appendChild(ripples);

        setTimeout(() => {
          ripples.remove();
        }, 1000);
      }
    }
  },

  computed: {
    checkType() {
      let buttonClass = "";
      if (this.buttonType === "primary") {
        buttonClass = "primary";
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
        case "star":
          if (this.state === false) {
            console.log("Star");
            iconClass = "star";
            return iconClass;
          } else iconClass = "star-active";
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
  animation: animate 0.9s linear;
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
.primary:disabled {
  cursor: inherit;
  background-color: rgb(220, 220, 220);
  color: rgb(178, 178, 178);
}

.textOnly {
  border: none;
  border-radius: $border-radius;
  background-color: Transparent;
  font-size: 13px;
  color: $textOnly-color;
  cursor: pointer;
  transition-property: color;
  transition-timing-function: ease-out;
  transition-duration: 0.5s;
}
.textOnly:disabled {
  cursor: inherit;
  color: rgb(54, 54, 54);
}

.iconOnly {
  border: none;
  padding: 20px;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  cursor: pointer;
}
.iconOnly:disabled {
  cursor: auto;
}

.back {
  background-position: center;
  background-size: 16px;
  background-repeat: no-repeat;
  background-color: transparent;
  background-image: url("../../assets/icons/back.svg");
}

.star {
  background-position: center;
  background-size: 16px;
  background-repeat: no-repeat;
  background-color: transparent;
  background-image: url("../../assets/icons/star.svg");
}

.star-active {
  background-position: center;
  background-size: 16px;
  background-repeat: no-repeat;
  background-color: transparent;
  background-image: url("../../assets/icons/star-active.svg");
}

button:focus {
  outline: none;
}
</style>
