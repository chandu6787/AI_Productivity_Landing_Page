import { Play, ArrowRight, Check } from 'lucide-react';

interface HeroProps {
  onWatchDemo: () => void;
}

export function Hero({ onWatchDemo }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden pt-28 lg:pt-36">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-20 h-96 w-96 animate-blob rounded-full bg-brand-200/40 blur-3xl dark:bg-brand-900/30" />
        <div className="absolute right-0 top-40 h-96 w-96 animate-blob rounded-full bg-accent-400/20 blur-3xl dark:bg-accent-600/20" style={{ animationDelay: '3s' }} />
        <div
          className="absolute inset-0 dark:opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(99 102 241 / 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container-narrow">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left: copy */}
          <div className="animate-fade-in-up text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700 dark:border-brand-800 dark:bg-brand-950 dark:text-brand-300">
              <span className="flex h-2 w-2 rounded-full bg-brand-500" />
              Now with AI-powered workflow suggestions
            </span>

            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Build Better.{' '}
              <span className="gradient-text">Work Smarter.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 lg:mx-0">
              NOVA is the AI productivity platform that helps teams manage projects, automate repetitive tasks, and collaborate effortlessly — all in one beautifully simple workspace.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a href="#pricing" className="btn-primary w-full sm:w-auto">
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </a>
              <button onClick={onWatchDemo} className="btn-secondary w-full sm:w-auto">
                <Play className="h-4 w-4 fill-current" />
                Watch Demo
              </button>
            </div>

            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400 lg:justify-start">
              {['No credit card required', '14-day free trial', 'Cancel anytime'].map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: hero mockup */}
          <div className="animate-fade-in-up relative" style={{ animationDelay: '200ms' }}>
            <div className="relative rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-brand-900/10 dark:border-slate-800 dark:bg-slate-900">
              {/* Window chrome */}
              <div className="flex items-center gap-1.5 px-3 py-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              {/* Dashboard mockup */}
              <div className="overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
                <img
                  src="https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="NOVA analytics dashboard showing project metrics and charts"
                  className="w-full"
                  loading="eager"
                />
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -left-4 top-1/3 hidden animate-float rounded-xl border border-slate-200 bg-white p-3 shadow-lg dark:border-slate-800 dark:bg-slate-900 sm:block">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-900 dark:text-white">Task Automated</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">12 hours saved</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 bottom-8 hidden animate-float rounded-xl border border-slate-200 bg-white p-3 shadow-lg dark:border-slate-800 dark:bg-slate-900 sm:block" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-100 text-brand-600 dark:bg-brand-900/40 dark:text-brand-400">
                  <ArrowRight className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-900 dark:text-white">Velocity +24%</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">This sprint</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
