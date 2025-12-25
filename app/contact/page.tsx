'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import siteConfig from '@/data/siteConfig.json';

export default function ContactPage() {
  const { businessInfo } = siteConfig;
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again or call us directly.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero
        image="/images/hero-contact.jpg"
        alt="Contact Cigar and Smoke Shop"
        height="medium"
      />

      {/* Contact Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              We are here to help! Come into our store or contact us using the form below if you 
              have any questions or suggestions about the store.
            </h1>
            <p className="text-xl font-semibold">
              GIVE US A CALL AT:{' '}
              <a href={`tel:${businessInfo.contact.phone}`} className="hover:text-gray-600">
                {businessInfo.contact.phone}
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  Name <span className="text-red-500">(required)</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="sr-only">Last Name</span>&nbsp;
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span className="text-red-500">(required)</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject <span className="text-red-500">(required)</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message <span className="text-red-500">(required)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'SENDING...' : 'SUBMIT'}
              </button>
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md">
                {errorMessage}
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

