import { useState } from 'react';
import { Sparkles, Twitter, Linkedin, Github, Youtube, Send, Check } from 'lucide-react';
import { footerLinks } from '@/data/content';
import { Reveal } from '@/components/Reveal';

const socials = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (valid) {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    } else {
      setStatus('error');
    }
  };

  return (
    <footer id="contact" className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="container-narrow py-16">
        {/* Newsletter */}
        <Reveal>
          <div className="grid gap-8 border-b border-slate-200 pb-12 dark:border-slate-800 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                Stay in the loop
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Get product updates, tips, and productivity insights delivered monthly. No spam.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="flex-1">
                  <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder="you@company.com"
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 dark:bg-slate-900 dark:text-white ${
                      status === 'error'
                        ? 'border-red-400 focus:ring-red-400'
                        : 'border-slate-300 focus:ring-brand-500 dark:border-slate-700'
                    }`}
                    aria-invalid={status === 'error'}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Subscribe
                  <Send className="h-4 w-4" />
                </button>
              </div>
              {status === 'success' && (
                <p className="mt-2 flex items-center gap-1.5 text-sm text-green-600 dark:text-green-400">
                  <Check className="h-4 w-4" />
                  You’re subscribed! Check your inbox to confirm.
                </p>
              )}
              {status === 'error' && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                  Please enter a valid email address.
                </p>
              )}
            </form>
          </div>
        </Reveal>

        {/* Links */}
        <div className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 font-display text-xl font-bold text-slate-900 dark:text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-white">
                <Sparkles className="h-5 w-5" />
              </span>
              NOVA
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              The AI productivity platform that helps teams build better and work smarter.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all hover:border-brand-400 hover:bg-brand-50 hover:text-brand-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-brand-600 dark:hover:bg-slate-800 dark:hover:text-brand-400"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{heading}</h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 dark:border-slate-800 sm:flex-row">
          <p className="text-sm text-slate-500 dark:text-slate-500">
            &copy; {new Date().getFullYear()} NOVA Inc. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-500">
            Built with React, Vite &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
