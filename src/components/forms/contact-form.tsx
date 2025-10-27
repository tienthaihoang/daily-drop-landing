"use client";

import { Modal, message } from "antd";
import {
  Briefcase,
  Building2,
  Mail,
  MessageSquare,
  Send,
  User,
  X,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

interface ContactFormProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactForm({ open, onClose }: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    department: "",
    message: "",
  });

  const t = useTranslations("contact");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setShowThankYou(true);
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          department: "",
          message: "",
        });

        setTimeout(() => {
          setShowThankYou(false);
          onClose();
        }, 5000);
      } else {
        message.error(data.error || t("error"));
      }
    } catch (error: unknown) {
      console.error("Form submission error:", error);
      const errorMessage = error instanceof Error ? error.message : t("error");
      message.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClose = () => {
    setShowThankYou(false);
    onClose();
  };

  if (showThankYou) {
    return (
      <Modal
        open={open}
        onCancel={handleClose}
        footer={null}
        width={500}
        closeIcon={<X className="w-5 h-5 text-slate-400" />}
        className="contact-modal"
      >
        <div className="p-8 text-center bg-slate-900 rounded-lg">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-600/20 to-indigo-600/20 border border-purple-500/30 mb-6">
            <svg
              className="w-10 h-10 text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h2 className="text-3xl font-black text-white mb-4">
            {t("thankYou.title")}
          </h2>
          <p className="text-lg text-slate-300 mb-6">
            {t("thankYou.subtitle")}
          </p>
          <p className="text-sm text-slate-400 mb-8">{t("thankYou.message")}</p>

          <button
            onClick={handleClose}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold px-8 py-3 rounded-xl shadow-xl shadow-purple-900/50 hover:shadow-2xl hover:shadow-purple-800/50 transition-all duration-300 hover:scale-105"
          >
            {t("thankYou.button")}
          </button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={650}
      closeIcon={<X className="w-5 h-5 text-slate-400" />}
      className="contact-modal"
    >
      <div className="p-6 bg-slate-900 rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-white mb-2">{t("title")}</h2>
          <p className="text-slate-300">{t("subtitle")}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-semibold text-white mb-2"
            >
              {t("fullName")} <span className="text-purple-400">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder={t("fullNamePlaceholder")}
                className="w-full pl-11 pr-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="companyName"
              className="block text-sm font-semibold text-white mb-2"
            >
              {t("companyName")}
            </label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder={t("companyNamePlaceholder")}
                className="w-full pl-11 pr-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-white mb-2"
            >
              {t("email")} <span className="text-purple-400">*</span>
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
                placeholder={t("emailPlaceholder")}
                className="w-full pl-11 pr-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="department"
              className="block text-sm font-semibold text-white mb-2"
            >
              {t("department")}
            </label>
            <div className="relative">
              <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder={t("departmentPlaceholder")}
                className="w-full pl-11 pr-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-white mb-2"
            >
              {t("message")} <span className="text-purple-400">*</span>
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
                placeholder={t("messagePlaceholder")}
                className="w-full pl-11 pr-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl shadow-xl shadow-purple-900/50 hover:shadow-2xl hover:shadow-purple-800/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                {t("sending")}
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                {t("send")}
              </>
            )}
          </button>
        </form>
      </div>
    </Modal>
  );
}
