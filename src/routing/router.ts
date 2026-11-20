import { NotFoundPage } from '../pages';
import { routes, type Routes, type UrlPath } from './routes';

function getRoute(pathname: string): Routes | undefined {
  return routes.find((route) => route.path === pathname);
}

export function createRouter(container: HTMLElement): {
  renderRouter: () => void;
  start: () => void;
  navigate: (path: UrlPath) => void;
} {
  const page = container;

  function renderRouter(): void {
    const path = window.location.pathname;
    const currentPage = getRoute(path);

    if (!currentPage) {
      page.replaceChildren(NotFoundPage());
      return;
    }

    page.replaceChildren(currentPage.component());
  }

  function start(): void {
    window.addEventListener('popstate', renderRouter);

    window.addEventListener('app:navigate', (event) => {
      const customEvent = event as CustomEvent<UrlPath>;
      navigate(customEvent.detail);
    });

    renderRouter();
  }

  function navigate(path: UrlPath): void {
    history.pushState({}, '', path);
    renderRouter();
  }

  return { renderRouter, start, navigate };
}
