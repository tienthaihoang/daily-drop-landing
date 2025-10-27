"use client";

import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import ContactForm from "./forms/contact-form";
import TextWithMarkdown from "./ui/TextWithMarkdown";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const t = useTranslations("faq");

  const faqs = useMemo(() => {
    const list = [];
    let index = 0;

    while (true) {
      const questionKey = `questions.${index}.question`;
      const question = t(questionKey);
      if (question === questionKey || question.startsWith("faq.questions."))
        break;

      const answers: string[] = [];
      let answerIndex = 1;
      while (true) {
        const answerKey = `questions.${index}.answer${answerIndex}`;
        const answer = t(answerKey);
        if (answer === answerKey || answer.startsWith("faq.questions.")) break;
        answers.push(answer);
        answerIndex++;
      }

      list.push({ question, answers });
      index++;
    }

    return list;
  }, [t]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section
        id="faq"
        className="py-20 px-4 bg-slate-900 relative overflow-hidden scroll-mt-16"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-12 mb-12">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                {t("title")}
              </h2>
              <p className="text-xl text-slate-300">{t("subtitle")}</p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-bold text-white text-lg pr-8">
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
                      <div className="px-6 pb-6 pt-2 space-y-2">
                        {faq.answers.map((ans, i) => (
                          <TextWithMarkdown
                            key={i}
                            className="text-slate-400 leading-relaxed"
                          >
                            {ans}
                          </TextWithMarkdown>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-black text-white mb-3">
                  {t("cta.title")}
                </h3>
                <p className="text-slate-400 mb-6">{t("cta.subtitle")}</p>
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold px-8 py-3 rounded-xl shadow-xl shadow-purple-900/50 hover:shadow-2xl hover:shadow-purple-800/50 transition-all duration-300 hover:scale-105"
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
