import { render, screen } from "@testing-library/vue";

import TestComponent from "../../src/components/TestComponent.vue";

test("Renders formatted amount", () => {
  render(TestComponent);
  expect(screen.getByText("Value:")).toBeInTheDocument();
});
