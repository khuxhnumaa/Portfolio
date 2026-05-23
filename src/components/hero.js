import React from 'react';
import '../styles/animations.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-name">Khushnuma Parveen</h1>
                <h2 className="hero-title">Machine Learning Engineer</h2>
                <div className="hero-animation">
                    <img src="/assets/animate.webp" alt="Animated Hero" className="animated-image" />
                </div>
            </div>
        </section>
    );
};

export default Hero;