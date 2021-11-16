import { createStore } from 'vuex';

import mentorsModule from './modules/mentors/index';
import requestsModule from './modules/requests/index';

const store = createStore({
  modules: {
    mentors: mentorsModule,
    requests: requestsModule,
  },
  state() {
    return {
      userId: 'm3',
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
