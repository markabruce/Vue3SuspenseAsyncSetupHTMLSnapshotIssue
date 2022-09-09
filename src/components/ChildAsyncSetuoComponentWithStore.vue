<template>
<!-- eslint-disable max-len -->
  <div>This is the Async Setup Component with a Store</div>
  <!-- eslint-enable max-len -->
</template>

<script>
export default {
  async setup() {
    const someFunctionThatReturnsAPromise = () => {
      return new Promise(function(resolve){
        setTimeout(function(){
          resolve();
        }, 1000)
      });
    };

    await someFunctionThatReturnsAPromise();
  },
};
</script>

<style>
</style>
