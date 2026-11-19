import { el } from '@/helpers/el';
import type { UrlPath } from '@/routing/routes';

export function Header(navigate: (path: UrlPath) => void): HTMLElement {
  const nav = el(
    'nav',
    {},
    el('a', { href: '/' }, 'Главная'),
    el('a', { href: '/catalog' }, 'Каталог'),
    el('a', { href: '/product' }, 'Товар'),
    el('a', { href: '/cart' }, 'Корзина'),
    el('a', { href: '/profile' }, 'Профиль'),
    el('a', { href: '/not-found' }, '404'),
  );

  nav.addEventListener('click', (event: MouseEvent) => {
    const target = event.target;

    if (!(target instanceof Element)) return;

    const link = target.closest('a');

    if (!(link instanceof HTMLAnchorElement)) return;

    event.preventDefault();
    navigate(link.pathname as UrlPath);
  });

  return el('header', {}, nav);
}
