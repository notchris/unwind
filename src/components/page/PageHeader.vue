<template>
    <div id="page-header"
         class="w-full px-4 pt-4 flex justify-between items-center">
        <div class="text-3xl font-semibold text-gray-700">{{ $route.name }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from '../common/Icon.vue'
import Btn from '../common/Btn.vue'
import BtnIcon from '../common/BtnIcon.vue'
export default defineComponent({
    name: 'PageHeader',
    components: {
        Icon,
        Btn,
        BtnIcon
    }
})
</script>