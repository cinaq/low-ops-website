import { FC } from 'react';

const HeroSection: FC = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <h1>Welcome to Our Website</h1>
        <p>Discover amazing content and services</p>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;
