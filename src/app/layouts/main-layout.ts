import { el } from '@/helpers/el';
import { Header } from '@/widget/header';
import type { UrlPath } from '@/routing/routes';

export function createMainLayout(
  navigate: (path: UrlPath) => void,
  main: HTMLElement,
): HTMLDivElement {
  const header = Header(navigate);
  const root = el('div', {}, header, main);

  return root;
}
