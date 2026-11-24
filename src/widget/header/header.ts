import { el } from '@/helpers/el';
import { routes, type UrlPath } from '@/routing/routes';

export function Header(navigate: (path: UrlPath) => void): HTMLElement {
  const nav = el(
    'nav',
    {},
    el('a', { href: '/' }, 'Главная'),
    el('a', { href: '/catalog' }, 'Каталог'),
    el('a', { href: '/product' }, 'Товар'),
    el('a', { href: '/cart' }, 'Корзина'),
    el('a', { href: '/profile' }, 'Профиль'),
  );

  nav.addEventListener('click', (event: MouseEvent) => {
    const target = event.target;

    if (!(target instanceof Element)) return;

    const link = target.closest('a');

    if (!(link instanceof HTMLAnchorElement)) return;

    function isValidPass(value: string): value is UrlPath {
      return routes.some((element) => element.path === value);
    }

    if (isValidPass(link.pathname)) {
      event.preventDefault();
      navigate(link.pathname);
    }
  });

  return el('header', {}, nav);
}
