"use client";

import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CredibilityBar from "./components/CredibilityBar";
import Services from "./components/Services";
import Work from "./components/Work";
import HowItWorks from "./components/HowItWorks";
import SocialProof from "./components/SocialProof";
import Pricing from "./components/Pricing";
import About from "./components/About";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

const CustomCursor = dynamic(() => import("./components/CustomCursor"), {
  ssr: false,
});

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background selection:bg-agency-accent selection:text-background">
      <div className="noise-overlay" />
      <CustomCursor />
      <CredibilityBar />
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Services />
        <HowItWorks />
        <SocialProof />
        <Pricing />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
