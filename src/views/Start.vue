<template>
    <div class="flex flex-col items-center justify-center w-full h-full bg-neutral-100">
        <div class="text-neutral-700 main-title">unwind</div>
        <div class="text-2xl font-semibold text-neutral-700 max-w-prose">unwind is a component library for <a href="#"
               class="text-sky-500">tailwindcss</a></div>
        <section class="flex flex-col gap-4 py-10">
            <div class="flex flex-col items-center gap-2">
                <div class="text-lg font-medium text-center text-neutral-500">Component examples use only
                    the built-in
                    tailwindcss
                    classes</div>
                <div class="text-lg font-medium text-center text-neutral-500">Add functionality using the framework of your
                    choice</div>
                <div class="flex items-center text-lg font-medium text-center text-neutral-500">All components are available
                    for free <svg class="scale-50 stroke-neutral-500"
                         xmlns="http://www.w3.org/2000/svg"
                         width="24"
                         height="24"
                         viewBox="0 0 24 24"
                         fill="none"
                         stroke-width="2"
                         stroke-linecap="round"
                         stroke-linejoin="round">
                        <path
                              d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z">
                        </path>
                    </svg></div>
            </div>
            <a href="https://github.com/notchris"
               class="flex items-center justify-center gap-2 mt-10 text-xs font-semibold text-neutral-600 group">
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke-width="2"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     class="stroke-neutral-600">
                    <path
                          d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                    </path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                <div class="group-hover:underline">Follow me on GitHub</div>
            </a>
        </section>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import Panel from '../components/common/Panel.vue'
export default defineComponent({
    name: 'Start',
    components: {
        Panel
    }
})
</script>
<style>
@import url('https://fonts.cdnfonts.com/css/abcya');

.main-title {
    font-family: 'ABCYa', sans-serif;
    font-size: 6rem;
    line-height: normal;
}

.sub-title {
    font-family: 'ABCYa', sans-serif;
    font-size: 8rem;
    line-height: normal;
}
</style>