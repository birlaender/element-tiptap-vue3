import { createRouter, createWebHashHistory } from 'vue-router';
import Custom from "demos/views/Custom.vue";

const Index = () => import('../views/Index.vue');
const Simple = () => import('../views/Simple.vue');
const AllExtensions = () => import('../views/AllExtensions.vue');
const BubbleMenu = () => import('../views/BubbleMenu.vue');
const Placeholder = () => import('../views/Placeholder.vue');
const Readonly = () => import('../views/Readonly.vue');
const Title = () => import('../views/Title.vue');
const Event = () => import('../views/Event.vue');
const Output = () => import('../views/Output.vue');

const routes = [
  {
    path: '/',
    component: Index,
    children: [
      {
        name: 'Simple',
        path: '/',
        component: Simple,
      },
      {
        name: 'AllExtensions',
        path: 'all-extensions',
        component: AllExtensions,
      },
      {
        name: 'BubbleMenu',
        path: '/bubble-menu',
        component: BubbleMenu,
      },
      {
        name: 'Placeholder',
        path: '/placeholder',
        component: Placeholder,
      },
      {
        name: 'Readonly',
        path: '/readonly',
        component: Readonly,
      },
      {
        name: 'Title',
        path: '/title',
        component: Title,
      },
      {
        name: 'Event',
        path: '/event',
        component: Event,
      },
      {
        name: 'Output',
        path: '/output',
        component: Output,
      },{
        name: 'Custom',
        path: '/custom',
        component: Custom,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
