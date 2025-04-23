import React from 'react';
import Link from 'next/link';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
