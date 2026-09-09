import { useState } from 'react';
import { Check } from 'lucide-react';
import { solutions } from '@/data/content';
import { Reveal } from '@/components/Reveal';

export function Solutions() {
  const [active, setActive] = useState(0);

  return (
    <section id="solutions" className="section-padding bg-slate-50/50 dark:bg-slate-900/30">
      <div className="container-narrow">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            Solutions
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Built for{' '}
            <span className="gradient-text">every kind of team</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Whether you’re a two-person startup or a global enterprise, NOVA adapts to how your team works best.
          </p>
        </Reveal>

        {/* Tabs */}
        <Reveal className="mt-12">
          <div className="flex flex-wrap justify-center gap-2">
            {solutions.map((solution, i) => {
              const Icon = solution.icon;
              return (
                <button
                  key={solution.title}
                  onClick={() => setActive(i)}
                  className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                    active === i
                      ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/25'
                      : 'bg-white text-slate-600 hover:bg-brand-50 hover:text-brand-600 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800'
                  }`}
                  aria-pressed={active === i}
                >
                  <Icon className="h-4 w-4" />
                  {solution.title}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Active panel */}
        <Reveal key={active} className="mt-10">
          <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900 sm:p-10">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-lg">
                  {(() => {
                    const Icon = solutions[active].icon;
                    return <Icon className="h-6 w-6" />;
                  })()}
                </div>
                <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
                  {solutions[active].title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">
                  {solutions[active].description}
                </p>
              </div>
              <div>
                <ul className="space-y-3">
                  {solutions[active].points.map((point) => (
                    <li key={point} className="flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-3 dark:bg-slate-800/50">
                      <Check className="h-5 w-5 flex-shrink-0 text-brand-500" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
