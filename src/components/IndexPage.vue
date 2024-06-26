<template>
  <div class="flex flex-col h-full w-full relative overflow-scroll" id="index">
    <!-- 操作栏 -->
    <ToolBar></ToolBar>

    <!-- loading -->
    <div v-if="appStore.loading" class="flex justify-center items-center h-full">
      <Loading></Loading>
    </div>

    <div v-else class="flex flex-col">
      <!-- 图书简介 -->
      <BookIntro :node="node" />

      <!-- 编辑器 -->
      <TiptapEditor
        v-if="featureStore.editorVisible"
        :content="node.content"
        :editable="featureStore.editable"
        :tableEnable="featureStore.tableEnabled"
        :drawEnable="featureStore.drawEnabled"
        :bubbleMenusEnable="featureStore.bubbleMenuVisible"
        :floatingMenusEnable="featureStore.floatingMenuVisible"
        :onUpdate="appStore.updateNode"
        :onSelectionUpdate="appStore.updateSelectionType"
        :uuid="node.uuid"
      />

      <!-- 子节点 -->
      <div
        class="container mx-auto px-4 pt-4 pb-24 flex mt-24 justify-center dark:border-gray-700/30"
        :class="{ 'border-t': shouldShowBorder }"
        v-if="node.children.length > 0"
      >
        <NodeCardList :nodes="node.children"></NodeCardList>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TiptapEditor from './TiptapEditor.vue'
import NodeCardList from './NodeCardList.vue'
import { computed, nextTick, onMounted, watch } from 'vue'
import Loading from '../components/Loading.vue'
import { useAppStore } from '../stores/AppStore'
import BookIntro from './BookIntro.vue'
import { useFeatureStore } from '../stores/FeatureStore'
import ToolBar from './ToolBar.vue'

const appStore = useAppStore()
const featureStore = useFeatureStore()

const node = computed(() => {
  return appStore.node
})

const featureUpdatedAt = computed(() => {
  return featureStore.nonce
})

// 是否显示编辑器和子节点之间的横线
const shouldShowBorder = computed(() => {
  return featureStore.editorVisible && node.value.children.length > 0
})

watch(featureUpdatedAt, () => {
  if (!featureStore.editorVisible) {
    return
  }

  console.log(
    'IndexPage: feature变了，重新加载Tiptap，featureUpdatedAt ->' + featureUpdatedAt.value
  )

  featureStore.hideEditor()
  nextTick(() => {
    featureStore.showEditor()
  })
})
</script>
