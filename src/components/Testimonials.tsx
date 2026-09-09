import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { testimonials } from '@/data/content';
import { Reveal } from '@/components/Reveal';

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => setCurrent((prev) => (prev + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next, isPaused]);

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-narrow">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            Testimonials
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Loved by teams{' '}
            <span className="gradient-text">around the world</span>
          </h2>
        </Reveal>

        <Reveal className="mt-12">
          <div
            className="relative mx-auto max-w-3xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Carousel */}
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {testimonials.map((t) => (
                  <div key={t.name} className="w-full flex-shrink-0 px-1">
                    <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-lg dark:border-slate-800 dark:bg-slate-900 sm:p-12">
                      <Quote className="mx-auto h-10 w-10 text-brand-200 dark:text-brand-800" />
                      <div className="mt-4 flex justify-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <blockquote className="mt-6 text-lg font-medium leading-relaxed text-slate-800 dark:text-slate-200">
                        &ldquo;{t.quote}&rdquo;
                      </blockquote>
                      <div className="mt-8 flex items-center justify-center gap-4">
                        <img
                          src={t.image}
                          alt={`Portrait of ${t.name}`}
                          className="h-14 w-14 rounded-full object-cover ring-2 ring-brand-200 dark:ring-brand-800"
                          loading="lazy"
                        />
                        <div className="text-left">
                          <p className="font-bold text-slate-900 dark:text-white">{t.name}</p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <button
              onClick={prev}
              className="absolute -left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-lg transition-all hover:bg-brand-600 hover:text-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 sm:-left-5"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="absolute -right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-lg transition-all hover:bg-brand-600 hover:text-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 sm:-right-5"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    current === i ? 'w-8 bg-brand-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
