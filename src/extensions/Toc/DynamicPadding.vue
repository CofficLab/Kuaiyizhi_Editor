<template>
  <span :style="'margin-left:' + count + 'ch'"></span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    count: {
      type: Number,
      required: true
    }
  }
})
</script>
