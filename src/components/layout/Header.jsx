import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import "../../styles/Header.css";


export default function Header({ user, cartCount = 0, onLogout }) {
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!q.trim()) return;
    navigate(`/search?q=${encodeURIComponent(q.trim())}`);
  };

  return (
    <header className="header">
      <div className="header-inner">
        {/* Logo */}
        <Link to="/" className="logo">
          LeBazzar
        </Link>

        {/* Barre de recherche */}
        <form className="search-bar" onSubmit={onSubmit}>
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Recherche..."
          />
          <button type="submit">
            <FiSearch />
          </button>
        </form>

        {/* Icônes */}
        <div className="header-icons">
          {user ? (
            <div className="profile">
              <Link to="/account" title="Mon compte">
                <FiUser />
              </Link>
              <button onClick={onLogout} className="logout-btn">
                Déconnexion
              </button>
            </div>
          ) : (
            <Link to="/login" title="Se connecter">
              <FiUser />
            </Link>
          )}

          <Link to="/cart" className="cart-icon" title="Panier">
            <FiShoppingCart />
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
}
