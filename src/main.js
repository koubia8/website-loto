// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import Vuex from "vuex";

export default function(Vue, { router, head, isClient, appOptions }) {
  // vuex

  // Set default layout as a global component
  if (isClient) {
    /*   router.beforeEach((to, form, next) => {
      if (to.path.includes("myspace")) {
        next("/");
      } else {
        next();
      }
    }); */
  }
  Vue.component("Layout", DefaultLayout);
}
