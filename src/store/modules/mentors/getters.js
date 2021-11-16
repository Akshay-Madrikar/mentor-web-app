export default {
  mentors(state) {
    return state.mentors;
  },
  hasMentors(state) {
    return state.mentors && state.mentors.length > 0;
  },
  isMentor(_1, getters, _2, rootGetters) {
    const mentors = getters.mentors;
    const userId = rootGetters.userId;
    return mentors.some((mentor) => mentor.id === userId);
  },
};
