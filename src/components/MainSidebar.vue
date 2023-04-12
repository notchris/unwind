<template>
    <div class="h-screen bg-gray-600 overflow-y-scroll relative">
        <div class="sticky top-0 bg-gray-600 border-b border-b-gray-500">
            <div class="flex flex-col justify-center px-3 py-2">
                <div class="mb-1 font-semibold text-gray-50 title">unwind</div>
                <div class=" text-gray-400 subtitle">TAILWINDCSS COMPONENTS</div>
            </div>
        </div>
        <div class="flex flex-col justify-between flex-1">
            <nav class="flex flex-col w-full py-4">
                <NavLink to="/"
                         label="Start"
                         class="font-medium mb-3"></NavLink>

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
                <NavLink to="/toast"
                         label="Toast"></NavLink>
                <NavLink to="/tooltip"
                         label="Tooltip"></NavLink>
            </nav>
        </div>
        <div class="px-2.5 py-2.5 bg-gray-700 flex gap-2 items-center justify-center">
            <div class="flex-1">
                <a class="mx-auto group"
                   href="https://github.com/notchris">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="16"
                         height="16"
                         viewBox="0 0 24 24"
                         class="fill-gray-400 mx-auto group-hover:fill-gray-300"
                         stroke-width="2"
                         stroke-linecap="round"
                         stroke-linejoin="round">
                        <path
                              d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                        </path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                </a>
            </div>
            <div class="flex-1">
                <a class="mx-auto group"
                   href="https://twitter.com/chrismcgrane">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="16"
                         height="16"
                         viewBox="0 0 24 24"
                         class="mx-auto fill-gray-400 group-hover:fill-gray-300"
                         stroke-width="2"
                         stroke-linecap="round"
                         stroke-linejoin="round">
                        <path
                              d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z">
                        </path>
                    </svg>
                </a>
            </div>
            <div class="flex-1">
                <a class="mx-auto group"
                   href="https://discord.gg/56sKmJZFHz">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="16"
                         height="16"
                         class="mx-auto fill-gray-400 group-hover:fill-gray-300"
                         stroke-width="2"
                         stroke-linecap="round"
                         stroke-linejoin="round"
                         viewBox="0 0 640 512">
                        <path
                              d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
                    </svg>
                </a>
            </div>
            <div class="flex-1">
                <a class="mx-auto group"
                   href="https://codepen.io/notchris">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="16"
                         height="16"
                         viewBox="0 0 24 24"
                         fill="none"
                         class="mx-auto stroke-gray-400 group-hover:stroke-gray-300"
                         stroke-width="2"
                         stroke-linecap="round"
                         stroke-linejoin="round">
                        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                        <line x1="12"
                              x2="12"
                              y1="22"
                              y2="15.5"></line>
                        <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                        <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                        <line x1="12"
                              x2="12"
                              y1="2"
                              y2="8.5"></line>
                    </svg>
                </a>
            </div>
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
    @apply bg-gray-300;
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