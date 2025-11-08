import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    // Dummy submit to showcase interaction
    await new Promise((res) => setTimeout(res, 900));
    setStatus('sent');
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur px-3 py-1 text-xs mb-3">
            <Mail size={14} /> Let’s talk
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Tell me about your project</h2>
          <p className="text-sm text-black/60 dark:text-white/60 mt-2">I usually reply within a day. Happy to sign an NDA.</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs mb-1">Name</label>
              <input required type="text" className="w-full rounded-md border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/40 backdrop-blur px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-xs mb-1">Email</label>
              <input required type="email" className="w-full rounded-md border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/40 backdrop-blur px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
          <div>
            <label className="block text-xs mb-1">Message</label>
            <textarea required rows={5} className="w-full rounded-md border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/40 backdrop-blur px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <button type="submit" disabled={status==='loading' || status==='sent'} className="inline-flex items-center gap-2 rounded-md bg-indigo-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-indigo-500 disabled:opacity-60">
            {status === 'sent' ? 'Message sent!' : status === 'loading' ? 'Sending...' : (<span className="inline-flex items-center gap-2"><Send size={16}/> Send message</span>)}
          </button>
        </form>
      </div>
    </section>
  );
}
