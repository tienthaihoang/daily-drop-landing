"use client";

import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import ContactForm from "./forms/contact-form";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const t = useTranslations("faq");

  const faqs = useMemo(() => {
    const questions = [];
    let index = 0;

    while (index < 10) {
      const questionKey = `questions.${index}.question`;
      const answerKey = `questions.${index}.answer`;
      const question = t(questionKey);
      const answer = t(answerKey);

      if (question === questionKey || question.startsWith("faq.questions.")) {
        break;
      }

      questions.push({ question, answer });
      index++;
    }

    return questions;
  }, [t]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section id="faq" className="py-20 px-4 bg-white scroll-mt-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 mb-12">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                {t("title")}
              </h2>
              <p className="text-xl text-slate-600">{t("subtitle")}</p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden hover:border-slate-300 transition-colors"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-bold text-slate-900 text-lg pr-8">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-6 h-6 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        openIndex === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      } overflow-hidden`}
                    >
                      <div className="px-6 pb-6 pt-2">
                        <p className="text-slate-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 rounded-3xl p-8 border-2 border-slate-200">
                <h3 className="text-2xl font-black text-slate-900 mb-3">
                  {t("cta.title")}
                </h3>
                <p className="text-slate-600 mb-6">{t("cta.subtitle")}</p>
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  {t("cta.button")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactForm
        open={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  );
}
