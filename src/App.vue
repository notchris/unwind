<template>
  <div class="h-screen flex">
    <MainSidebar></MainSidebar>
    <div class="flex flex-col flex-1 h-screen bg-neutral-50">
      <div class="w-full h-full overflow-y-auto relative">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainHeader from './components/MainHeader.vue'
import MainSidebar from './components/MainSidebar.vue'
export default defineComponent({
  name: 'App',
  components: {
    MainHeader,
    MainSidebar
  }
})
</script>