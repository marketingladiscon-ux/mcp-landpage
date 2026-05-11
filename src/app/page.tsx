import React from 'react';
import Hero from './components/Hero';
import VideoSalesLetter from './components/VideoSalesLetter';
import Method from './components/Method';
import DiagnosticCTA from './components/DiagnosticCTA';
import Checkout from './components/Checkout';

export default function Home() {
  return (
    <main>
      <Hero />
      <VideoSalesLetter />
      <Method />
      <DiagnosticCTA />
      <Checkout />
    </main>
  );
}
