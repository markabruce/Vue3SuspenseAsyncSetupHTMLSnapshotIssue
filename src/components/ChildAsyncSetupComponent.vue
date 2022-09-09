<template>
<!-- eslint-disable max-len -->
  <div>This is the Async Setup Component</div>
  <!-- eslint-enable max-len -->
</template>

<script>
export default {
  async setup() {
    const someFunctionThatReturnsAPromise = () => new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });

    await someFunctionThatReturnsAPromise();
  },
};
</script>

<style>
</style>
