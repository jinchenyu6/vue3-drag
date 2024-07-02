<template>
  <DraggableItem v-bind="$attrs">
    <template #default>
      <input type="text" placeholder="请输入......" />
    </template>
    <template #title>
      <span>输入框</span>
    </template>
  </DraggableItem>
</template>

<script setup>
import DraggableItem from "@/components/draggableComponents/draggableItem.vue";
defineOptions({
  inheritAttrs: false,
});
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  height: 50%;
  display: block;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid black;
}
</style>