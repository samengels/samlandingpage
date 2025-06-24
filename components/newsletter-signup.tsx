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
    <div className="w-full max-w-7xl mx-auto px-4 py-8 mt-8 md:py-12">
      <div className="relative overflow-hidden">
        {/* Enhanced animated background with more vibrant colors */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-[#2EB9DF]/30 via-[#9E00FF]/30 to-[#2EB9DF]/30 blur-3xl opacity-80"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ 
            backgroundSize: "400% 400%",
            transform: "translate3d(0, 0, 0)",
          }}
        />
        
        {/* Additional glowing effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2EB9DF]/10 to-transparent blur-2xl" />
        
        {/* Enhanced container with better contrast */}
        <div className="relative bg-gradient-to-br from-black/60 via-black/70 to-black/60 backdrop-blur-xl border-2 border-white/20 rounded-3xl p-8 md:p-16 shadow-2xl shadow-[#2EB9DF]/10">
          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#2EB9DF]/20 via-[#9E00FF]/20 to-[#2EB9DF]/20 blur-sm opacity-60" />
          
          <div className="relative z-10">
            <div className="max-w-2xl mx-auto text-center mb-10">
              {/* Enhanced title with better gradient and glow */}
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2EB9DF] via-white to-[#9E00FF] mb-6 leading-tight"
                style={{
                  textShadow: "0 0 30px rgba(46, 185, 223, 0.3)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Put Your Email Down For 25% Off
              </motion.h2>
              
              {/* Enhanced description with better contrast */}
              <motion.p 
                className="text-white/80 text-lg md:text-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Get <span className="text-[#2EB9DF] font-semibold">25% off</span> when you join the waitlist. Be the first to know when the AI course opens.
              </motion.p>
            </div>

            {/* Enhanced form with better styling */}
            <motion.form 
              onSubmit={handleSubmit}
              className="max-w-lg mx-auto"
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
                    "flex-1 bg-white/10 border-2 border-white/20 rounded-2xl px-6 py-5",
                    "text-white placeholder:text-white/50 text-lg",
                    "focus:outline-none focus:ring-2 focus:ring-[#2EB9DF] focus:border-[#2EB9DF]/50",
                    "transition-all duration-300 backdrop-blur-sm",
                    "hover:border-white/30 hover:bg-white/15"
                  )}
                  disabled={status === "loading" || status === "success"}
                />
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className={cn(
                    "bg-gradient-to-r from-[#2EB9DF] to-[#9E00FF] relative overflow-hidden",
                    "text-white font-bold px-10 py-5 rounded-2xl text-lg",
                    "transform transition-all duration-300 shadow-lg shadow-[#2EB9DF]/30",
                    "hover:scale-105 hover:shadow-xl hover:shadow-[#2EB9DF]/40",
                    "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
                    "before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0",
                    "before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
                    status === "loading" ? "animate-pulse" : ""
                  )}
                >
                  {status === "loading" ? "Subscribing..." : 
                   status === "success" ? "Subscribed!" : 
                   "Get 25% Off"}
                </button>
              </div>
              
              {/* Enhanced status message */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: message ? 1 : 0,
                  y: message ? 0 : 10
                }}
                className={cn(
                  "text-sm md:text-base mt-6 text-center font-medium",
                  status === "success" ? "text-green-400" : "text-red-400"
                )}
              >
                {message}
              </motion.div>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
}; 