import { mount, flushPromises } from '@vue/test-utils'
import { defineComponent, nextTick } from 'vue'
import { CREATE_ACCOUNT } from '@/store/actions/account/actions.js';
import ChildAsyncSetupComponentWithStore from '@/components/ChildAsyncSetupComponentWithStore.vue'
import setupStore from '@/fixtures/store-setup.js';

const accountsModuleActions = {
  createAccount: jest.fn(),
};
  
describe('ChildAsyncSetupComponent.vue', () => {
  let wrapper;
  let store;

  beforeEach(async () => {
    accountsModuleActions
      .createAccount.mockResolvedValue({ username: 'test@test.com' });

    store = setupStore(
      { state: {} },
    );

    // wrapper = await mountSuspense(store);

    const PricePlanSelectionComponentSuspense = defineComponent({
      components: { PricePlanSelectionComponent },
      template: '<Suspense><PricePlanSelectionComponent/></Suspense>',
    });

    wrapper = mount(PricePlanSelectionComponentSuspense, {
      global: {
        plugins: [store],
      },
    });

    console.log(wrapper.html());

    await flushPromises();
    await nextTick();

    console.log('&&&&&&&&&&&&&&&&&');
    console.log(wrapper.html());
    
    console.log(subscriptionTiersModuleActions.getSubscriptionTiers);
    console.log(userSubscriptionModuleActions.getUserSubscription);

    // wrapper = mount(PricePlanSelectionComponentWithSuspense, {
    //   global: {
    //     plugins: [store],
    //   },
    // });
  });
  beforeEach(async () => {
    
    const ChildAsyncSetupComponentWrappedInSuspense = defineComponent({
      components: { ChildAsyncSetupComponentWithStore },
      template: '<Suspense><ChildAsyncSetupComponentWithStore/></Suspense>'
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
