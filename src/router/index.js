import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'LoginPage',
      component: () => import('@/views/login/LoginPage.vue'),
      meta: { title: '登录&注册' }
    },
    {
      path: '/',
      name: 'LayoutContainer',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      redirect: '/article/manage',
      children: [
        {
          path: '/article/manage',
          name: 'ArticleManage',
          component: () => import('@/views/article/ArticleManage.vue'),
          meta: { title: '文章管理' }
        },
        {
          path: '/article/channel',
          name: 'ArticleChannel',
          component: () => import('@/views/article/ArticleChannel.vue'),
          meta: { title: '频道管理' }
        },
        {
          path: '/user/profile',
          name: 'UserProfile',
          component: () => import('@/views/user/UserProfile.vue'),
          meta: { title: '个人详情' }
        },
        {
          path: '/user/avatar',
          name: 'UserAvatar',
          component: () => import('@/views/user/UserAvatar.vue'),
          meta: { title: '更换头像' }
        },
        {
          path: '/user/password',
          name: 'UserPassword',
          component: () => import('@/views/user/UserPassword.vue'),
          meta: { title: '重置密码' }
        }
      ]
    }
  ]
})

export default router
