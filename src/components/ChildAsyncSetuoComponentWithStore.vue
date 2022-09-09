<template>
<!-- eslint-disable max-len -->
  <div>This is the Async Setup Component with a Store</div>
  <!-- eslint-enable max-len -->
</template>

<script>
export default {
  async setup() {
    const someFunctionThatReturnsAPromise = (resolve) => new Promise(() => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });

    someFunctionThatReturnsAPromise();
  },
};
</script>

<style>
</style>
