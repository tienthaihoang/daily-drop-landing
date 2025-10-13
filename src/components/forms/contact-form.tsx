"use client";

import { useState } from 'react';
import { X, Mail, User, MessageSquare, Send } from 'lucide-react';
import { Modal, message } from 'antd';
import { useTranslations } from 'next-intl';

interface ContactFormProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactForm({ open, onClose }: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const t = useTranslations('contact');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        message.success(t('success'));
        setFormData({ name: '', email: '', message: '' });
        onClose();
      } else {
        message.error(data.error || t('error'));
      }
    } catch (error: unknown) {
      console.error('Form submission error:', error);
      const errorMessage = error instanceof Error 
        ? error.message 
        : t('error');
      message.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={600}
      closeIcon={<X className="w-5 h-5" />}
    >
      <div className="md:p-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 mb-4">
            <Mail className="w-8 h-8 text-purple-600" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-2">
            {t('title')}
          </h2>
          <p className="text-slate-600">
            {t('subtitle')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
              {t('name')} *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
              {t('email')} *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
              {t('message')} *
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder={t('placeholder')}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                {t('sending')}
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                {t('send')}
              </>
            )}
          </button>
        </form>
      </div>
    </Modal>
  );
}