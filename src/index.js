import Vue from "vue";
Vue.config.silent = true;
window.Vue = Vue;

import TestService from "./services/TestService";
Vue.prototype.$TestService = TestService;

import TestComponent from "./components/TestComponent";

export { TestComponent };
