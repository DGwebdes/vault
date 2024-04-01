import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <Link>
                <img className="nav-logo" src='https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="logo"/>
            </Link>
            <Link to={'/vault'} className="links">Root</Link>
        </nav>
    );
};

export default Header;
