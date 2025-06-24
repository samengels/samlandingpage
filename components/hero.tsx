"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { Button } from "./button";

// Animated particles component
const AnimatedParticles = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 4,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-[#2EB9DF] rounded-full opacity-30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Glowing orbs background
const GlowingOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large floating orb */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-[#2EB9DF]/20 to-[#9E00FF]/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          top: "20%",
          left: "10%",
        }}
      />
      
      {/* Medium orb */}
      <motion.div
        className="absolute w-64 h-64 bg-gradient-to-r from-[#9E00FF]/15 to-[#2EB9DF]/15 rounded-full blur-2xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          top: "60%",
          right: "15%",
        }}
      />

      {/* Small accent orb */}
      <motion.div
        className="absolute w-32 h-32 bg-gradient-to-r from-[#2EB9DF]/25 to-[#9E00FF]/25 rounded-full blur-xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          top: "40%",
          left: "70%",
        }}
      />
    </div>
  );
};



export function Hero() {
  const parentRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;

  const { scrollY } = useScroll({
    target: parentRef,
  });

  const translateY = useTransform(scrollY, [0, 100], [0, -20]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.96]);
  const blurPx = useTransform(scrollY, [0, 100], [0, 5]);
  const filterBlurPx = useMotionTemplate`blur(${blurPx}px)`;

  return (
    <div
      ref={parentRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20 md:px-8 md:pt-40 bg-black"
    >
      {/* Enhanced background effects */}
      <GlowingOrbs />
      <AnimatedParticles />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(46,185,223,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(46,185,223,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />
      
      {/* Main content container with glass effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="relative z-20 bg-black/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-16 shadow-2xl shadow-[#2EB9DF]/5"
        style={{
          y: translateY,
          scale,
          filter: filterBlurPx,
        }}
      >
        <div className="text-balance relative mx-auto mb-6 max-w-4xl text-center">
          <h2 className="mb-4">
            <Balancer>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block text-6xl md:text-8xl font-bold text-white"
              >
                AI Made Easy
              </motion.span>
            </Balancer>
          </h2>
          
          {/* Enhanced subtitle with glow effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-4xl mt-4 font-medium text-white/90 relative"
          >
            <span className="relative z-10">For Smart People Who Didn&apos;t Grow Up With It</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#2EB9DF]/20 to-[#9E00FF]/20 blur-lg opacity-50" />
          </motion.div>
        </div>

        {/* Enhanced description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative z-20 mx-auto mt-6 max-w-2xl px-4 text-center text-lg md:text-xl text-white/70 leading-relaxed"
        >
          Discover how everyday people are using AI to{" "}
          <span className="text-[#2EB9DF] font-semibold">save time</span>,{" "}
          <span className="text-[#9E00FF] font-semibold">make smarter decisions</span>, and{" "}
          <span className="text-white font-semibold">stay ahead of the curve</span>.
        </motion.p>

        {/* Enhanced CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-4 mt-8 sm:mb-8 sm:mt-12 flex w-full flex-col items-center justify-center gap-4 px-4 sm:px-8 sm:flex-row"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            {/* Glowing background for button */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2EB9DF] to-[#9E00FF] rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
            
            <Button
              as={Link}
              href="/course"
              variant="primary"
              className={cn(
                "relative w-full sm:w-48 h-14 rounded-full flex items-center justify-center text-lg font-bold",
                "bg-gradient-to-r from-[#2EB9DF] to-[#9E00FF] text-white",
                "shadow-lg shadow-[#2EB9DF]/30 hover:shadow-xl hover:shadow-[#2EB9DF]/40",
                "transition-all duration-300",
                "before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0",
                "before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:rounded-full"
              )}
            >
              Get Started Now
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating action indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex justify-center items-center gap-8 mt-8"
        >
          {["AI Tools", "Smart Learning", "Quick Results"].map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.1 }}
              className="flex items-center gap-2 text-white/60 text-sm"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-[#2EB9DF] to-[#9E00FF] rounded-full animate-pulse" />
              {feature}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
