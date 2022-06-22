import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const article: AppRouteModule = {
  path: '/article',
  name: 'article',
  component: LAYOUT,
  redirect: '/article/list',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.article.list'),
  },
  children: [
    {
      path: 'list',
      name: 'list',
      component: () => import('/@/views/article/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.article.list'),
      },
    },
  ],
};

export default article;
