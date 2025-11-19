"use client";

import React, { useState, useEffect } from 'react';
import { X, Download, Mail, User, CheckCircle2 } from 'lucide-react';

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
  leadType: 'pricing-guide' | 'event-calendar' | 'roi-calculator';
  title: string;
  description: string;
}

export default function LeadMagnetModal({ isOpen, onClose, leadType, title, description }: LeadMagnetModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    _hp: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Reset form when modal closes
      setFormData({ name: '', email: '', _hp: '' });
      setStatus('idle');
      setMessage('');
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      setStatus('error');
      setMessage('Please fill in all fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          leadType,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setMessage(data.message);
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('There was an issue. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-black-card border border-gold-base/30 rounded-2xl shadow-2xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-mid hover:text-gold-highlight transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Header */}
        <div className="bg-gold-gradient p-8 text-center">
          <div className="w-16 h-16 bg-black-hero/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Download className="h-8 w-8 text-black-hero" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-black-hero mb-2">{title}</h2>
          <p className="text-black-hero/80">{description}</p>
        </div>

        {/* Content */}
        <div className="p-8">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-text-light mb-3">Check Your Email!</h3>
              <p className="text-text-mid mb-6">{message}</p>
              <button
                onClick={onClose}
                className="luxury-button"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <p className="text-text-mid mb-6 text-center">
                Enter your details below and we'll send your free download directly to your inbox.
              </p>

              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
                  {message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="lead-name" className="block text-sm font-medium text-text-light mb-2">
                    Your Name <span className="text-gold-base">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-mid" />
                    <input
                      type="text"
                      id="lead-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full pl-11 pr-4 py-3 bg-black-hero border border-gold-base/20 rounded-xl text-text-light placeholder-text-mid focus:outline-none focus:border-gold-base focus:ring-2 focus:ring-gold-base/30"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="lead-email" className="block text-sm font-medium text-text-light mb-2">
                    Email Address <span className="text-gold-base">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-mid" />
                    <input
                      type="email"
                      id="lead-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full pl-11 pr-4 py-3 bg-black-hero border border-gold-base/20 rounded-xl text-text-light placeholder-text-mid focus:outline-none focus:border-gold-base focus:ring-2 focus:ring-gold-base/30"
                    />
                  </div>
                </div>

                {/* Honeypot */}
                <input
                  type="text"
                  name="_hp"
                  value={formData._hp}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full luxury-button flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Download className="h-5 w-5" />
                      Get Free Download
                    </>
                  )}
                </button>

                <p className="text-xs text-text-mid text-center">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
