import { defineStore } from "pinia"
import { v4 as uuidv4 } from "uuid"
import { TYPE_INIT_INFO_MAP } from "@/config"

export const useDraggableItemsStore = defineStore('draggableItems', {
    state: () => ({
        draggableItemsList: []
    }),
    getters: {
        getItemId: (index) => {
            return draggableItemsList[index].id
        }
    },
    actions: {
        addItem(location, type) {
            const { x, y } = location
            const { initW, initH } = TYPE_INIT_INFO_MAP.get(type)
            let item = {
                id: uuidv4(),
                type,
                initOptions: {
                    initX: x,
                    initY: y,
                    initH,
                    initW,
                }
            }
            this.draggableItemsList.push(item)
        },
    },
})
