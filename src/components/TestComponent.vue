<template>
  <div :class="$style.container">
    <h1>
      Value: <span class="value">{{ value }}</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: "TestComponent",
  computed: {
    value() {
      return this.$TestService.value;
    }
  }
};
</script>

<style module>
.container {
  padding: 12px;
}

.container.value {
  color: red;
}
</style>
