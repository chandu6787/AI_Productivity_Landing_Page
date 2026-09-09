import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function FinalCTA() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-accent-600 px-6 py-16 text-center shadow-2xl shadow-brand-600/20 sm:px-12 lg:py-24">
            {/* Decorative blobs */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-accent-400/20 blur-2xl" />
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                backgroundSize: '32px 32px',
              }}
            />

            <div className="relative">
              <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                Ready to work smarter?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-100">
                Join 10,000+ teams already using NOVA to ship faster, automate busywork, and stay perfectly in sync.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-brand-700 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Start Free Trial
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10"
                >
                  Talk to Sales
                </a>
              </div>
              <p className="mt-6 text-sm text-brand-200">No credit card required &middot; 14-day free trial &middot; Cancel anytime</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
