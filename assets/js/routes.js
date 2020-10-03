import NotFound from '../vue/NotFound.vue';
import Crossroad from '../vue/Crossroad.vue';
import Team from '../vue/Team.vue';
import Project from '../vue/Project.vue';

export const routes = [
    {
        path: '/',
        component: Crossroad,
        meta: {
            title: 'Tartarus'
        }
    },
    {
        path: '/team',
        component: Team,
        meta: {
            title: 'Tím'
        }
    },
    {
        path: '/project',
        component: Project,
        meta: {
            title: 'Projekt'
        }
    },
    {
        path: '/error',
        component: NotFound,
        meta: {
            title: '404'
        }
    },
    {
        path: '*',
        redirect: '/error'
    },
];