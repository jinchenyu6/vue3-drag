<template>
  <div :ref="drop" class="container" id="container">
    <DraggableContainer>
      <component
        v-for="item in store.draggableItemsList"
        :key="item.id"
        :is="item.type"
        v-bind="item.initOptions"
      ></component>
    </DraggableContainer>
  </div>
</template>

<script>
import Box from "./box.vue";
import DBox from "../draggableComponents/draggableBox.vue";
import DInput from "../draggableComponents/draggableInput.vue";

import { useDrop } from "vue3-dnd";

import { DraggableContainer } from "vue3-draggable-resizable";
import "vue3-draggable-resizable/dist/Vue3DraggableResizable.css";

import { onMounted } from "vue";

import { useDraggableItemsStore } from "@/store/draggableItems.js";
import { getTargetRect } from "@/utils/getTargetRect.js";
import { calcCoordinate } from "@/utils/calcCoordinate.js";
export default {
  components: { Box, DBox, DInput, DraggableContainer },
  setup(props) {
    let containerRect = [];
    onMounted(() => {
      containerRect = getTargetRect("container");
    });

    const store = useDraggableItemsStore();

    const [, drop] = useDrop(() => ({
      accept: "box",
      drop(item, monitor) {
        console.log("item", item);
        const initialSourceClientOffset =
          monitor.getInitialSourceClientOffset();
        const difference = monitor.getDifferenceFromInitialOffset();
        const coordinate = calcCoordinate(containerRect, [
          initialSourceClientOffset.x + difference.x,
          initialSourceClientOffset.y + difference.y,
        ]);
        console.log(coordinate);
        store.addItem(coordinate, item.dType);
        return undefined;
      },
    }));
    return {
      store,
      drop,
    };
  },
};
</script>
<style scoped lang="scss">
.container {
  position: relative;
  width: 600px;
  height: 600px;
  border: 1px solid black;
}
</style>