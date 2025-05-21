"use client";

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import UseCases from '@/components/UseCases';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';

export default function Home() {
  return (
    <main className="min-h-screen bg-off-black text-white overflow-x-hidden">
      <Analytics />
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <UseCases />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}