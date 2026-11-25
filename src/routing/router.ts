import { NotFoundPage } from '@/pages';
import { routes, type Routes, type UrlPath } from './routes';

type RouteMatch = {
  route: Routes;
  params: Record<string, string>;
};

const findStaticRoute = (pathname: string): Routes | undefined => {
  return routes.find((route) => route.path === pathname);
};

const findDynamicRoute = (pathname: string): RouteMatch | undefined => {
  const params: Record<string, string> = {};

  const routeRegexes = routes.map((route) => {
    const regexString =
      '^' +
      route.path
        .split('/')
        .map((item) => (item.startsWith(':') ? '([^/]+)' : item))
        .join('/') +
      '$';

    return {
      route,
      regex: new RegExp(regexString),
    };
  });
  const dynamicRoute = routeRegexes.find(({ regex }) => regex.test(pathname));

  if (!dynamicRoute) return undefined;

  const match = pathname.match(dynamicRoute.regex);

  if (!match) return undefined;

  const paramNames = dynamicRoute.route.path
    .split('/')
    .filter((item) => item.startsWith(':'))
    .map((item) => item.slice(1));

  paramNames.forEach((name, index) => {
    params[name] = match[index + 1];
  });

  return {
    route: dynamicRoute.route,
    params,
  };
};

function getRoute(pathname: string): RouteMatch | undefined {
  const staticRoute = findStaticRoute(pathname);

  if (staticRoute) return { route: staticRoute, params: {} };

  return findDynamicRoute(pathname);
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
      page.replaceChildren(NotFoundPage(navigate));
      return;
    }

    page.replaceChildren(currentPage.route.component());
  }

  function start(): void {
    window.addEventListener('popstate', renderRouter);

    renderRouter();
  }

  function navigate(path: UrlPath): void {
    if (window.location.pathname === path) return;
    history.pushState({}, '', path);
    renderRouter();
  }

  return { renderRouter, start, navigate };
}
