import LayoutDefault from '@/layouts/default.tsx';

import Home from '@views/Home';
import Staking from '@views/Staking';
import {RouteObject} from "react-router-dom";

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
] satisfies RouteObject[];

export default routes;
