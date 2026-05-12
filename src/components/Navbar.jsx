import { NavLink } from 'react-router-dom'

function AppNavbar() {
    const getNavClass = ({ isActive }) =>
        isActive
            ? 'nav-link active'
            : 'nav-link'

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    FakeStore
                </NavLink>

                <div className="navbar-nav">
                    <NavLink to="/" className={getNavClass}>
                        Home
                    </NavLink>

                    <NavLink
                        to="/chi-siamo"
                        className={getNavClass}
                    >
                        Chi Siamo
                    </NavLink>

                    <NavLink
                        to="/prodotti"
                        className={getNavClass}
                    >
                        Prodotti
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default AppNavbar