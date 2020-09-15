<template>
  <div>
    <li style="color:white">
      :limit="500" :count="450" :radius="10" :width="3"
    </li>
    <CharacterCounter :limit="500" :count="450" :radius="10" :width="3" />
    <li style="color:white">
      :limit="500" :count="300" :radius="50" :width="10"
    </li>
    <CharacterCounter :limit="500" :count="300" :radius="50" :width="10" />
  </div>
</template>

<script>
import CharacterCounter from "../atomic/CharacterCounter";

export default {
  name: "CharacterCounterTest",
  components: {
    CharacterCounter
  }
};
</script>
