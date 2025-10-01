import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Loading from './components/Loading/Loading';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can adjust this)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    // Alternative: Wait for all assets to load
    // window.addEventListener('load', () => {
    //   setIsLoading(false);
    // });

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading && <Loading />}

      <div className="App">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;