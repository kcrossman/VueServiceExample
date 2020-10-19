import Vue from "vue";

if (!Vue.prototype.$TestService) {
  Vue.prototype.$TestService = new Vue({
    data() {
      return {
        valueTimeout: undefined,
        value: 0
      };
    },
    mounted() {
      this.increaseValue();
    },
    destroyed() {
      clearTimeout(this.valueTimeout);
    },
    methods: {
      increaseValue() {
        this.valueTimeout = setTimeout(() => {
          this.value++;
          this.increaseValue();
        }, 1000);
      }
    }
  }).$mount();
}
