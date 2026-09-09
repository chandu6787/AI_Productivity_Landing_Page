import { howItWorksSteps } from '@/data/content';
import { Reveal } from '@/components/Reveal';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container-narrow">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            How It Works
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Up and running in{' '}
            <span className="gradient-text">four simple steps</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            From signup to your first automated workflow in under 15 minutes. No consultants, no setup fees, no headaches.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorksSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 100}>
              <div className="relative h-full">
                {/* Connector line */}
                {i < howItWorksSteps.length - 1 && (
                  <div className="absolute top-8 left-16 hidden h-px w-full bg-gradient-to-r from-brand-300 to-transparent dark:from-brand-700 lg:block" />
                )}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 font-display text-xl font-bold text-white shadow-lg shadow-brand-600/25">
                  {step.number}
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
