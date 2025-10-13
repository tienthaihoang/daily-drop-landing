"use client";

import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function PageFooter() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  const company = [
    { nameKey: "howItWorks", href: "#how-it-works" },
    { nameKey: "pricing", href: "#pricing" },
    { nameKey: "services", href: "#services" },
    { nameKey: "reviews", href: "#reviews" },
  ];

  const resources = [
    { nameKey: "faq", href: "#faq" },
    { nameKey: "contact", href: "#contact" },
  ];

  const legal = [
    { nameKey: "terms", href: `/${locale}/terms` },
    { nameKey: "privacy", href: `/${locale}/privacy-policy` },
  ];

  const socialLinks = [
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
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      href: "https://youtube.com",
      label: "YouTube",
    },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="lg:col-span-2">
                <Link href="/" className="inline-block mb-6">
                  <div className="text-2xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                    Daily Drop
                  </div>
                </Link>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {t("description")}
                </p>

                <div className="flex gap-3">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
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

            <div className="pt-8 border-t border-slate-800">
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
