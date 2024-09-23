import Home from '@views/Home';
import About from '@views/About';
import LayoutDefault from "@/layouts/default.tsx";

const routes = [
    {
        path: '/',
        element: <LayoutDefault/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'about',
                element: <About/>
            }
        ]
    }
];

export default routes;
