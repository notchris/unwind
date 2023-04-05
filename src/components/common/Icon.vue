<template>
    <component :class="class"
               :is="icon"
               :size="size"
               :color="color"
               :stroke-width="strokeWidth"
               :default-class="defaultClass" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import * as icons from "lucide-vue-next"
export default defineComponent({
    name: 'Icon',
    props: {
        name: {
            type: String,
            required: true
        },
        size: Number,
        color: String,
        strokeWidth: Number,
        defaultClass: String,
        class: String
    },
    computed: {
        icon() {
            // @ts-ignore
            return icons[this.name]
        }
    },
    components: {
    }
})
</script>