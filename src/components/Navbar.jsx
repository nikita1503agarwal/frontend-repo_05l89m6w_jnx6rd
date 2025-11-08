import { useState } from 'react';
import { Github, Linkedin, Mail, Menu } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 dark:bg-black/40 border-b border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-xl">dev.folio</a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm hover:text-indigo-600 transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition">
            <Linkedin size={18} />
          </a>
          <a href="#contact" aria-label="Email" className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition">
            <Mail size={18} />
          </a>
        </div>

        <button className="md:hidden p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          <Menu size={20} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/10 dark:border-white/10">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm hover:text-indigo-600"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition">
                <Linkedin size={18} />
              </a>
              <a href="#contact" aria-label="Email" className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
