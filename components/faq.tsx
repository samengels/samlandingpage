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
    <div className="w-full max-w-7xl mx-auto my-10 md:my-20 py-16 md:py-32 px-4 md:px-8 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(46,185,223,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(46,185,223,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,black_40%,transparent_100%)]" />
      
      {/* Floating orb effects */}
      <motion.div
        className="absolute w-72 h-72 bg-gradient-to-r from-[#2EB9DF]/8 to-[#9E00FF]/8 rounded-full blur-3xl"
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          top: "15%",
          right: "5%",
        }}
      />

      {/* Main content with glass container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-black/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-[#2EB9DF]/5"
      >
        <div className="text-balance relative z-20 mx-auto mb-8 max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Let's Answer Your Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl text-lg md:text-xl text-center mx-auto text-white/70 leading-relaxed"
          >
            Got questions about our AI course? We've answered the most common questions to help you understand how our program will help you{" "}
            <span className="text-[#2EB9DF] font-semibold">harness the power of AI</span> without{" "}
            <span className="text-[#9E00FF] font-semibold">technical expertise</span>.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 md:mt-16 max-w-4xl mx-auto"
        >
          <div className="space-y-4">
            {FAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  open={open}
                  setOpen={setOpen}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
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
      className="cursor-pointer bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-black/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#2EB9DF]/10"
      onClick={() => {
        if (isOpen) {
          setOpen(null);
        } else {
          setOpen(question);
        }
      }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="flex items-start justify-between">
        <div className="pr-8 md:pr-12 flex-1">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
            {question}
          </h3>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <p className="text-base md:text-lg text-white/70 leading-relaxed pt-2">
                  {answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <motion.div
          className="relative mt-1 h-6 w-6 flex-shrink-0"
          animate={{
            rotate: isOpen ? 90 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <IconArrowRight className="h-6 w-6 text-[#2EB9DF]" />
        </motion.div>
      </div>
    </motion.div>
  );
};
