import NotFound from '../vue/NotFound.vue';
import Crossroad from '../vue/Crossroad.vue';
import Team from '../vue/Team.vue';
import Project from '../vue/Project.vue';

export const routes = [
    {
        path: '/',
        component: Crossroad,
    },
    {
        path: '/team',
        component: Team,
    },
    {
        path: '/project',
        component: Project,
    },
    {
        path: '/error',
        component: NotFound,
    },
    {
        path: '*',
        redirect: '/error'
    },
];