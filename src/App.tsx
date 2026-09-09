import { useState } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TrustedBy } from '@/components/TrustedBy';
import { Features } from '@/components/Features';
import { About } from '@/components/About';
import { HowItWorks } from '@/components/HowItWorks';
import { Stats } from '@/components/Stats';
import { Solutions } from '@/components/Solutions';
import { Testimonials } from '@/components/Testimonials';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { DemoModal } from '@/components/DemoModal';

function App() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-950">
        <Navbar />
        <main>
          <Hero onWatchDemo={() => setDemoOpen(true)} />
          <TrustedBy />
          <Features />
          <About />
          <HowItWorks />
          <Stats />
          <Solutions />
          <Testimonials />
          <Pricing />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <BackToTop />
        <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
      </div>
    </ThemeProvider>
  );
}

export default App;
