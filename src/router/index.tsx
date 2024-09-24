import type { RouteObject } from 'react-router/dist/lib/context';

import LayoutDefault from '@/layouts/default.tsx';

import About from '@views/About';
import Home from '@views/Home';

const routes = [
    {
        path: '/',
        element: <LayoutDefault />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            }
        ]
    }
] as const satisfies RouteObject[];

export default routes;
