import NavBar from '@components/NavBar';
import Footer from '@components/Footer';
import {Outlet} from 'react-router';

function LayoutDefault() {
    return (
        <>
            <NavBar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
}

export default LayoutDefault;
