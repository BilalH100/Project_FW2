import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/layout/Header";
import PromoStrip from "./components/layout/PromoStrip";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState(null);   // { id, name, ... } quand connecté
  const [cartCount, setCartCount] = useState(0);

  const handleLogout = () => setUser(null);

  return (
    <BrowserRouter>
      {/* Header global (logo, recherche, profil, panier) */}
      <Header user={user} cartCount={cartCount} onLogout={handleLogout} />

     

      {/* Navbar principale */}
      <Navbar />

 {/* Bandeau Promo défilant (marquee) */}
      <PromoStrip />
      
      {/* Contenu selon la route */}
      <AppRoutes />

      {/* Pied de page */}
      <Footer />
    </BrowserRouter>
  );
}
