import './styles/index.css';

import {createRoot} from 'react-dom/client';
import {HashRouter} from 'react-router-dom';

import App from './App.tsx';
// import {SolanaWalletProvider} from "@/providers/SolanaWalletProvider.tsx";

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

// root.render(
//     <StrictMode>
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </StrictMode>
// );

root.render(
    <HashRouter>
        {/*<SolanaWalletProvider>*/}
            <App/>
        {/*</SolanaWalletProvider>*/}
    </HashRouter>
);
