"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Testimonials() {
  return (
    <div className="w-full max-w-7xl mx-auto my-20 py-20 px-4 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Title Section - 40% */}
        <div className="w-full lg:w-[40%]">
          <div className="sticky top-20">
            <h2
              className={cn(
                "text-3xl text-center lg:text-left md:text-6xl bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] ",
                "bg-clip-text text-transparent leading-tight"
              )}
            >
              What they <br />
              say about us
            </h2>
            <p className="text-sm text-center lg:text-left mx-auto lg:mx-0 text-neutral-400 mt-6 max-w-sm">
              Read what our students are saying about their transformative journey into AI with our accessible, jargon-free approach to learning.
            </p>
          </div>
        </div>

        {/* Right Testimonials Section - 60% */}
        <div className="w-full grid gap-8 grid-cols-1 lg:grid-cols-2 md:w-[60%] mx-auto">
          <TestimonialCard
            name="Sarah Johnson"
            role="Marketing Director"
            image="/manu_arora.jpg"
            quote="This AI course has completely transformed my workflow. As someone who never considered myself tech-savvy, I'm now confidently using AI tools that save me hours every week."
          />
          <TestimonialCard
            name="Michael Chen"
            role="Small Business Owner"
            image="/kishore_gunnam.jpg"
            quote="The course demystified AI in a way that made it approachable for someone like me who was intimidated by the technology. Now my business is thriving with these new tools."
            className="lg:mt-[50px]"
          />
          <TestimonialCard
            name="Rachel Williams"
            role="Project Manager"
            image="/kishore_gunnam.jpg"
            quote="I was amazed by how quickly I could implement what I learned. The course focused on practical applications rather than technical jargon, making AI accessible to everyone."
            className="lg:mt-[-50px]"
          />
          <TestimonialCard
            name="David Thompson"
            role="Freelance Writer"
            image="/manu_arora.jpg"
            quote="As a creative professional, I was skeptical about AI. This course showed me how to use AI as a powerful tool to enhance my creativity rather than replace it."
          />
        </div>
      </div>
    </div>
  );
}

const TestimonialCard = ({
  name,
  role,
  image,
  quote,
  className,
}: {
  name: string;
  role: string;
  image: string;
  quote: string;
  className?: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "flex flex-col h-96 p-8 rounded-[17px]",
        "border border-[#474747]",
        "bg-white bg-[linear-gradient(178deg,#2E2E2E_0.37%,#0B0B0B_38.61%),linear-gradient(180deg,#4C4C4C_0%,#151515_100%),linear-gradient(180deg,#2E2E2E_0%,#0B0B0B_100%)]",
        "relative isolate",
        className
      )}
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-neutral-700">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <p className="text-sm text-neutral-400">{role}</p>
        </div>
      </div>
      <p className="text-lg text-neutral-300 leading-relaxed">
        &quot;{quote}&quot;
      </p>
    </motion.div>
  );
};
