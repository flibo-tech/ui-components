<template>
  <div>
    <PlaceholderExample />
    <CirclePlaceholder :width=200 :height=200 />
    <RectanglePlaceholder :width=500 :height=250 />
    <PlaceholderTemplate />
  </div> 
</template>

<script>
import PlaceholderExample from "../atomic/placeholders/PlaceholderExample";
import CirclePlaceholder from "../atomic/placeholders/CirclePlaceholder";
import RectanglePlaceholder from "../atomic/placeholders/RectanglePlaceholder";
import PlaceholderTemplate from "../atomic/placeholders/PlaceholderTemplate";

export default {
  name: "PlaceholderTest",
  components: {
    PlaceholderExample,
    CirclePlaceholder,
    RectanglePlaceholder,
    PlaceholderTemplate
  }
}    
</script>