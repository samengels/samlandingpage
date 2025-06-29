"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import DottedMap from "dotted-map";
import {
  IconBrandDiscord,
  IconBrandFacebook,
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandNotion,
  IconBrandReddit,
  IconBrandSlack,
  IconBrandTwitch,
  IconBrandTwitter,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { GlowingEffect } from "./ui/glowing-effect";

export function Features() {
  return (
    <div
      id="product"
      className="w-full max-w-7xl mx-auto py-8 px-4 md:px-8 md:my-20 md:py-32 relative overflow-hidden"
    >
      {/* Animated background effects similar to hero */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(46,185,223,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(46,185,223,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]" />
      
      {/* Floating orb effects */}
      <motion.div
        className="absolute w-64 h-64 bg-gradient-to-r from-[#2EB9DF]/10 to-[#9E00FF]/10 rounded-full blur-3xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          top: "10%",
          right: "10%",
        }}
      />
      
      <motion.div
        className="absolute w-48 h-48 bg-gradient-to-r from-[#9E00FF]/8 to-[#2EB9DF]/8 rounded-full blur-2xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          bottom: "20%",
          left: "5%",
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
        <div className="text-balance relative z-20 mx-auto mb-6 max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Features & Benefits
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl text-lg md:text-xl text-center mx-auto text-white/70 leading-relaxed"
          >
            Discover powerful AI tools that simplify complex tasks and help you work{" "}
            <span className="text-[#2EB9DF] font-semibold">smarter, not harder</span>—designed specifically for people who want{" "}
            <span className="text-[#9E00FF] font-semibold">results without the tech jargon</span>.
          </motion.p>
        </div>
      <div className="mt-20  grid cols-1 lg:grid-cols-5 gap-4 auto-rows-[25rem] max-w-3xl mx-auto lg:max-w-none">
        <Card className="flex flex-col relative justify-between lg:col-span-2">
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/3">
            <LogoOrbit />
          </div>
          <CardContent className="h-40 absolute bottom-0">
            <CardTitle>
              AI is Everywhere
              <br /> 
            </CardTitle>
            <CardDescription>
              Experience the power of AI seamlessly integrated into your everyday tools and workflows, making complex tasks simple and intuitive.
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="flex relative flex-col justify-between lg:col-span-3">
          <CardContent className="h-40">
            <CardTitle>
              Available in <br /> every country
            </CardTitle>
            <CardDescription>
              Access our platform from anywhere in the world with our globally
              distributed network and localized support in multiple languages.
            </CardDescription>
          </CardContent>
          <div className="absolute inset-0">
            <MapView />
          </div>
          <h1
            className={cn(
              "inline-block p-6 text-2xl md:text-6xl bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)]  bg-clip-text text-transparent"
            )}
          >
            100+
            <br />
            Countries
          </h1>
        </Card>
        <Card className="flex flex-col relative justify-between lg:col-span-3">
          <h1
            className={cn(
              "inline-block text-right absolute top-0 right-0 p-6 text-xl md:text-6xl bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent"
            )}
          >
            10,000+
            <br />
            Users
          </h1>
          <CardSkeletonBody>
            <div className="relative flex h-[300px] w-full flex-col items-start top-20 md:top-10 overflow-hidden rounded-lg bg-background md:shadow-xl">
              <IconsList />
            </div>
          </CardSkeletonBody>
          <CardContent className="h-40 relative mb-4">
            <CardTitle>
              Major <br /> User Adoption
            </CardTitle>
            <CardDescription>
              Join our growing community of over 10,000 users who trust our AI platform to simplify their workflows and boost their productivity every day.
            </CardDescription>
          </CardContent>
          <div className="absolute right-4 bottom-4 opacity-10 md:opacity-100">
            <PeopleGrid />
          </div>
        </Card>

        <Card className="flex flex-col justify-between lg:col-span-2">
          <CardContent className="h-40">
            <CardTitle>
              People <br /> love us
            </CardTitle>
            <CardDescription>
              Hear from our students who discovered the true potential of AI through our course and transformed their approach to technology.
            </CardDescription>
          </CardContent>
          <CardSkeletonBody>
            <div className="w-full h-full p-4 rounded-lg px-10 mt-6">
              <CardStack items={CARDS} />
            </div>
          </CardSkeletonBody>
        </Card>
        </div>
      </motion.div>
    </div>
  );
}

export const SkeletonTwo = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent mt-10"></div>
  );
};

// Card structure
const CardSkeletonBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("overflow-hidden relative w-full h-full", className)}>
      {children}
    </div>
  );
};

const CardContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("p-6", className)}>{children}</div>;
};

const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "inline-block text-xl md:text-4xl bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)]  bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </h3>
  );
};
const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "font-sans max-w-sm text-sm font-normal tracking-tight mt-2 text-neutral-400",
        className
      )}
    >
      {children}
    </p>
  );
};

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      whileHover="animate"
      className={cn(
        "group relative isolate flex flex-col rounded-2xl bg-neutral-900 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-hidden",
        className
      )}
    >
      <GlowingEffect
        spread={60}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={5}
        blur={10}
      />
      {children}
    </motion.div>
  );
};
const IconsList = () => {
  const commonStyles = useMemo(
    () =>
      "rounded-[13px] w-[50px] h-[50px] md:w-[70px] md:h-[70px] flex-[1_0_0] bg-[linear-gradient(0deg,#333_0%,#333_100%),radial-gradient(297.31%_124.05%_at_91.1%_3.42%,#3B3B3B_0%,#232323_27.05%,#0A0A0A_100%)] flex items-center justify-center",
    []
  );

  const icons = useMemo(
    () => [
      { Icon: IconBrandYoutube, delay: 0 },
      { Icon: IconBrandSlack, delay: 0.1 },
      { Icon: IconBrandX, delay: 0.2 },
      { Icon: IconBrandGmail, delay: 0.3 },
      { Icon: IconBrandNotion, delay: 0.4 },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!isHovered) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % icons.length);
      }, 2000);
    }

    return () => clearInterval(interval);
  }, [icons.length, isHovered]);

  const IconComponents = useMemo(
    () =>
      icons.map(({ Icon, delay }, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            background:
              index === activeIndex
                ? "radial-gradient(297.31% 124.05% at 91.1% 3.42%, #3B3B3B 0%, #232323 27.05%, #0A0A0A 100%), #D9D9D9"
                : "linear-gradient(0deg,#333 0%,#333 100%),radial-gradient(297.31% 124.05% at 91.1% 3.42%,#3B3B3B 0%,#232323 27.05%,#0A0A0A 100%)",
            boxShadow:
              index === activeIndex
                ? "0px 22px 6px 0px rgba(0, 0, 0, 0.01), 0px 14px 6px 0px rgba(0, 0, 0, 0.04), 0px 8px 5px 0px rgba(0, 0, 0, 0.14), 0px 4px 4px 0px rgba(0, 0, 0, 0.24), 0px 1px 2px 0px rgba(0, 0, 0, 0.27)"
                : "none",
          }}
          onMouseEnter={() => {
            setIsHovered(true);
            setActiveIndex(index);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          transition={{
            delay,
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
            background: {
              duration: 0.3,
              ease: "easeInOut",
            },
            boxShadow: {
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
          className={commonStyles}
        >
          <Icon className="w-6 h-6 md:w-10 md:h-10 text-neutral-200 dark:text-neutral-200" />
        </motion.div>
      )),
    [icons, activeIndex, commonStyles]
  );

  return (
    <div className="inline-flex items-center gap-[6px] md:gap-[11px] p-[6px] md:p-[9px] rounded-[0px_20px_20px_0px] bg-[linear-gradient(88deg,#161616_0.35%,#292929_98.6%)] shadow-[0px_112px_31px_0px_rgba(0,0,0,0.02),0px_71px_29px_0px_rgba(0,0,0,0.13),0px_40px_24px_0px_rgba(0,0,0,0.45),0px_18px_18px_0px_rgba(0,0,0,0.77),0px_4px_10px_0px_rgba(0,0,0,0.88)]">
      {IconComponents}
    </div>
  );
};

let interval: NodeJS.Timeout;
type Card = {
  id: number;
  name: string;
  designation?: string;
  content: React.ReactNode;
};
export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);
  const [mounted, setMounted] = useState(false);

  // First effect - just handle mounting
  useEffect(() => {
    setMounted(true);
    return () => clearInterval(interval);
  }, []);
  
  // Second effect - start flipping only after mounted
  useEffect(() => {
    if (mounted) {
      startFlipping();
    }
  }, [mounted]);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-48 md:h-36 w-full mx-auto">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute w-full h-full p-4 flex flex-col justify-between rounded-[16px] bg-[linear-gradient(180deg,#1D1D1D_0%,#131313_100%)] shadow-[0px_1px_1px_0px_rgba(121,121,121,0.70)_inset] border border-white/[0.1]"
            style={{
              transformOrigin: "top center",
              top: mounted ? index * -CARD_OFFSET : 0,
              scale: mounted ? 1 - index * SCALE_FACTOR : 1,
              zIndex: cards.length - index,
            }}
            animate={mounted ? {
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            } : {}}
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-2">
              <IconLogo className="w-6 h-6 sm:w-auto sm:h-auto" />
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <p className="text-sm sm:text-base font-medium text-white">
                  {card.name}
                </p>
                {card.designation && (
                  <p className="text-sm sm:text-base font-normal text-neutral-200">
                    {card.designation}
                  </p>
                )}
              </div>
            </div>
            <div className="font-normal text-xs sm:text-sm text-neutral-200 mt-2">
              {card.content}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100  bg-emerald-700/[0.2] text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Nathan Gary",
    designation: "Marketing Director",
    content: (
      <p>
        I had <Highlight>no idea AI was capable</Highlight> of so much! This course opened my eyes to possibilities I never imagined. Now I&apos;m automating tasks that used to take hours.
      </p>
    ),
  },
  {
    id: 1,
    name: "Michael Chen",
    designation: "Small Business Owner",
    content: (
      <p>
        Before this course, AI seemed intimidating and complex. Now I understand how to <Highlight>leverage AI tools</Highlight> to grow my business without needing a tech background.
      </p>
    ),
  },
  {
    id: 2,
    name: "Rachel Williams",
    designation: "Project Manager",
    content: (
      <p>
        The course completely changed how I work. I was <Highlight>amazed by what AI could do</Highlight> and how easy it was to implement. My team thinks I&apos;m a tech genius now!
      </p>
    ),
  },
];

const IconLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="33"
      viewBox="0 0 29 33"
      fill="none"
      className={className}
    >
      <g filter="url(#filter0_i_997_4364)">
        <rect y="0.790039" width="28" height="28" rx="5" fill="#262626" />
      </g>
      <g filter="url(#filter1_d_997_4364)">
        <circle
          cx="14.5"
          cy="15.29"
          r="10.5"
          fill="url(#paint0_radial_997_4364)"
        />
        <circle
          cx="14.5"
          cy="15.29"
          r="10.2"
          stroke="url(#paint1_linear_997_4364)"
          strokeWidth="0.6"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_997_4364"
          x="0"
          y="0.790039"
          width="28"
          height="29"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.473682 0 0 0 0 0.473682 0 0 0 0 0.473682 0 0 0 0.7 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_997_4364"
          />
        </filter>
        <filter
          id="filter1_d_997_4364"
          x="0"
          y="3.79004"
          width="29"
          height="29"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_997_4364"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_997_4364"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_radial_997_4364"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(8.08333 9.16504) rotate(49.9697) scale(19.0456)"
        >
          <stop stopColor="#252525" />
          <stop offset="0.463081" stopColor="#1A1A1A" />
          <stop offset="1" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_997_4364"
          x1="14.5"
          y1="4.79004"
          x2="14.5"
          y2="25.79"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CBCBCB" />
          <stop offset="1" stopColor="#666666" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const people = [
  { src: "/images/person1.png", alt: "Person 1" },
  { src: "/images/person2.png", alt: "Person 2" },
  { src: "/images/person3.png", alt: "Person 3" },
  { src: "/images/person4.png", alt: "Person 4" },
  { src: "/images/person5.png", alt: "Person 5" },
  { src: "/images/person6.png", alt: "Person 6" },
];

