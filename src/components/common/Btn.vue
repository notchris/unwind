<template>
    <div
         class="flex items-center justify-center px-3 py-1  text-sm bg-gray-600 hover:bg-gray-500 active:bg-gray-700 cursor-pointer border text-gray-50 rounded">
        <slot></slot>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Btn',
    components: {
    }
})
</script>