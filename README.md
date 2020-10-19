# Vue Service Example (with Storybook)
This is testing repo for creating a component library using Storybook and Vue "Services" that behave similarly to Angular Services.

## Issue
Running Storybook or live code with this approach works mostly as intended, however, running unit tests presents an issue because the "Service" is undefined in the Vue.prototype. Running `yarn test` will yield the error below...

`[Vue warn]: Error in render: "TypeError: Cannot read property 'value' of undefined"`

This error is referencing the inability for the TestComponent to read `this.$TestService.value`, which should be available due to importing it and setting it via Vue.prototype.

## Setup
`yarn` or `yarn install`

## Run Storybook
`yarn sb` or `yarn storybook`

Open the TestComponent on the left-hand menu.

## Run Tests
`yarn test`

### Linting
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