const PeopleGrid = () => {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Only run animations after component has mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let interval: NodeJS.Timeout;

    if (!isHovered) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % people.length);
      }, 2000);
    }

    return () => clearInterval(interval);
  }, [isHovered, mounted]);

  useEffect(() => {
    if (!mounted) return;
    
    if (hoveredIndex !== null) {
      setActiveIndex(hoveredIndex);
    }
  }, [hoveredIndex, mounted]);

  // Initial static render for server, animated version for client only
  return (
    <div
      className="grid grid-cols-2 md:grid-cols-3 gap-4"
      onMouseEnter={() => mounted && setIsHovered(true)}
      onMouseLeave={() => {
        if (mounted) {
          setIsHovered(false);
          setHoveredIndex(null);
        }
      }}
    >
      {people.map((person, index) => (
        <motion.div
          key={index}
          className="relative"
          initial={{ y: 0, opacity: mounted ? 0 : 1, scale: 1 }}
          animate={mounted ? {
            y: 0,
            opacity: 1,
            scale: index === activeIndex ? [1, 1.2, 1] : 0.9,
            rotate: index === activeIndex ? [0, -10, 10, 0] : 0,
          } : {}}
          transition={mounted ? {
            duration: 0.6,
            scale: {
              duration: 0.8,
              times: [0, 0.5, 1],
              ease: "easeInOut",
              repeat: index === activeIndex ? Infinity : 0,
              repeatDelay: 1,
            },
            rotate: {
              duration: 0.8,
              times: [0, 0.25, 0.75, 1],
              ease: "easeInOut",
              repeat: index === activeIndex ? Infinity : 0,
              repeatDelay: 1,
            },
          } : {}}
          whileHover={mounted ? {
            scale: 1.1,
            transition: { duration: 0.2 },
          } : {}}
          onMouseEnter={() => mounted && setHoveredIndex(index)}
          onMouseLeave={() => mounted && setHoveredIndex(null)}
        >
          <Image
            src={person.src}
            alt={person.alt}
            height={70}
            width={70}
            className="rounded-lg"
            style={{
              filter: mounted && index === activeIndex ? "brightness(1.2)" : "brightness(0.8)",
              transition: "filter 0.3s ease",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

const OrbitingIcons = ({
  centerIcon,
  orbits,
  className,
}: {
  centerIcon?: React.ReactNode;
  orbits: Array<{
    icons: React.ReactNode[];
    radius?: number;
    speed?: number;
    rotationDirection?: "clockwise" | "anticlockwise";
    revealTime?: number;
    delay?: number;
  }>;
  className?: string;
}) => {
  const [mounted, setMounted] = useState(false);
  
  // Only enable animations after client-side mount
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Precalculate all orbit data
  const orbitData = React.useMemo(() => {
    return orbits.map((orbit, orbitIndex) => {
      const radius = orbit.radius || 100 + orbitIndex * 80;
      const speed = orbit.speed || 1;
      const revealTime = orbit.revealTime || 0.5;
      const orbitDelay = orbit.delay || 0;
      const iconCount = orbit.icons.length;

      // Calculate angles for each icon
      const angleStep = 360 / iconCount;
      const angles = Array.from({ length: iconCount }, (_, i) => angleStep * i);

      // Precalculate positions and animations for each icon
      const iconData = angles.map((angle) => {
        const randomDelay = -Math.random() * speed;
        const rotationAngle =
          orbit.rotationDirection === "clockwise"
            ? [angle, angle - 360]
            : [angle, angle + 360];

        return {
          angle,
          randomDelay,
          rotationAngle,
          position: {
            x: radius * Math.cos((angle * Math.PI) / 180),
            y: radius * Math.sin((angle * Math.PI) / 180),
          },
          animation: {
            initial: {
              rotate: angle,
              scale: 0,
              opacity: 0,
            },
            animate: {
              rotate: rotationAngle,
              scale: 1,
              opacity: 1,
            },
            transition: {
              rotate: {
                duration: speed,
                repeat: Infinity,
                ease: "linear",
                delay: randomDelay + orbitDelay,
              },
              scale: {
                duration: revealTime,
                delay: Math.abs(randomDelay) + orbitDelay,
              },
              opacity: {
                duration: revealTime,
                delay: Math.abs(randomDelay) + orbitDelay,
              },
            },
            counterRotation: {
              initial: { rotate: -angle },
              animate: {
                rotate:
                  orbit.rotationDirection === "clockwise"
                    ? [-angle, -angle + 360]
                    : [-angle, -angle - 360],
              },
              transition: {
                duration: speed,
                repeat: Infinity,
                ease: "linear",
                delay: randomDelay + orbitDelay,
              },
            },
          },
        };
      });

      return {
        radius,
        speed,
        revealTime,
        orbitDelay,
        iconData,
        rotationDirection: orbit.rotationDirection,
      };
    });
  }, [orbits]);

  return (
    <div className={cn("relative w-[300px] h-[300px]", className)}>
      {centerIcon && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          {centerIcon}
        </div>
      )}
      {orbitData.map((orbit, orbitIndex) => (
        <div
          key={orbitIndex}
          className="absolute top-0 left-0 w-full h-full"
          style={{ zIndex: orbits.length - orbitIndex }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[343.721px] border border-[#545454] bg-[linear-gradient(189deg,#252525_5.97%,#0E0E0E_92.92%)] shadow-[0px_115px_32px_0px_rgba(0,0,0,0.01),_0px_74px_29px_0px_rgba(0,0,0,0.05),_0px_41px_25px_0px_rgba(0,0,0,0.16),_0px_18px_18px_0px_rgba(0,0,0,0.27),_0px_5px_10px_0px_rgba(0,0,0,0.31),inset_0px_0px_20px_rgba(0,0,0,0.5)]"
            style={{
              width: orbit.radius * 2 + "px",
              height: orbit.radius * 2 + "px",
            }}
          />

          {orbit.iconData.map((icon, iconIndex) => (
            <motion.div
              key={iconIndex}
              className="absolute"
              style={{
                width: "40px",
                height: "40px",
                left: `calc(50% - 20px)`,
                top: `calc(50% - 20px)`,
                transformOrigin: "center center",
              }}
              initial={mounted ? icon.animation.initial : { opacity: 1, scale: 1, rotate: icon.angle }}
              animate={mounted ? icon.animation.animate : {}}
              transition={mounted ? icon.animation.transition : { duration: 0 }}
            >
              <div
                style={{
                  position: "absolute",
                  left: `${orbit.radius}px`,
                  transformOrigin: "center center",
                }}
              >
                <motion.div
                  initial={mounted ? icon.animation.counterRotation.initial : { rotate: -icon.angle }}
                  animate={mounted ? icon.animation.counterRotation.animate : {}}
                  transition={mounted ? icon.animation.counterRotation.transition : { duration: 0 }}
                  className="w-10 h-10 rounded-[5px] bg-[#151515] flex items-center justify-center shadow-[0px_23px_7px_0px_rgba(0,0,0,0.01),0px_15px_6px_0px_rgba(0,0,0,0.06),0px_8px_5px_0px_rgba(0,0,0,0.19),0px_4px_4px_0px_rgba(0,0,0,0.32),0px_1px_2px_0px_rgba(0,0,0,0.37)]"
                >
                  {orbits[orbitIndex].icons[iconIndex]}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

const LogoOrbit = () => {
  const orbit1Icons = [
    <IconBrandTwitter
      key="twitter"
      className="w-8 h-8 text-white dark:text-white"
    />,
    <IconBrandFacebook
      key="facebook"
      className="w-8 h-8 text-white dark:text-white"
    />,
    <IconBrandLinkedin
      key="linkedin"
      className="w-8 h-8 text-white dark:text-white"
    />,
  ];

  const orbit2Icons = [
    <IconBrandYoutube
      key="youtube"
      className="w-6 h-6 text-white dark:text-white"
    />,
    <IconBrandTwitch
      key="twitch"
      className="w-6 h-6 text-white dark:text-white"
    />,
    <IconBrandReddit
      key="reddit"
      className="w-6 h-6 text-white dark:text-white"
    />,
    <IconBrandDiscord
      key="discord"
      className="w-6 h-6 text-white dark:text-white"
    />,
  ];

  return (
    <OrbitingIcons
      orbits={[
        {
          icons: orbit1Icons,
          rotationDirection: "clockwise",
          radius: 80,
          speed: 7,
        },
        {
          icons: orbit2Icons,
          rotationDirection: "anticlockwise",
          radius: 140,
          speed: 15,
        },
      ]}
    />
  );
};

const MapView = () => {
  const [mounted, setMounted] = useState(false);
  
  // Only run client-side code after mounting
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const svgMap = useMemo(() => {
    // On server, return an empty string to prevent hydration issues
    if (typeof window === 'undefined') return '';
    
    const map = new DottedMap({
      height: 40,
      grid: "diagonal",
    });

    return map.getSVG({
      radius: 0.15,
      color: "#FFFFFF50",
      shape: "circle",
    });
  }, []);

  const flashingPoints = useMemo(() => {
    const points = [];
    const numPoints = 8;
    
    // Use a consistent seed for random values to prevent hydration mismatch
    // or return empty array on server
    if (typeof window === 'undefined') return [];

    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: 15 + (i * 8) % 70, // Deterministic positions instead of random
        y: 15 + (i * 10) % 70,
        delay: (i / numPoints) * 3,
        duration: 2 + (i % 3),
      });
    }
    return points;
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 transition-opacity duration-300">
        {svgMap && (
          <Image
            src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
            className="h-full w-full object-cover absolute top-0 -right-2 -mt-14 
              [mask-image:linear-gradient(to_bottom,transparent,white_15%,white_85%,transparent)]
              pointer-events-none select-none opacity-50"
            alt="Interactive world map visualization"
            height={595}
            width={356}
            priority={true}
            draggable={false}
          />
        )}
      </div>

      {mounted && (
        <div className="absolute inset-0" aria-hidden="true">
          {flashingPoints.map((point, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full shadow-glow"
              style={{
                left: `${point.x}%`,
                top: `${point.y}%`,
                boxShadow: "0 0 12px rgba(255,255,255,0.4)",
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: point.duration,
                delay: point.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
