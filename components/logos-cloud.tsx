"use client";
import React from "react";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";

export function SpotlightLogoCloud() {
  const logos = [
    {
      name: "Aceternity UI",
      src: "https://assets.aceternity.com/pro/logos/aceternity-ui.png",
    },
    {
      name: "Gamity",
      src: "https://assets.aceternity.com/pro/logos/gamity.png",
    },
    {
      name: "Host it",
      src: "https://assets.aceternity.com/pro/logos/hostit.png",
    },
    {
      name: "Asteroid Kit",
      src: "https://assets.aceternity.com/pro/logos/asteroid-kit.png",
    },
  ];

  return (
    <div className="relative w-full py-16 md:py-32 overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(46,185,223,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(46,185,223,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_40%,transparent_100%)]" />
      
      {/* Floating orb effect */}
      <motion.div
        className="absolute w-56 h-56 bg-gradient-to-r from-[#9E00FF]/6 to-[#2EB9DF]/6 rounded-full blur-3xl"
        animate={{
          x: [0, -70, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          top: "50%",
          left: "20%",
        }}
      />

      {/* Main content with glass container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-black/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 mx-4 max-w-7xl mx-auto shadow-2xl shadow-[#2EB9DF]/5"
      >
        <div className="text-balance relative z-20 mx-auto mb-8 max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            <Balancer>Trusted by Industry Leaders</Balancer>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center max-w-2xl mx-auto text-lg md:text-xl text-white/70 leading-relaxed"
          >
            Join the ranks of{" "}
            <span className="text-[#2EB9DF] font-semibold">forward-thinking companies</span> already leveraging our{" "}
            <span className="text-[#9E00FF] font-semibold">AI technology</span>
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-12"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#2EB9DF]/10"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
