"use client";

import { useState } from "react";
import Link from "next/link";

export default function SupportPage() {
  const [form, setForm] = useState({ name: "", email: "", product: "", subject: "", description: "" });
  const [status, setStatus] = useState<null | "idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch('/api/support', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: "", email: "", product: "", subject: "", description: "" });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <main className="pt-16">
      <section className="py-20 bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Support Center</h1>
            <p className="text-muted-foreground mb-6">Submit a ticket and our support team will respond within one business day.</p>

            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded">Your ticket was submitted successfully. We'll email you updates.</div>
            )}

            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required placeholder="Full name" className="input" />
                <input value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required type="email" placeholder="Email" className="input" />
              </div>

              <input value={form.product} onChange={(e) => setForm({...form, product: e.target.value})} placeholder="Product (optional)" className="input" />
              <input value={form.subject} onChange={(e) => setForm({...form, subject: e.target.value})} required placeholder="Subject" className="input" />
              <textarea value={form.description} onChange={(e) => setForm({...form, description: e.target.value})} required placeholder="Describe your issue" className="input h-36" />

              <div className="flex items-center gap-3">
                <button type="submit" disabled={status === 'sending'} className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold">
                  {status === 'sending' ? 'Sending...' : 'Submit Ticket'}
                </button>
                <Link href="/resources" className="text-sm text-muted-foreground">Back to Resources</Link>
              </div>
            </form>

            <div className="mt-8 text-sm text-muted-foreground">
              <p>For urgent issues, please contact <a href="mailto:support@dcf.example" className="text-primary">support@dcf.example</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
