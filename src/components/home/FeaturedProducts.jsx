import p1 from "../../assets/product1.jpg";
import p2 from "../../assets/product2.jpg";
import p3 from "../../assets/product3.jpg";
import p4 from "../../assets/product4.jpg";
import p5 from "../../assets/product5.jpg";
import p6 from "../../assets/product6.jpg";

function FeaturedProducts() {
  const products = [
    { name: "Mint Fresh", price: "$10", description: "Refreshing mint flavor.", image: p1 },
    { name: "Double Apple", price: "$12", description: "Classic double apple taste.", image: p2 },
    { name: "Blueberry Ice", price: "$11", description: "Sweet blueberry with cooling effect.", image: p3 },
    { name: "Watermelon Splash", price: "$10", description: "Juicy watermelon flavor.", image: p4 },
    { name: "Grapefruit Twist", price: "$11", description: "Tangy grapefruit taste.", image: p5 },
    { name: "Vanilla Dream", price: "$9", description: "Smooth vanilla aroma.", image: p6 },
  ];

  return (
    <section className="featured-products" id="shop">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {products.map((p, i) => (
          <div key={i} className="product-card">
            <img src={p.image} alt={p.name} className="product-image" />
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <p>{p.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
