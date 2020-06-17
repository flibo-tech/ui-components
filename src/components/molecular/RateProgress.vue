<template>
  <div>
    <Rate :value="value" :maxValue="maxValue" />
    <ProgressBar :value="value" :maxValue="maxValue"/>
    <h3>Props/Events</h3>
    <pre>
value - 0 to maxValue (Number)
maxValue - Number
    </pre>
  </div>
</template>

<script>
import Rate from "../atomic/Rate";
import ProgressBar from "../atomic/ProgressBar";
export default {
  name: "RateProgress",
  components: {
    Rate,
    ProgressBar,
  },

   data() {
      return {
        value: 20,
        maxValue: 25,
      }
    },
};
</script>