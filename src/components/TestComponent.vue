<template>
  <div :class="$style.container">
    <h1>
      Value: <span :class="$style.value">{{ value }}</span>
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

.value {
  color: red;
}
</style>
