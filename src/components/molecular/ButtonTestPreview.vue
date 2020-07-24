<template>
      <div class="grid-container">
            <Button class="grid-item-1"
            text="Start Rating"
            buttonType="primary"
            v-on:clicked="buttonClicked"/>

            <Button class="grid-item-2"
            text="Start Rating"
            buttonType="primary"
            :disabled="true"
            v-on:clicked="buttonClicked"/>

            <Button class="grid-item-3"
            text="Start Rating"
            buttonType="textOnly"
            v-on:clicked="buttonClicked"/>
            

            <div class="grid-item-7">
            <h3>Props/Events</h3>
              <pre>
1. text - Start Rating / Let's Discover / Skip Rating / null
2. icon - back.svg
3. buttonType - primary / secondary / textOnly / iconOnly
4. loading - true / false
5. disabled - true / false
6. $emit('clicked')
              </pre>
            </div>
      </div>
</template>

<script>
import Button from '../atomic/Button'

export default {
      components: {
            Button,
      },

      methods: {
        buttonClicked() {
          console.log("Clicked")
        }
      }

}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-gap: 50px;
}
.grid-item-1 {
  grid-column: 1/3;
}

.grid-item-2 {
  grid-column: 4/6;
}

.grid-item-3 {
  grid-column: 1/3;
  grid-row: 2;
}
.grid-item-7 {
  grid-column: 1/6;
  grid-row: 3;
}
</style>