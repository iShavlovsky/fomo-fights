import {useRoutes} from "react-router";
import routes from "./router";
import Error404 from "@views/Error404.tsx";


function App() {
    const views = useRoutes(routes)
    return views ?? <Error404/>
}

export default App
