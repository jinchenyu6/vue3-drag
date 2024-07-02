<template>
  <div class="sidebar-wrapper">
    <div class="title">组件区</div>
    <div class="sidebar">
      <Box
        v-for="item in boxesArr1"
        :id="item.id"
        :key="item.id"
        :dType="item.dType"
      >
        <template #default>
          <div class="icon-wrapper">
            <component :is="item.icon"></component>
          </div>
        </template>
        <template #title>
          {{ item.title }}
        </template>
      </Box>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { Search, Picture } from "@element-plus/icons-vue";
import Box from "./box.vue";
const boxesArr1 = [
  {
    type: "Box",
    dType: "DInput",
    icon: Search,
    id: "1",
    title: "输入框",
  },
  {
    type: "Box",
    dType: "DBox",
    icon: Picture,
    id: "2",
    title: "普通盒子",
  },
];
</script>
<style lang="scss" scoped>
.sidebar-wrapper {
  width: 120px;
  height: 600px;
  border: 1px solid gainsboro;
  .title {
    width: 100%;
    height: 60px;
    text-align: center;
    line-height: 60px;
  }
  .sidebar {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon-wrapper {
      width: 40px;
      height: 40px;
    }
  }
}
</style>