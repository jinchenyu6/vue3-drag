<template>
  <DndProvider :backend="HTML5Backend">
    <div class="wrapper">
      <Siderbar></Siderbar>
      <Container></Container>
    </div>
  </DndProvider>
</template>
<script setup>
import { DndProvider } from "vue3-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Container from "@/components/dndComponents/container.vue";
import Siderbar from "@/components/dndComponents/sidebar.vue";
</script>
<style lang="scss" scoped>
.wrapper {
  width: 1000px;
  height: 600px;
  display: flex;
}
</style>