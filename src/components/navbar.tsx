"use client";

import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { Select } from "antd";
import { useLocale, useTranslations } from "next-intl";
import { useState, useTransition } from "react";
import { site } from "../config/site";
import ContactForm from "./forms/contact-form";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("nav");

  const onLanguageChange = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[999]">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="backdrop-blur-md bg-white/70 shadow-sm border-b border-gray-200 rounded-2xl px-4 md:px-6">
            <div className="grid grid-cols-12 items-center py-3">
              <div className="col-span-12 lg:col-span-8 lg:col-start-3 flex items-center justify-between">
                <Link
                  href="/"
                  className="flex items-center transition-transform hover:scale-105"
                >
                  <div className="text-2xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                    Daily Drop
                  </div>
                </Link>

                <div className="lg:hidden flex items-center gap-3">
                  <Select
                    value={locale}
                    onChange={onLanguageChange}
                    options={[
                      { value: "en", label: "EN" },
                      { value: "ko", label: "KO" },
                    ]}
                    className="w-16"
                    size="middle"
                    disabled={isPending}
                  />

                  <button
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                    className="text-gray-700 focus:outline-none hover:scale-110 transition-transform p-1"
                  >
                    {open ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex lg:items-center lg:space-x-6">
                  {site.routes.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.path}
                      className="font-semibold text-gray-800 hover:text-purple-600 transition-all hover:scale-110"
                    >
                      {t(item.title)}
                    </Link>
                  ))}

                  <Select
                    value={locale}
                    onChange={onLanguageChange}
                    options={[
                      { value: "en", label: "🇺🇸 EN" },
                      { value: "ko", label: "🇰🇷 KO" },
                    ]}
                    className="w-28"
                    size="large"
                    disabled={isPending}
                  />

                  <button
                    onClick={() => setContactModalOpen(true)}
                    className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-bold px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    {t("contact")}
                  </button>
                </div>
              </div>

              <div
                className={`col-span-12 lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                  open ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                }`}
              >
                <div className="col-span-12 lg:hidden flex flex-col space-y-4 mt-4 pb-4 border-t border-gray-200 pt-4">
                  {site.routes.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.path}
                      onClick={() => setOpen(false)}
                      className={`font-semibold text-gray-800 hover:text-purple-600 transition-all hover:scale-105 transform ${
                        open
                          ? "translate-y-0 opacity-100"
                          : "-translate-y-4 opacity-0"
                      }`}
                      style={{
                        transitionDelay: open ? `${idx * 50}ms` : "0ms",
                      }}
                    >
                      {t(item.title)}
                    </Link>
                  ))}

                  <button
                    onClick={() => {
                      setContactModalOpen(true);
                      setOpen(false);
                    }}
                    className={`group relative bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-purple-300/50 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2 transform ${
                      open
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-4 opacity-0"
                    }`}
                    style={{
                      transitionDelay: open
                        ? `${site.routes.length * 50}ms`
                        : "0ms",
                    }}
                  >
                    {t("contact")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Form Modal */}
      <ContactForm
        open={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  );
}
