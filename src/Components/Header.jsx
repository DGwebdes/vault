import { Link } from "react-router-dom";
import logo from '../../public/vault-logo.svg'

const Header = () => {
    return (
        <nav>
            <Link>
                <img to={'/'} className="nav-logo" src={logo} alt="logo"/>
            </Link>
            <Link to={'/'} className="links">Root</Link>
        </nav>
    );
};

export default Header;
