import { NavLink, Outlet, useLocation } from 'react-router-dom';

function RootLayout () {
    const location = useLocation();
    console.log(location);
    const pathName = location.pathname.split('/')[1];
    const defaultPath = location.pathname === '/';

    return (
        <div className="layout-default">
            <header>
                <NavLink to="/">Home</NavLink>
                { !defaultPath && <NavLink>{pathName}</NavLink> }
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout;