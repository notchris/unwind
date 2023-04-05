<template>
    <div class="w-full h-9 flex items-center px-3">
        <div class="text-xs">{{ $route.name }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from './common/Icon.vue'
export default defineComponent({
    name: 'MainHeader',
    components: {
        Icon
    }
})
</script>