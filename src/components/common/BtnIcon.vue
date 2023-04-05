<template>
    <div
         class="p-1 w-7 text-sm bg-gray-200 hover:bg-gray-300 active:bg-gray-400 cursor-pointer border text-gray-500 rounded flex items-center justify-center">
        <Icon :name="icon"
              :size="16"
              :stroke-width="2"
              class="stroke-gray-800"></Icon>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import Icon from './Icon.vue'
export default defineComponent({
    name: 'BtnIcon',
    props: {
        icon: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true,
            default: "light"
        }
    },
    components: {
        Icon
    }
})
</script>