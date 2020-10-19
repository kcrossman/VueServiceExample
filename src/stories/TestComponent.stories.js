import TestComponent from "../components/TestComponent";

export default {
  title: "Components/Test Component",
  component: TestComponent
};

export const Default = () => ({
  components: { TestComponent },
  template: `
    <TestComponent />
  `
});

Default.story = {
  parameters: {
    jest: ["TestComponent.spec.js"]
  }
};
