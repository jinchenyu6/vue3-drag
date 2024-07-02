<template>
  <Vue3DraggableResizable
    :initW="initW"
    :initH="initH"
    v-model:x="x"
    v-model:y="y"
    v-model:w="w"
    v-model:h="h"
    v-model:active="active"
    :draggable="true"
    :resizable="true"
    :parent="true"
    :lockAspectRatio="true"
    :handles="['tl', 'tr', 'bl', 'br']"
    class="draggable-item"
    classNameActive="active"
  >
    <slot></slot>
    <div class="title-wrapper">
      <slot name="title"></slot>
    </div>
  </Vue3DraggableResizable>
</template>
<script setup>
import Vue3DraggableResizable from "vue3-draggable-resizable";
import "vue3-draggable-resizable/dist/Vue3DraggableResizable.css";
import { ref } from "vue";
let props = defineProps({
  initW: {
    type: Number,
    default: 100,
  },
  initH: {
    type: Number,
    default: 100,
  },
  initX: {
    type: Number,
    default: 10,
  },
  initY: {
    type: Number,
    default: 10,
  },
  draggable: {
    type: Boolean,
    default: true,
  },
  resizable: {
    type: Boolean,
    default: true,
  },
  minW: {
    type: Number,
    default: 100,
  },
  minH: {
    type: Number,
    default: 100,
  },
  active: {
    type: Boolean,
    default: false,
  },
});
let x = ref(props.initX);
let y = ref(props.initY);
let w = ref(props.initW);
let h = ref(props.initH);
let active = ref(false);
</script>
<style lang="scss" scoped>
.draggable-item {
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .title-wrapper {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
}
.active {
  border: 1px solid blue;
}
</style>