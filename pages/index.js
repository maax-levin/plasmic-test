import Head from 'next/head';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ProjectHighlights from '../components/ProjectHighlights';
import ProjectGallery from '../components/ProjectGallery';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio - UI/UX Designer</title>
        <meta name="description" content="Modern UI/UX Designer Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Custom Cursor */}
      <motion.div
        className="cursor"
        animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      <Navigation />
      
      <main className="main-content">
        <Hero />
        <About />
        <ProjectHighlights />
        <ProjectGallery />
        <Contact />
      </main>
    </>
  );
}