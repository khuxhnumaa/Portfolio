import React from 'react';
import './styles/global.css'; // Import global styles
import './styles/animations.css'; // Import animations

import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Footer from './components/footer';
import Projects from './components/projects';

const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Footer />
            <Projects />
        </div>
    );
};

export default App;