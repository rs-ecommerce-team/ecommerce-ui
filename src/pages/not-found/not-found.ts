import { el } from '@/helpers/el';
import errorImg from '@/shared/assets/404-neutral.webp';
import type { UrlPath } from '@/routing/routes';

export function NotFoundPage(navigate: (path: UrlPath) => void): HTMLElement {
  const button = el(
    'button',
    {
      className: `
        px-6 py-3
        rounded-xl
        bg-violet-600 text-white
        font-medium shadow-md
        transition-all duration-200 ease-in-out
        hover:bg-violet-700
        hover:-translate-y-0.5
        hover:shadow-lg
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-violet-500
        focus-visible:ring-offset-2
        active:scale-95
        cursor-pointer
      `,
      onClick: () => navigate('/'),
    },
    'Go to homepage',
  );

  const image = el('img', {
    src: errorImg,
    alt: 'Page not found',
    className: 'w-full max-w-md h-auto object-contain',
  });

  return el(
    'main',
    {
      className: `
        min-h-screen
        flex flex-col
        items-center justify-center
        gap-6
        px-4 py-12
        bg-violet-50
        text-center
      `,
    },
    image,
    el(
      'h1',
      {
        className: 'text-4xl sm:text-5xl font-bold text-violet-950',
      },
      'Page not found',
    ),
    el(
      'p',
      {
        className: 'max-w-md text-base sm:text-lg text-gray-600',
      },
      "Sorry, the page you're looking for doesn't exist or has been moved.",
    ),
    button,
  );
}
