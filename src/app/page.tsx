import React from 'react';
import Hero from './components/Hero';
import VideoSalesLetter from './components/VideoSalesLetter';
import About from './components/About';
import Method from './components/Method';
import DiagnosticCTA from './components/DiagnosticCTA';
import Testimonials from './components/Testimonials';
import Bio from './components/Bio';
import Checkout from './components/Checkout';
import FAQ from './components/FAQ';

export default function Home() {
  return (
    <main>
      <Hero />
      <VideoSalesLetter />
      <About />
      <Method />
      <DiagnosticCTA />
      <Testimonials />
      <Bio />
      <Checkout />
      <FAQ />
    </main>
  );
}
