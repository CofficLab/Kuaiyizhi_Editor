<template>
  <button
    class="tooltip w-10"
    data-tip="代码"
    @click="editor.chain().focus().toggleCodeBlock().run()"
    :class="{ 'is-active': editor.isActive('codeBlock') }"
  >
    <img src="../assets/code.bracket.svg" class="m-0" />
  </button>
</template>

<script lang="ts" setup>
import { Editor } from '@tiptap/vue-3'

defineProps({
  editor: {
    type: Editor,
    required: true
  }
})
</script>
