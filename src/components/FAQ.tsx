import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/content';
import { Reveal } from '@/components/Reveal';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding">
      <div className="container-narrow">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            FAQ
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Questions?{' '}
            <span className="gradient-text">We’ve got answers</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Can’t find what you’re looking for? Reach out to our team anytime.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-xl border transition-colors ${
                    isOpen
                      ? 'border-brand-300 bg-brand-50/50 dark:border-brand-700 dark:bg-brand-950/20'
                      : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                  >
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 text-brand-600 transition-transform duration-300 dark:text-brand-400 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
