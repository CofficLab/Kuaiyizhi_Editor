<template>
  <div
    class="flex flex-row container mx-auto justify-center mt-4 sticky top-4 join z-50"
    v-if="feature.toolbarVisible"
  >
    <button class="btn btn-primary btn-xs join-item" @click="app.setCurrentNode(baseNode)">
      通用
    </button>
    <button class="btn btn-primary btn-xs join-item" @click="app.setCurrentNode(linkNode)">
      链接
    </button>
    <button class="btn btn-primary btn-xs join-item" @click="app.setCurrentNode(codeNode)">
      代码
    </button>
    <button class="btn btn-primary btn-xs join-item" @click="app.setCurrentNode(drawNode)">
      画图
    </button>
    <button class="btn btn-primary btn-xs join-item" @click="app.setCurrentNode(tableNode)">
      表格
    </button>
    <button class="btn btn-primary btn-xs join-item" @click="app.setCurrentNode(bigNode)">
      超长
    </button>
    <button class="btn btn-primary btn-xs join-item" @click="app.setCurrentNode(liteNode)">
      小型
    </button>
    <button class="btn btn-primary btn-xs join-item" @click="app.setCurrentNode(bannerNode)">
      Banner
    </button>
    <button
      class="btn btn-primary btn-xs join-item"
      @click="app.setCurrentNode(childrenNode)"
    >
      带子节点
    </button>
    <button
      class="btn btn-primary btn-xs join-item"
      @click="feature.enableEdit"
      v-if="!feature.editable"
    >
      编辑模式
    </button>
    <button
      class="btn btn-primary btn-xs join-item"
      @click="feature.disableEdit"
      v-if="feature.editable"
    >
      只读模式
    </button>
    <button
      class="btn btn-primary btn-xs join-item"
      @click="feature.enableTable"
      v-if="!feature.tableEnabled"
    >
      开启 Table
    </button>
    <button
      class="btn btn-primary btn-xs join-item"
      @click="feature.disableTable"
      v-if="feature.tableEnabled"
    >
      关闭 Table
    </button>
    <button
      class="btn btn-primary btn-xs join-item"
      @click="feature.enableDraw"
      v-if="!feature.drawEnabled"
    >
      开启 Draw
    </button>
    <button
      class="btn btn-primary btn-xs join-item"
      @click="feature.disableDraw"
      v-if="feature.drawEnabled"
    >
      关闭 Draw
    </button>
    <button
      class="btn btn-primary btn-xs join-item"
      @click="feature.showEditor"
      v-if="!feature.editorVisible"
    >
      显示 Editor
    </button>
    <button
      class="btn btn-primary btn-xs join-item"
      @click="feature.hideEditor"
      v-if="feature.editorVisible"
    >
      隐藏 Editor
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from '../stores/AppStore'
import { useFeatureStore } from '../stores/FeatureStore'
import baseNode from '../samples/BaseNode'
import linkNode from '../samples/LinkNode'
import codeNode from '../samples/CodeNode'
import drawNode from '../samples/DrawNode'
import tableNode from '../samples/TableNode'
import bigNode from '../samples/BigNode'
import liteNode from '../samples/LiteNode'
import bannerNode from '../samples/BannerNode'
import childrenNode from '../samples/ChildrenNode'

const feature = useFeatureStore()
const app = useAppStore()
</script>
