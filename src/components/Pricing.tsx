import { useState } from 'react';
import { Check, Star } from 'lucide-react';
import { pricingPlans } from '@/data/content';
import { Reveal } from '@/components/Reveal';

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="section-padding bg-slate-50/50 dark:bg-slate-900/30">
      <div className="container-narrow">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            Pricing
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Simple, transparent{' '}
            <span className="gradient-text">pricing that scales</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Start free, upgrade when you’re ready. No hidden fees, no surprises.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center gap-3">
            <span className={`text-sm font-medium ${!annual ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual((prev) => !prev)}
              className="relative h-7 w-14 rounded-full bg-slate-200 transition-colors dark:bg-slate-700"
              role="switch"
              aria-checked={annual}
              aria-label="Toggle annual billing"
            >
              <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-brand-600 shadow transition-transform duration-300 ${
                  annual ? 'translate-x-8' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${annual ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>
              Annual
            </span>
            <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700 dark:bg-green-900/40 dark:text-green-400">
              Save 20%
            </span>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => {
            const price = annual ? plan.annual : plan.monthly;
            return (
              <Reveal key={plan.name} delay={i * 100}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
                    plan.popular
                      ? 'border-brand-500 bg-white shadow-2xl shadow-brand-600/20 dark:border-brand-500 dark:bg-slate-900 lg:scale-105'
                      : 'border-slate-200 bg-white shadow-sm hover:shadow-xl dark:border-slate-800 dark:bg-slate-900'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-brand-600 to-accent-500 px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
                      <Star className="h-3 w-3 fill-current" />
                      Most Popular
                    </span>
                  )}

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{plan.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {plan.description}
                  </p>

                  <div className="mt-6">
                    {price === null ? (
                      <p className="font-display text-4xl font-extrabold text-slate-900 dark:text-white">Custom</p>
                    ) : price === 0 ? (
                      <p className="font-display text-4xl font-extrabold text-slate-900 dark:text-white">Free</p>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="font-display text-4xl font-extrabold text-slate-900 dark:text-white">${price}</span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">/user/mo</span>
                      </div>
                    )}
                    {price !== null && price > 0 && (
                      <p className="mt-1 text-xs text-slate-400">
                        {annual ? 'billed annually' : 'billed monthly'}
                      </p>
                    )}
                  </div>

                  <a
                    href="#contact"
                    className={`mt-6 w-full ${
                      plan.popular ? 'btn-primary' : 'btn-secondary'
                    }`}
                  >
                    {plan.cta}
                  </a>

                  <ul className="mt-8 space-y-3 border-t border-slate-200 pt-6 dark:border-slate-800">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600 dark:bg-brand-900/40 dark:text-brand-400">
                          <Check className="h-3 w-3" />
                        </span>
                        <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
