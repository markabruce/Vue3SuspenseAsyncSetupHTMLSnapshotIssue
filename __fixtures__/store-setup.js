import { createStore } from 'vuex';

const setupStore = (account) => {
  const store = createStore({
    modules: {
      account: {
        ...account,
        namespaced: true,
      },
    },
  });

  store.dispatch = jest.fn();

  return store;
};

export default setupStore;
