import { createStore } from "vuex";
import { config } from "vuex-module-decorators";
import MovieModule from "./modules/MovieModule";

config.rawError = true;

const store = createStore({
  modules: {
    MovieModule,
  },
});

export default store;
