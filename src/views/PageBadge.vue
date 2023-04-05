<template>
    <div class="flex flex-col w-full h-full">
        <PageHeader></PageHeader>
        <div class="w-full px-4 pt-4 pb-8 border-b border-b-gray-200">
            <p class="font-light prose text-gray-600 text max-w-prose">
                Display an emphasized message to the user, sometimes with a contextual color.
            </p>
        </div>
        <div class="flex-1">
            <div class="p-2.5 flex flex-col gap-4">
                <Example v-for="item in items"
                         :key="item.id"
                         :title="item.title"
                         :code="item.code"></Example>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
interface ItemData { id: string, title: string, code: string }

import { defineComponent } from 'vue'
import PageHeader from '../components/page/PageHeader.vue'
import Panel from '../components/common/Panel.vue'
import Example from '../components/Example.vue'
import parseExamples from '../utils/parseExample'
export default defineComponent({
    name: 'PageBadge',
    data() {
        return {
            examplePath: 'examples/badge/',
            examples: ['exampleA', 'exampleB', 'exampleC'],
            items: [] as ItemData[]
        }
    },
    async mounted() {
        this.items = await parseExamples(this.examplePath, this.examples)
    },
    components: {
        PageHeader,
        Panel,
        Example
    }
})
</script>