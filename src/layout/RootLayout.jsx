import { NavLink, Outlet } from 'react-router-dom';

function RootLayout () {
    return (
        <div className="layout-default">
            <header>
                <NavLink to="/">Home</NavLink>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout;