<template>
  <DraggableItem v-bind="$attrs">
    <template #default>
      <div class="box"></div>
    </template>
    <template #title>
      <span>普通盒子</span>
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
.box {
  width: 100%;
  height: 50%;
  background-color: gray;
}
</style>