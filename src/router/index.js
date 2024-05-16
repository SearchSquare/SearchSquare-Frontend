import { createRouter, createWebHistory } from 'vue-router';
import MainView from '@/views/main/MainView.vue';
import MypageView from '@/views/mypage/MypageView.vue';
import ApiDocsView from '@/views/api/ApiDocsView.vue';
import LandingView from '@/views/landing/LandingView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: MainView,
    },
    {
      path: '/mypage',
      name: 'Mypage',
      component: MypageView,
    },
    {
      path: '/api-docs',
      name: 'ApiDocs',
      component: ApiDocsView,
    },
    {
      path: '/landing',
      name: 'LandingView',
      component: LandingView,
    },
  ],
});

export default router;
