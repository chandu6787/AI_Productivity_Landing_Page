const logos = ['Quantum', 'Nexora', 'Brightloop', 'Lumora', 'Northwind', 'Vertex'];

export function TrustedBy() {
  return (
    <section className="border-y border-slate-200/60 bg-slate-50/50 py-12 dark:border-slate-800/60 dark:bg-slate-900/30">
      <div className="container-narrow">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
          Trusted by 10,000+ forward-thinking teams
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-16">
          {logos.map((logo) => (
            <span
              key={logo}
              className="font-display text-xl font-bold text-slate-400 grayscale transition-all duration-300 hover:text-slate-600 dark:text-slate-600 dark:hover:text-slate-400"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
