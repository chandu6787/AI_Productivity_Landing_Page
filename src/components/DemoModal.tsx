import { useEffect } from 'react';
import { X, Play } from 'lucide-react';

interface DemoModalProps {
  open: boolean;
  onClose: () => void;
}

export function DemoModal({ open, onClose }: DemoModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Product demo video"
    >
      <div
        className="absolute inset-0 animate-fade-in bg-slate-950/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-3xl animate-fade-in-up overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-900">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200"
          aria-label="Close demo modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Video placeholder */}
        <div className="relative aspect-video bg-gradient-to-br from-brand-700 via-brand-600 to-accent-600">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform hover:scale-110">
              <Play className="h-7 w-7 fill-current" />
            </span>
            <p className="text-lg font-semibold">NOVA Product Demo</p>
            <p className="text-sm text-brand-100">See how teams save 12+ hours every week</p>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
            Take a 2-minute tour of NOVA
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Watch how easy it is to set up your first AI-powered workflow, invite your team, and start automating busywork from day one.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="#pricing" onClick={onClose} className="btn-primary">Start Free Trial</a>
            <a href="#features" onClick={onClose} className="btn-secondary">Explore Features</a>
          </div>
        </div>
      </div>
    </div>
  );
}
