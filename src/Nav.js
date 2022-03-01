import './App.css';
import { Link } from 'react-router-dom';

function Nav() {

  return (
        <nav>
            <h3><Link style={{color: 'white', textDecoration: 'none'}} to="/">⦒NATTA⦑</Link></h3>
            <ul className="nav-links">
                <Link style={{color: 'white', textDecoration: 'none'}} to="/about">
                    <li>⦒ABOUT⦑</li>
                </Link>
                <Link style={{color: 'white', textDecoration: 'none'}} to="/music">
                    <li>⦒MUSIC⦑</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;