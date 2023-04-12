<template>
    <div class='block bg-white border border-neutral-200 rounded w-full'>
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'CommonPanel',
    props: {
        classes: {
            type: String
        }
    },
    components: {
    }
})
</script>