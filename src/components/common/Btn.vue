<template>
    <div
         class="flex items-center justify-center px-3 py-1  text-sm bg-neutral-600 hover:bg-neutral-500 active:bg-neutral-700 cursor-pointer border text-neutral-50 rounded">
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