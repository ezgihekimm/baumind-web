import { createRouter, createWebHistory } from "vue-router";
import i18n from "../i18n";

import Root from "../components/Root.vue";

function lazyLoad(view) {
  return () => import(`@/pages/${view}.vue`);
}

const routes = [
  {
    path: "/",
    redirect: i18n.global.locale,
  },
  {
    path: "/:locale",
    component: Root,
    beforeEnter: (to, from, next) => {
      const locale = to.params.locale;
      const supported_locales = ["tr", "en"];
      if (!supported_locales.includes(locale)) return next("tr");
      if (i18n.locale !== locale) {
        i18n.global.locale = locale;
      }
      return next();
    },
    children: [
      { path: "", component: lazyLoad("Home") },
      { path: "about-us", component: lazyLoad("AboutUs") },
      { path: "patents", component: lazyLoad("Patents") },
      { path: "products", component: lazyLoad("Products") },
      { path: "products/co-lighting", component: lazyLoad("CoLighting") },
      { path: "products/co-diver", component: lazyLoad("CoDiver") },
      { path: "products/co-link", component: lazyLoad("CoLink") },
      { path: "projects", component: lazyLoad("Projects") },
      {
        path: "projects/sualti-optik-spektrum-olcum-cihazi",
        component: lazyLoad("ProjectSpectrum"),
      },
      {
        path: "projects/denizaltilarda-oz-akustik-kestirimi-ve-akustik-izlemeuyari-sistemi",
        component: lazyLoad("ProjectAcusto"),
      },
      {
        path: "projects/denizalti-gemisi-helikopter-arasinda-guvenli-elektro-optik-haberlesme-sistemi",
        component: lazyLoad("ProjectElectroOptic"),
      },
      { path: "contact-us", component: lazyLoad("ContactUs") },
      { path: "coming-soon", component: lazyLoad("ComingSoon") },
    ],
  },
  {
    path: "/:locale/404",
    name: "notFound",
    component: () => import("../pages/ErrorPage.vue"),
  },
  {
    path: "/:locale/:pathMatch(.*)*",
    beforeEnter(to) {
      window.location = `/${to.params.locale}/404`;
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
