import Vue from "vue";
import Vuex from "vuex";
import field from './modules/field'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    field
  }
});
