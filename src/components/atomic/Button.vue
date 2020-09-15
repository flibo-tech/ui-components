<template>
  <button
    :class="checkType"
    @click="$emit('clicked')"
    :disabled="disabled"
    :style="iconCircle ? { 'background-color': '#7352ff', 'width': size*2 + 'px', 'height': size*2 + 'px' } : {}"
  >
    <p v-if="buttonType != 'iconOnly'">{{ text }}</p>
    <img v-if="buttonType === 'iconOnly'" :src="imageURL" :style="{ width: size + 'px' }" />
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
    },
    state: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number,
      required: false,
      default: 18
    },
    iconCircle: {
      type: Boolean,
      required: false,
      default: false
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

    imageURL() {
      if (this.state) {
        return require("../../assets/icons/" + this.icon + "_true" + ".svg");
      }
      return require("../../assets/icons/" + this.icon + ".svg");
    }
  }
};
</script>

<style lang="scss" scoped>
$border-radius: 5px;
$primary-color: #7352ff;
$textOnly-color: #adadad;

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
  // transition-property: background-color;
  // transition-timing-function: ease-out;
  // transition-duration: 0.5s;
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
  padding: 1em;
  font-size: 13px;
  color: $textOnly-color;
  cursor: pointer;
  // transition-property: color;
  // transition-timing-function: ease-out;
  // transition-duration: 0.5s;
}
.textOnly:disabled {
  cursor: inherit;
  color: rgb(54, 54, 54);
}

.iconOnly {
  background-color: transparent;
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

button:focus {
  outline: none;
}
</style>
