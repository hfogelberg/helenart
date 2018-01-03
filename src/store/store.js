import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import user from "./modules/storeUser";
import artwork from "./modules/storeArtwork";

export const store = new Vuex.Store({
  modules: {
    user,
    artwork
  }
});
