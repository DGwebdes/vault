import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <img src='../public/cubes.png' alt="logo"/>
            <ul>
                <li><Link to={'/'}>Root</Link></li>
                {/* <li><Link to={'/portfolio'}>Portfolio</Link></li> */}
            </ul>
        </nav>
    );
};

export default Header;
