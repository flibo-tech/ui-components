<template>
  <Progress :status="true" />
</template>

<script>
import Progress from '../atomic/Progress'

export default {
  name: "ProgressTest",
  components: {
    Progress
  }
}
</script>