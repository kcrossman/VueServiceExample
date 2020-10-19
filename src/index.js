import Vue from "vue";
Vue.config.silent = true;
window.Vue = Vue;

import "./services/TestService";

import TestComponent from "./components/TestComponent";

export { TestComponent };
