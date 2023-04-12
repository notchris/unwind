import { createRouter, createWebHistory } from "vue-router";

import Start from "../views/Start.vue";

import Page from "../components/page/Page.vue";

import routesJson from "../routes.json";

const routes: any[] = [
  {
    path: "/",
    name: "Start",
    component: Start,
  },
];

routesJson.forEach((route) => {
  const { id, title, description, examples } = route;
  routes.push({
    path: `/${id.replace("_", "-")}`,
    name: title,
    component: Page,
    props: {
      title,
      description,
      examplePath: id,
      examples,
    },
  });
});

console.log(routes);

const router = createRouter({ history: createWebHistory(), routes });
export default router;
