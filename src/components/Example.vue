<template>
    <section class="w-full pt-2 pb-6 my-2 border-b last:border-b-0 border-b-gray-200">
        <div class="px-2.5 py-1 w-full flex justify-between items-center">
            <div class="text-xl font-medium text-gray-700">{{ title }}</div>
            <div>
                <BtnIcon icon="Link2"></BtnIcon>
            </div>
        </div>
        <div class="grid grid-cols-8">
            <div class="p-2.5 col-span-8 md:col-span-5">
                <div class="w-full h-full"
                     v-html="code"></div>
            </div>
            <div class="p-2.5 col-span-8 md:col-span-3">
                <Card>
                    <pre v-highlightjs="code"><code class="overflow-scroll text-xs rounded html max-h-32"></code></pre>
                </Card>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from './common/Icon.vue'
import Card from './common/Card.vue'
import BtnIcon from './common/BtnIcon.vue'
export default defineComponent({
    name: 'Example',
    props: {
        title: {
            type: String,
            required: true
        },
        code: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            string: ''
        }
    },
    mounted() {

    },
    components: {
        Card,
        Icon,
        BtnIcon
    }
})
</script>