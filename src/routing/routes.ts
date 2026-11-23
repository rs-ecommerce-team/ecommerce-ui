// описаны статические роуты для фуннкции компонентов без параметров, далее типизация будет расширятся

import { CartPage, CatalogPage, HomePage, ProductPage, ProfilePage } from '@/pages';

export type PageComponent = () => HTMLElement;
export type UrlPath = '/' | '/catalog' | '/cart' | '/profile' | '/product/:id';
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
    path: '/product/:id',
    component: ProductPage,
  },
];
