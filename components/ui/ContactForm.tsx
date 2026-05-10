'use client';

import { useState } from 'react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const SERVICE_OPTIONS = [
  { value: '', label: 'What are you looking for?' },
  { value: 'Quick Launch ($2,500)', label: 'Quick Launch — $2,500' },
  { value: 'Professional ($7,500)', label: 'Professional — $7,500' },
  { value: 'Premium ($12,500)', label: 'Premium — $12,500' },
  { value: 'Add-on / other', label: 'Add-on or other' },
  { value: 'Not sure yet', label: 'Not sure yet' },
];

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
    website: '', // honeypot
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? 'Something went wrong.');
        setState('error');
        return;
      }

      setState('success');
    } catch {
      setErrorMsg('Network error. Please try emailing directly.');
      setState('error');
    }
  };

  if (state === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '48px 24px' }}>
        <div style={{
          width: '52px', height: '52px', borderRadius: '50%',
          background: 'rgba(16,185,129,0.1)',
          border: '1px solid rgba(16,185,129,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 16px',
        }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
            stroke="#10b981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4,11 9,16 18,6" />
          </svg>
        </div>
        <div style={{ fontSize: '18px', fontWeight: 700, color: '#f4f3f0', marginBottom: '8px' }}>
          Message sent.
        </div>
        <div style={{ fontSize: '14px', color: 'rgba(244,243,240,0.45)', lineHeight: 1.6 }}>
          I&apos;ll get back to you today.
        </div>
      </div>
    );
  }

  const inputBase: React.CSSProperties = {
    width: '100%',
    background: 'rgba(244,243,240,0.04)',
    border: '1px solid rgba(244,243,240,0.1)',
    borderRadius: '8px',
    padding: '12px 14px',
    fontSize: '14px',
    color: '#f4f3f0',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    transition: 'border-color 0.15s',
  };

  const labelBase: React.CSSProperties = {
    fontSize: '10px',
    fontWeight: 700,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'rgba(244,243,240,0.4)',
    display: 'block',
    marginBottom: '6px',
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '480px', margin: '0 auto' }}>

      {/* Honeypot — invisible to real users */}
      <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
        <input
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={handleChange}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

        {/* Name + Email */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div>
            <label htmlFor="cf-name" style={labelBase}>Name</label>
            <input
              id="cf-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Alex Smith"
              value={form.name}
              onChange={handleChange}
              style={inputBase}
            />
          </div>
          <div>
            <label htmlFor="cf-email" style={labelBase}>Email</label>
            <input
              id="cf-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="alex@example.com"
              value={form.email}
              onChange={handleChange}
              style={inputBase}
            />
          </div>
        </div>

        {/* Service interest */}
        <div>
          <label htmlFor="cf-service" style={labelBase}>I&apos;m interested in</label>
          <select
            id="cf-service"
            name="service"
            value={form.service}
            onChange={handleChange}
            style={{
              ...inputBase,
              color: form.service ? '#f4f3f0' : 'rgba(244,243,240,0.3)',
              cursor: 'pointer',
            }}
          >
            {SERVICE_OPTIONS.map(opt => (
              <option
                key={opt.value}
                value={opt.value}
                style={{ background: '#1e2530', color: '#f4f3f0' }}
              >
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="cf-message" style={labelBase}>Message</label>
          <textarea
            id="cf-message"
            name="message"
            required
            rows={5}
            placeholder="Tell me a bit about your business and what you need..."
            value={form.message}
            onChange={handleChange}
            style={{ ...inputBase, resize: 'vertical', minHeight: '120px' }}
          />
        </div>

        {/* Error */}
        {state === 'error' && (
          <div style={{
            fontSize: '13px', color: '#f87171',
            background: 'rgba(248,113,113,0.07)',
            border: '1px solid rgba(248,113,113,0.18)',
            borderRadius: '7px', padding: '10px 14px',
          }}>
            {errorMsg}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={state === 'loading'}
          style={{
            width: '100%',
            background: 'rgba(8,145,178,0.1)',
            color: '#0891b2',
            border: '1px solid rgba(8,145,178,0.45)',
            boxShadow: '0 0 24px rgba(8,145,178,0.18), inset 0 0 16px rgba(8,145,178,0.07)',
            borderRadius: '8px',
            padding: '13px 0',
            fontSize: '14px',
            fontWeight: 600,
            cursor: state === 'loading' ? 'not-allowed' : 'pointer',
            letterSpacing: '0.01em',
            opacity: state === 'loading' ? 0.6 : 1,
            transition: 'opacity 0.15s',
            fontFamily: 'inherit',
          }}
        >
          {state === 'loading' ? 'Sending…' : 'Send Message'}
        </button>

        {/* Alt contact */}
        <p style={{ textAlign: 'center', fontSize: '12px', color: 'rgba(244,243,240,0.28)', margin: 0, lineHeight: 1.6 }}>
          Or reach out on{' '}
          <a
            href="https://wa.me/525545402582"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgba(244,243,240,0.45)', textDecoration: 'none' }}
          >
            WhatsApp
          </a>
        </p>
      </div>
    </form>
  );
}
