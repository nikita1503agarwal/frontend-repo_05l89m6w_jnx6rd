import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent dark:from-black dark:via-black/60"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 flex flex-col gap-6">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur px-3 py-1 text-xs">
          <span className="size-2 rounded-full bg-emerald-500" /> Available for freelance
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          I craft playful, modern web experiences
        </h1>
        <p className="max-w-2xl text-base sm:text-lg text-black/70 dark:text-white/70">
          Full‑stack web developer specializing in interactive 3D, creative UI, and high‑performance apps. Let’s build something memorable.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-indigo-500 transition">
            See my work <ArrowRight size={16} />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur px-4 py-2 text-sm font-medium hover:border-indigo-400 transition">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
