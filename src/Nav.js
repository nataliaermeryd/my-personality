import './App.css';
import { Link } from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: 'white'
    }

  return (
        <nav>
            <h3>LOGO</h3>
            <ul className="nav-links">
                <Link style={navStyle} to="/about">
                    <li>ABOUT</li>
                </Link>
                <Link style={navStyle} to="/music">
                    <li>MUSIC</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;