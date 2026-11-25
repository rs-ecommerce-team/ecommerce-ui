import '@/src/style.css';

import { el } from '@/helpers/el';
import { createMainLayout } from './app/layouts/main-layout';
import { createRouter } from './routing/router';

const body = document.body;

const pageContainer = el('main');
const router = createRouter(pageContainer);

const layout = createMainLayout(router.navigate, pageContainer);

body?.append(layout);
router.start();
