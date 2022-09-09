import {
  REQUEST_STARTED,
  REQUEST_COMPLETED,
} from '@/store/mutations';

const accountModule = {
  namespaced: true,
  state: () => ({
    data: null,
    isLoading: false,
  }),
  mutations: {
    requestStarted(state) {
      state.isLoading = true;
    },
    requestCompletedSuccessfully(state, account) {
      state.isLoading = false;
      state.data = account;
    },
  },
  actions: {
    async createAccount({ commit }) {
      commit(REQUEST_STARTED);
      const account = { username: 'test@test.com' };
      commit(REQUEST_COMPLETED, account);
    },
  },
};

export default accountModule;
