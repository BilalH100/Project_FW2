import { useState, useEffect } from "react";
import hero1 from "../../assets/hero1.jpg";

// You can add more images later like this:
// import promo2 from "../../assets/promo2.jpg";

const slides = [hero1];

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (slides.length === 0) return; // prevent errors if no images
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-slider" id="home">
      {slides.length > 0 && (
        <img src={slides[current]} alt="Hero" className="hero-slide" />
      )}
      <div className="hero-text">
        <h2>Discover Our Premium Chicha</h2>
        <p>Enjoy exclusive flavors and offers every week!</p>
        <button>Shop Now</button>
      </div>
    </section>
  );
}

export default HeroSlider;
