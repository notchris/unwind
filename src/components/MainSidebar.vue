<template>
    <div class="h-screen bg-gray-600">
        <div class="flex flex-col justify-center px-3 py-2">
            <div class="mb-1 font-semibold text-gray-100 title">unwind</div>
            <div class="-mt-2 text-gray-300 subtitle">TAILWINDCSS COMPONENTS</div>
        </div>
        <div class="flex flex-col justify-between flex-1">
            <nav class="flex flex-col w-full py-4">
                <NavLink to="/"
                         label="Start"
                         class="font-bold"></NavLink>
                <div class="w-full mb-3 border-b border-b-white border-opacity-10"></div>
                <label class="px-3 pb-1 text-gray-400 sidebar-label">COMPONENTS</label>
                <NavLink to="/accordion"
                         label="Accordion"></NavLink>
                <NavLink to="/alert"
                         label="Alert"></NavLink>
                <NavLink to="/badge"
                         label="Badge"></NavLink>
                <NavLink to="/button"
                         label="Button"></NavLink>
                <NavLink to="/button-group"
                         label="Button Group"></NavLink>
                <NavLink to="/card"
                         label="Card"></NavLink>
                <NavLink to="/collapse"
                         label="Collapse"></NavLink>
                <NavLink to="/dropdown"
                         label="Dropdown"></NavLink>
                <NavLink to="/indicator"
                         label="Indicator"></NavLink>
                <NavLink to="/list-group"
                         label="List Group"></NavLink>
                <NavLink to="/menu"
                         label="Menu"></NavLink>
                <NavLink to="/modal"
                         label="Modal"></NavLink>
                <NavLink to="/navbar"
                         label="Navbar"></NavLink>
                <NavLink to="/tab-group"
                         label="Tab Group"></NavLink>
            </nav>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavLink from './sidebar/NavLink.vue'
import Icon from './common/Icon.vue'
export default defineComponent({
    name: 'MainSidebar',
    components: {
        NavLink,
        Icon
    }
})
</script>
<style>
@import url('https://fonts.cdnfonts.com/css/abcya');

.router-link-active {
    --tw-bg-opacity: 1;
    background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}

.title {
    font-family: 'ABCYa', sans-serif;
    font-size: 22px;
}

.subtitle {
    font-size: 8px;
}

.sidebar-label {
    font-size: 10px;
}
</style>