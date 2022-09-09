import { mount, flushPromises } from '@vue/test-utils'
import { defineComponent, nextTick } from 'vue'
import ChildAsyncSetupComponent from '@/components/ChildAsyncSetupComponent.vue'

describe('ChildAsyncSetupComponent.vue', () => {
  let wrapper;

  beforeEach(async () => {
    jest.useFakeTimers();
    const ChildAsyncSetupComponentWrappedInSuspense = defineComponent({
      components: { ChildAsyncSetupComponent },
      template: '<Suspense><ChildAsyncSetupComponent/></Suspense>'
    })
    
    wrapper = mount(ChildAsyncSetupComponentWrappedInSuspense);
    
    jest.runAllTimers();

    await flushPromises();
    await nextTick();
  });

  it('renders to match html snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  })
})
