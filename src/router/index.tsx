import type { RouteObject } from 'react-router/dist/lib/context';

import LayoutDefault from '@/layouts/default.tsx';

import Home from '@views/Home';
import Staking from '@views/Staking';

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
                path: 'staking',
                element: <Staking />
            }
        ]
    }
] as const satisfies RouteObject[];

export default routes;
