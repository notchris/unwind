<template>
    <router-link class="text-gray-50 [&:not(.router-link-active)]:hover:text-gray-300 transition-colors py-1 pl-3 pr-20 text-sm flex gap-2 items-center"
                 :to="to">
        <span>{{ label }}</span>
    </router-link>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import Icon from '../common/Icon.vue'
export default defineComponent({
    name: 'NavLink',
    props: {
        to: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        }
    },
    components: {
        Icon
    }
})
</script>