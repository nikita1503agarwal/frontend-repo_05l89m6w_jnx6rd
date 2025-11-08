import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="py-10 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-black/60 dark:text-white/60">
        <p>© {new Date().getFullYear()} Your Name — All rights reserved.</p>
        <p className="opacity-80">Built with React, Tailwind & Spline</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
