import { render, screen } from "@testing-library/vue";
import Vue from "vue";

import TestService from "../../src/services/TestService";
if (!Vue.prototype.$TestService) {
  Vue.prototype.$TestService = TestService;
}

import TestComponent from "../../src/components/TestComponent.vue";

function getLabel() {
  return screen.getByTestId("TestComponent_Label").textContent;
}

function getValue() {
  return Number(screen.getByTestId("TestComponent_Value").textContent);
}

test("Renders TestComponent", () => {
  render(TestComponent);

  expect(getLabel()).toBe("Value:");
  expect(getValue()).toBe(0);
});

test("Renders TestComponent and value is 2 after 2 seconds", async () => {
  render(TestComponent);

  await new Promise(rt => setTimeout(rt, 2000));
  expect(getValue()).toBe(2);
});
