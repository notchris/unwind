<template>
    <div
         class="px-1.5 py-1.5 rounded border hover:bg-gray-100 active:bg-gray-200 cursor-pointer text-gray-700  flex items-center justify-center">
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
        }
    },
    components: {
        Icon
    }
})
</script>