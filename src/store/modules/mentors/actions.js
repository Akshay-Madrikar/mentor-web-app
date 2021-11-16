export default {
  registerMentor(context, data) {
    const mentorData = {
      id: context.rootGetters.userId,
      firstName: data.firstName,
      lastName: data.lastName,
      description: data.description,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    context.commit('registerMentor', mentorData);
  },
};
