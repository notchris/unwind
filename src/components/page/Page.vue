<template>
    <div class="flex flex-col w-full h-full">
        <div id="page-header"
             class="w-full px-4 pt-4 flex justify-between items-center">
            <div class="text-3xl font-bold text-gray-700">{{ title }}</div>
        </div>
        <div class="w-full px-4 pt-4 pb-8 border-b border-b-neutral-200">
            <div v-html="description"
                 class="font-light prose text-neutral-600 text max-w-prose">

            </div>
        </div>
        <div class="flex-1">
            <div class="p-2.5 flex flex-col gap-4">
                <Example v-for="item in items"
                         :id="item.id"
                         :key="item.id"
                         :title="item.title"
                         :code="item.code"
                         :tags="item.tags"></Example>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import Icon from '../common/Icon.vue'
import Btn from '../common/Btn.vue'
import BtnIcon from '../common/BtnIcon.vue'
import { ItemData } from '../../utils/interfaces'
import parseExamples from '../../utils/parseExample'
import Example from '../Example.vue'

export default defineComponent({
    name: 'Page',
    props: {
        examplePath: {
            type: String,
            required: true
        },
        examples: {
            type: Array as PropType<Array<string>>,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            items: [] as ItemData[]
        }
    },
    watch: {
        '$route.params': {
            async handler(newValue) {
                this.items = await parseExamples(`examples/${this.examplePath}/`, this.examples)
            },
            immediate: true,
        }
    },

    components: {
        Icon,
        Btn,
        BtnIcon,
        Example
    }
})
</script>

<style>
#arrow,
#arrow::before {
    position: absolute;
    width: 8px;
    height: 8px;
    background: inherit;
}

#arrow {
    visibility: hidden;
}

#arrow::before {
    visibility: visible;
    content: '';
    transform: rotate(45deg);
}

#tooltip[data-popper-placement^='top']>#arrow {
    bottom: -4px;
}

#tooltip[data-popper-placement^='bottom']>#arrow {
    top: -4px;
}

#tooltip[data-popper-placement^='left']>#arrow {
    right: -8px;
}

#tooltip[data-popper-placement^='right']>#arrow {
    left: -8px;
}
</style>