"use client";

import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function PageFooter() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  const company = [
    { nameKey: "howItWorks", href: "#how-it-works" },
    { nameKey: "subscription", href: "#subscription" },
  ];

  const resources = [
    { nameKey: "faq", href: "#faq" },
    // { nameKey: "contact", href: "#contact" },
  ];

  const legal = [
    { nameKey: "privacy", href: `/${locale}/privacy-policy` },
    { nameKey: "terms", href: `/${locale}/terms` },
    { nameKey: "contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:hello@dailydrop.io",
      label: "Email",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://instagram.com",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-1">
                <Link href="/" className="inline-block mb-4">
                  <div className="text-2xl font-black bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                    DailyDrop
                  </div>
                </Link>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {t("description")}
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white mb-4">
                  {t("company.title")}
                </h3>
                <ul className="space-y-3">
                  {company.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        href={item.href}
                        className="text-slate-400 hover:text-white text-sm transition-colors"
                      >
                        {t(`company.${item.nameKey}`)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-white mb-4">
                  {t("resources.title")}
                </h3>
                <ul className="space-y-3">
                  {resources.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        href={item.href}
                        className="text-slate-400 hover:text-white text-sm transition-colors"
                      >
                        {t(`resources.${item.nameKey}`)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="font-bold text-white mb-2">
                    {t("contact.title")}
                  </h3>
                  <a
                    href="mailto:hello@dailydrop.io"
                    className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    hello@dailydrop.io
                  </a>
                </div>

                <div className="flex gap-3">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-slate-400 text-sm">
                  &copy; {currentYear} DailyDrop. {t("copyright")}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-6">
                  {legal.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                    >
                      {t(`legal.${item.nameKey}`)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
