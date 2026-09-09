import { Check, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const benefits = [
  'AI automatically prioritizes tasks based on deadlines and team capacity',
  'Drag-and-drop workflow builder replaces repetitive manual processes',
  'Unified inbox brings comments, mentions, and updates into one place',
  'Real-time dashboards surface blockers before they derail your sprint',
];

export function About() {
  return (
    <section id="about" className="section-padding bg-slate-50/50 dark:bg-slate-900/30">
      <div className="container-narrow">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-brand-200/50 to-accent-300/30 blur-2xl dark:from-brand-900/30 dark:to-accent-900/20" />
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl dark:border-slate-800">
                <img
                  src="https://images.pexels.com/photos/7212946/pexels-photo-7212946.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Team collaborating on projects using NOVA in a modern office"
                  className="w-full"
                  loading="lazy"
                />
              </div>
              {/* Stats badge */}
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:block">
                <p className="font-display text-3xl font-bold gradient-text">4.9/5</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">2,400+ reviews</p>
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <Reveal delay={150}>
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
                About NOVA
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
                One platform to replace{' '}
                <span className="gradient-text">your entire productivity stack</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                NOVA brings project management, task automation, and team collaboration into a single, intuitive workspace. Instead of juggling five disconnected tools, your team gets one source of truth — powered by AI that learns how you work and gets smarter every day.
              </p>

              <ul className="mt-8 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600 dark:bg-brand-900/40 dark:text-brand-400">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                  </li>
                ))}
              </ul>

              <a href="#features" className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300">
                Explore all features
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
