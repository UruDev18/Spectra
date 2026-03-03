import { useEffect } from 'react';
import { CursorFlare } from './components/CursorFlare';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClinicGrid } from './components/ClinicGrid';
import { Services } from './components/Services';
import { Results } from './components/Results';
import { Booking } from './components/Booking';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-base-bg text-text-primary selection:bg-highlight-tech/30 selection:text-white">
      <CursorFlare />
      <Navbar />
      <main>
        <Hero />
        <ClinicGrid />
        <Services />
        <Results />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
