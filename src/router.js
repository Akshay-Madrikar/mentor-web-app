import { createRouter, createWebHistory } from 'vue-router';

import MentorDetails from './pages/mentors/MentorDetails.vue';
import MentorRegistration from './pages/mentors/MentorRegistration.vue';
import MentorsList from './pages/mentors/MentorsList';
import ContactMentors from './pages/requests/ContactMentors.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/mentors' },
    { path: '/mentors', component: MentorsList },
    {
      path: '/mentors/:id',
      component: MentorDetails,
      children: [{ path: 'contact', component: ContactMentors }],
    },
    { path: '/register', component: MentorRegistration },
    { path: '/requests', component: RequestsReceived },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
