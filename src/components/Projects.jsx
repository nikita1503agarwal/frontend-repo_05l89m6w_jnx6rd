import { useMemo } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projectsData = [
  {
    title: 'Neon Dashboard',
    description:
      'A realtime analytics dashboard with 3D charts and smooth microinteractions built with React, Three.js, and websockets.',
    tags: ['React', 'Three.js', 'WebSockets'],
    live: '#',
    repo: '#',
    color: 'from-fuchsia-500/20 to-indigo-500/20',
  },
  {
    title: 'Creative Studio Site',
    description:
      'Portfolio for a design studio featuring Spline scenes, parallax scroll, and tasteful motion for an editorial feel.',
    tags: ['Spline', 'Framer Motion', 'Tailwind'],
    live: '#',
    repo: '#',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'E‑commerce Starter',
    description:
      'Headless storefront with cart, checkout, and CMS integration. Optimized for Core Web Vitals and A11y.',
    tags: ['Next.js', 'Stripe', 'CMS'],
    live: '#',
    repo: '#',
    color: 'from-amber-500/20 to-rose-500/20',
  },
];

export default function Projects() {
  const projects = useMemo(() => projectsData, []);

  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-indigo-50/60 to-transparent dark:via-indigo-950/30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected Work</h2>
            <p className="text-sm text-black/60 dark:text-white/60 mt-2">A few projects that blend aesthetics, performance, and interactivity.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex text-sm font-medium text-indigo-600 hover:text-indigo-500">Let’s collaborate →</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur p-5 hover:shadow-lg transition">
              <div className={`h-36 rounded-lg bg-gradient-to-br ${p.color} mb-4`} />
              <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
              <p className="text-sm text-black/70 dark:text-white/70 mb-3">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-1 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10">{t}</span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <a href={p.live} className="inline-flex items-center gap-1 text-sm font-medium hover:text-indigo-600"><ExternalLink size={14} /> Live</a>
                <a href={p.repo} className="inline-flex items-center gap-1 text-sm font-medium hover:text-indigo-600"><Github size={14} /> Code</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
