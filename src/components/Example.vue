<template>
    <section class="w-full pt-2 pb-6 my-2 border-b last:border-b-0 border-b-gray-200">

        <div class="grid grid-cols-8 ">
            <div class="col-span-8 md:col-span-5 px-2.5 flex justify-between items-center">
                <div class="text-xl font-medium text-gray-700">{{ title }}</div>
                <div class="flex items-center gap-1">
                    <div v-for="tag in tags"
                         :key="`tag_${tag}`"
                         class="text-center font-medium px-2 py-1 text-xs border rounded-full max-w-fit text-gray-500">
                        {{ tag }}
                    </div>
                </div>
            </div>
            <div class="col-span-8 md:col-span-3 px-2.5 flex justify-end">
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
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        code: {
            type: String,
            required: true
        },
        tags: {
            type: Array,
            required: false
        },
        popper: {
            type: Object,
            required: false
        }
    },
    data() {
        return {
            string: ''
        }
    },
    mounted() {
        if (this.id === 'tooltipC') {
            const popper = import("@popperjs/core")
                .then(obj => {
                    const { createPopper } = obj
                    const button = document.querySelector("#hover") as Element
                    const tooltip = document.querySelector("#tooltip") as Element

                    const instance = createPopper(button as any, tooltip as any, {
                        placement: "right",
                        modifiers: [
                            {
                                name: "offset",
                                options: {
                                    offset: [0, 8]
                                }
                            }
                        ]
                    })


                    function show() {
                        tooltip.setAttribute('data-show', '')

                        // We need to tell Popper to update the tooltip position
                        // after we show the tooltip, otherwise it will be incorrect
                        instance.update()
                    }

                    function hide() {
                        tooltip.removeAttribute('data-show')
                    }

                    const showEvents = ['mouseenter', 'focus']
                    const hideEvents = ['mouseleave', 'blur']

                    showEvents.forEach((event) => {
                        button.addEventListener(event, show)
                    })

                    hideEvents.forEach((event) => {
                        button.addEventListener(event, hide)
                    })


                })
                .catch(err => {
                    console.log(err)
                })

        }
    },
    components: {
        Card,
        Icon,
        BtnIcon
    }
})
</script>