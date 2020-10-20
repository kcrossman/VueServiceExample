<template>
  <div :class="$style.container">
    <span :class="$style.label" data-testid="TestComponent_Label">Value:</span>
    <span :class="$style.value" data-testid="TestComponent_Value">{{
      value
    }}</span>
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
  display: inline-flex;
  gap: 12px;

  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 36px;
}

.label {
  font-weight: 600;
}

.value {
  color: red;
}
</style>
