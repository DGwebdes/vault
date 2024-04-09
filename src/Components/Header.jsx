import { Link } from "react-router-dom";
import logo from '../../public/vault-logo.svg'

const Header = () => {
    return (
        <nav>
            <Link>
                <img className="nav-logo" src={logo} alt="logo"/>
            </Link>
            <Link to={'/vault'} className="links">Root</Link>
        </nav>
    );
};

export default Header;
