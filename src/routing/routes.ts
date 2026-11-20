// описаны статические роуты для фуннкции компонентов без параметров, далее типизация будет расширятся

import { CartPage, CatalogPage, HomePage, NotFoundPage, ProductPage, ProfilePage } from '@/pages';

export type PageComponent = () => HTMLElement;
export type UrlPath = '/' | '/catalog' | '/cart' | '/profile' | '/not-found' | '/product';
export type Routes = {
  path: UrlPath;
  component: PageComponent;
};

export const routes: Routes[] = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/cart',
    component: CartPage,
  },
  {
    path: '/profile',
    component: ProfilePage,
  },
  {
    path: '/catalog',
    component: CatalogPage,
  },
  {
    path: '/not-found',
    component: NotFoundPage,
  },
  {
    path: '/product',
    component: ProductPage,
  },
];
