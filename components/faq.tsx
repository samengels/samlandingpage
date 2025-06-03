"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { IconArrowRight } from "@/icons/arrow-right";

const FAQs = [
  {
    question: "Who is this AI course for?",
    answer:
      "This course is designed for professionals and individuals who want to understand and use AI in their work and life, without needing a technical background. It's perfect for business owners, marketers, writers, educators, and anyone curious about implementing AI tools in their daily workflow.",
  },
  {
    question: "Do I need coding experience to take this course?",
    answer:
      "Not at all! Our course is specifically designed for people without coding experience. We focus on practical applications and user-friendly AI tools that don't require programming knowledge.",
  },
  {
    question: "How long does it take to complete the course?",
    answer:
      "The course is designed to be completed in 6 weeks, but since it's self-paced, you can move through it according to your own schedule. Many students start implementing AI tools and seeing benefits within the first week.",
  },
  {
    question: "What makes this AI course different from others?",
    answer:
      "Our course focuses on practical applications rather than theory. We emphasize real-world use cases and jargon-free instruction that makes AI accessible to everyone. Plus, we provide lifetime access to course updates as AI technology evolves.",
  },
  {
    question: "Will I receive support if I have questions?",
    answer:
      "Absolutely! All students get access to our community forum where they can ask questions, share ideas, and connect with other learners. We also offer monthly Q&A sessions with our instructors to address specific questions about applying AI to your unique situations.",
  },
];
export function FrequentlyAskedQuestions() {
  const [open, setOpen] = React.useState<string | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto my-10 md:my-20 py-10 md:py-20 px-4 md:px-8">
      <div className="text-balance relative z-20 mx-auto mb-4 max-w-4xl text-center">
        <h2
          className={cn(
            "inline-block text-3xl md:text-6xl bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)]",
            "bg-clip-text text-transparent"
          )}
        >
          Let&apos;s Answer Your Questions
        </h2>
      </div>
      <p className="max-w-lg text-sm text-center mx-auto mt-4 text-neutral-400 px-4 md:px-0">
        Got questions about our AI course? We've answered the most common questions to help you understand how our program will help you harness the power of AI without technical expertise.
      </p>
      <div className="mt-10 md:mt-20 max-w-3xl mx-auto divide-y divide-neutral-800">
        {FAQs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            open={open}
            setOpen={setOpen}
          />
        ))}
      </div>
    </div>
  );
}

const FAQItem = ({
  question,
  answer,
  setOpen,
  open,
}: {
  question: string;
  answer: string;
  open: string | null;
  setOpen: (open: string | null) => void;
}) => {
  const isOpen = open === question;

  return (
    <motion.div
      className="cursor-pointer py-4 md:py-6"
      onClick={() => {
        if (isOpen) {
          setOpen(null);
        } else {
          setOpen(question);
        }
      }}
    >
      <div className="flex items-start justify-between">
        <div className="pr-8 md:pr-12">
          <h3 className="text-base md:text-lg font-medium text-neutral-200">
            {question}
          </h3>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="overflow-hidden text-sm md:text-base text-neutral-400 mt-2"
              >
                <p>{answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="relative mr-2 md:mr-4 mt-1 h-5 w-5 md:h-6 md:w-6 flex-shrink-0">
          <motion.div
            animate={{
              scale: isOpen ? [0, 1] : [1, 0, 1],
              rotate: isOpen ? 90 : 0,
              marginLeft: isOpen ? "1.5rem" : "0rem",
            }}
            initial={{ scale: 0 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            <IconArrowRight className="absolute inset-0 h-5 w-5 md:h-6 md:w-6 transform text-white-500" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
