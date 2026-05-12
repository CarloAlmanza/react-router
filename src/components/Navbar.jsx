import { Link } from 'react-router-dom'

function AppNavbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    FakeStore
                </Link>

                <div className="navbar-nav">
                    <Link className="nav-link" to="/">
                        Home
                    </Link>

                    <Link className="nav-link" to="/chi-siamo">
                        Chi Siamo
                    </Link>

                    <Link className="nav-link" to="/prodotti">
                        Prodotti
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default AppNavbar