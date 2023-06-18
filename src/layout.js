import { Header } from './components/header/Header';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div>
            <Header />
            <main className='content'>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;