<template>
  <div class="hello">
    <Suspense>
      <ChildAsyncSetupComponent/>
      <template #fallback>
        <div class="mt-4">
          <div class="sr-only">Loading...</div>
          <div class="bg-white rounded-md -space-y-px">
            <div class="w-full h-full border-2 rounded-xl">
              <div class="flex animate-pulse flex-row items-top ml-4 mr-4 h-full">
                <div class="w-full">
                  <div class="w-24 bg-gray-300 h-6 rounded-md mt-4">
                  </div>
                  <div class="w-36 bg-gray-300 h-6 rounded-md mt-4 mb-4">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script>
import ChildAsyncSetupComponent from './ChildAsyncSetupComponent.vue';

export default {
  name: 'ParentComponentWithSuspense',
  components: {
    ChildAsyncSetupComponent,
  },
};
</script>

<style scoped>
</style>
