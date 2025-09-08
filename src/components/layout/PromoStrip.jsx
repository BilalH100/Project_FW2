import "../../styles/PromoStrip.css";

export default function PromoStrip() {
  const items = [
    "🚚 Livraison rapide 24–48h partout au Maroc",
    "🛡️ Qualité garantie • Produits certifiés",
    "📞 Support 7j/7 via WhatsApp",
  ];

  return (
    <div className="promostrip">
      <div className="promostrip-track">
        {/* On double le contenu pour créer l'effet de boucle infinie */}
        <div className="promostrip-content">
          {items.map((text, i) => (
            <span key={i} className="ps-item">{text}</span>
          ))}
        </div>
        <div className="promostrip-content">
          {items.map((text, i) => (
            <span key={i} className="ps-item">{text}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
