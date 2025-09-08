import { NavLink } from "react-router-dom";
import "../../styles/Navbar.css";


function Navbar() {
  return (
    <nav className="main-navbar">
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop" className={({ isActive }) => (isActive ? "active" : "")}>
            Boutique
          </NavLink>
        </li>
        <li>
          <NavLink to="/promotions" className={({ isActive }) => (isActive ? "active" : "")}>
            Promotions
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            À propos
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
