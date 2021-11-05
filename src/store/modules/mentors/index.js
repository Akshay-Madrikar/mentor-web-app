import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      mentors: [
        {
          id: 'm1',
          firstName: 'Akshay',
          lastName: 'Madrikar',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Akshay and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
        {
          id: 'm2',
          firstName: 'John',
          lastName: 'Jones',
          areas: ['frontend', 'career'],
          description:
            'I am John and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 25,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
