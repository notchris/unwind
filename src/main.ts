import { createApp } from "vue";
import "./style.css";
import VueHighlightJS from "vue3-highlightjs";
import "highlight.js/styles/github.css";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).use(VueHighlightJS).mount("#app");
