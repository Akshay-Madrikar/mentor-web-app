export default {
  requests(state, _, _2, rootGetters) {
    const mentorId = rootGetters.userId;
    return state.requests.filter((req) => req.mentorId === mentorId);
  },
  hasRequests(_, getters) {
    // To check current above requests only
    return getters.requests && getters.requests.length > 0;
  },
};
