"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setStatus("error");
      setMessage("Please enter your email address");
      return;
    }

    setStatus("loading");
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Subscription failed');
      }

      setStatus("success");
      setMessage("Thanks for subscribing! Please check your email to confirm.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-0 mt-0 md:py-4">
      <div className="relative">
        {/* Animated background gradient */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-[#2EB9DF]/20 via-[#9E00FF]/20 to-[#2EB9DF]/20 blur-3xl"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ 
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            transform: "translate3d(0, 0, 0)",
          }}
        />
        
        <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2EB9DF] to-[#9E00FF] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Put Your Email Down For 25% Off
            </motion.h2>
            <motion.p 
              className="text-white/60 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Get 25% off when you join the waitlist. Be the first to know when the AI course opens.
            </motion.p>
          </div>

          <motion.form 
            onSubmit={handleSubmit}
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={cn(
                  "flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4",
                  "text-white placeholder:text-white/40",
                  "focus:outline-none focus:ring-2 focus:ring-[#2EB9DF]/50",
                  "transition-all duration-200"
                )}
                disabled={status === "loading" || status === "success"}
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={cn(
                  "bg-gradient-to-r from-[#2EB9DF] to-[#9E00FF]",
                  "text-white font-semibold px-8 py-4 rounded-xl",
                  "transform transition-all duration-200",
                  "hover:scale-105 hover:shadow-lg hover:shadow-[#2EB9DF]/20",
                  "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
                  status === "loading" ? "animate-pulse" : ""
                )}
              >
                {status === "loading" ? "Subscribing..." : 
                 status === "success" ? "Subscribed!" : 
                 "Subscribe"}
              </button>
            </div>
            
            {/* Status message */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: message ? 1 : 0,
                y: message ? 0 : 10
              }}
              className={cn(
                "text-sm mt-4 text-center",
                status === "success" ? "text-green-400" : "text-red-400"
              )}
            >
              {message}
            </motion.div>
          </motion.form>
        </div>
      </div>
    </div>
  );
}; 