<template>
    <div class="w-full h-full flex flex-col">
        <PageHeader></PageHeader>
        <div class="w-full px-4 pt-4 pb-8 border-b border-b-gray-200">
            <p class="text font-light prose max-w-prose text-gray-600">
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
    name: 'PageCard',
    data() {
        return {
            examplePath: 'examples/card/',
            examples: ['exampleA', 'exampleB', 'exampleC', 'exampleD'],
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