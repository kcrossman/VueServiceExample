import { render, screen } from "@testing-library/vue";

import TestService from "../../src/services/TestService";
import TestComponent from "../../src/components/TestComponent.vue";

function renderTestComponent() {
  return render(TestComponent, {}, vue => {
    vue.prototype.$TestService = TestService;
  });
}

function getLabel() {
  return screen.getByTestId("TestComponent_Label").textContent;
}

function getValue() {
  return Number(screen.getByTestId("TestComponent_Value").textContent);
}

test("Renders TestComponent", () => {
  renderTestComponent();

  expect(getLabel()).toBe("Value:");
  expect(getValue()).toBe(0);
});

test("Renders TestComponent and value is 2 after 2 seconds", async () => {
  renderTestComponent();

  await new Promise(rt => setTimeout(rt, 2000));
  expect(getValue()).toBe(2);
});
