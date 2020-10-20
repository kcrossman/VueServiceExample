import Vue from "vue";

const TestService = new Vue({
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

if (!Vue.prototype.$TestService) {
  Vue.prototype.$TestService = TestService;
}

export default TestService;
