<script setup>
import { useDrag } from "vue3-dnd";
import { onMounted, toRefs } from "vue";

const props = defineProps({
  id: String,
  dType: String,
});

const [collect, drag] = useDrag(() => ({
  type: "box",
  item: { id: props.id, dType: props.dType },
  collect: (monitor) => ({
    isDragging: monitor.isDragging(),
  }),
}));
// const { isDragging } = toRefs(collect);
</script>

<template>
  <div :ref="drag" class="box" id="box">
    <slot></slot>
    <slot name="title"></slot>
  </div>
</template>

<style lang="scss" scoped>
.box {
  width: 100px;
  height: 100px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  text-align: center;
  font-size: 18px;
  background-color: white;
  border: 1px dashed gray;
  cursor: move;
}
</style>