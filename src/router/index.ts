import { createRouter, createWebHistory } from "vue-router";

import Start from "../views/Start.vue";
import PageAccordion from "../views/PageAccordion.vue";
import PageButton from "../views/PageButton.vue";
import PageButtonGroup from "../views/PageButtonGroup.vue";
import PageCard from "../views/PageCard.vue";
import PageAlert from "../views/PageAlert.vue";
import PageBadge from "../views/PageBadge.vue";
import PageCollapse from "../views/PageCollapse.vue";
import PageDropdown from "../views/PageDropdown.vue";
import PageListGroup from "../views/PageListGroup.vue";
import PageMenu from "../views/PageMenu.vue";
import PageModal from "../views/PageModal.vue";
import PageNavbar from "../views/PageNavbar.vue";
import PageTabGroup from "../views/PageTabGroup.vue";
import PageIndicator from "../views/PageIndicator.vue";

const routes = [
  {
    path: "/",
    name: "Start",
    component: Start,
  },
  {
    path: "/accordion",
    name: "Accordion",
    component: PageAccordion,
  },
  {
    path: "/alert",
    name: "Alert",
    component: PageAlert,
  },
  {
    path: "/button",
    name: "Button",
    component: PageButton,
  },
  {
    path: "/button-group",
    name: "Button Group",
    component: PageButtonGroup,
  },
  {
    path: "/badge",
    name: "Badge",
    component: PageBadge,
  },
  {
    path: "/card",
    name: "Card",
    component: PageCard,
  },
  {
    path: "/collapse",
    name: "Collapse",
    component: PageCollapse,
  },
  {
    path: "/dropdown",
    name: "Dropdown",
    component: PageDropdown,
  },
  {
    path: "/indicator",
    name: "Indicator",
    component: PageIndicator,
  },
  {
    path: "/list-group",
    name: "List Group",
    component: PageListGroup,
  },
  {
    path: "/menu",
    name: "Menu",
    component: PageMenu,
  },
  {
    path: "/modal",
    name: "Modal",
    component: PageModal,
  },
  {
    path: "/navbar",
    name: "Navbar",
    component: PageNavbar,
  },
  {
    path: "/tab-group",
    name: "Tab Group",
    component: PageTabGroup,
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
