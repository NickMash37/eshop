import { Header } from './components/header/Header';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div>
            <main className='content'>
                <Header />
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;