import { NewsletterSignup } from "@/components/newsletter-signup";
import { Button } from "@/components/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Balancer from "react-wrap-balancer";

export default function CoursePage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      {/* Course Header */}
      <div className="text-center mb-16">
        <h1 className={cn(
          "text-4xl md:text-6xl font-bold bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)]",
          "bg-clip-text text-transparent mb-4"
        )}>
          <Balancer>AI Made Easy: The Practical Guide for Non-Tech People</Balancer>
        </h1>
        <p className="text-neutral-400 text-lg md:text-xl max-w-3xl mx-auto">
          <Balancer>Discover how to leverage AI in your daily work and life without needing a technical background</Balancer>
        </p>
      </div>

      {/* Course Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        <div>
          <h2 className="text-2xl md:text-3xl text-white font-semibold mb-6">What You&apos;ll Learn</h2>
          <ul className="space-y-4">
            {[
              "Practical AI applications that solve real-world problems",
              "How to use AI tools like ChatGPT, DALL-E, and others without coding",
              "Time-saving workflows that can cut your workload by up to 30%",
              "Ethical considerations and best practices for AI implementation",
              "How to stay ahead of the curve in your industry with emerging AI trends"
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-emerald-500 mr-3 mt-1">✓</span>
                <span className="text-neutral-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800">
          <h2 className="text-2xl md:text-3xl text-white font-semibold mb-6">Course Details</h2>
          <div className="space-y-4 text-neutral-300">
            <div className="flex justify-between">
              <span>Duration:</span>
              <span className="text-white">6 Weeks</span>
            </div>
            <div className="flex justify-between">
              <span>Format:</span>
              <span className="text-white">Online, Self-Paced</span>
            </div>
            <div className="flex justify-between">
              <span>Level:</span>
              <span className="text-white">Beginner to Intermediate</span>
            </div>
            <div className="flex justify-between">
              <span>Access:</span>
              <span className="text-white">Lifetime</span>
            </div>
            <div className="flex justify-between">
              <span>Materials:</span>
              <span className="text-white">Videos, Guides, Templates</span>
            </div>
            <div className="flex justify-between">
              <span>Certificate:</span>
              <span className="text-white">Yes, Upon Completion</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modules Section */}
      <div className="mb-20">
        <h2 className={cn(
          "text-3xl md:text-4xl text-center font-bold bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)]",
          "bg-clip-text text-transparent mb-10"
        )}>
          Course Modules
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Introduction to AI for Non-Technical Users",
              description: "Understand what AI can (and cannot) do without the technical jargon."
            },
            {
              title: "Practical Applications in Daily Work",
              description: "Learn how to automate repetitive tasks and enhance decision-making."
            },
            {
              title: "Mastering AI-Powered Tools",
              description: "Hands-on training with the most useful AI tools for your specific needs."
            },
            {
              title: "Creating Custom Workflows",
              description: "Design personalized AI systems that work for your unique challenges."
            },
            {
              title: "AI for Business Growth",
              description: "Implement AI strategies that directly impact your bottom line."
            },
            {
              title: "Future-Proofing Your Skills",
              description: "Stay ahead of AI developments and continuously adapt to new technologies."
            }
          ].map((module, i) => (
            <div key={i} className="bg-neutral-900 rounded-xl p-6 border border-neutral-800">
              <div className="bg-emerald-500/10 text-emerald-500 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                {i + 1}
              </div>
              <h3 className="text-xl text-white font-semibold mb-2">{module.title}</h3>
              <p className="text-neutral-400">{module.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mb-20">
        <h2 className={cn(
          "text-3xl md:text-4xl font-bold bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)]",
          "bg-clip-text text-transparent mb-6"
        )}>
          Join the Waitlist Today
        </h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto mb-8">
          <Balancer>Get 25% off when you join our waitlist. Be the first to know when enrollment opens and secure your spot at a discounted rate.</Balancer>
        </p>
      </div>

      {/* Email Signup */}
      <div className="mb-10">
        <NewsletterSignup />
      </div>
      
      {/* Back to Home */}
      <div className="text-center">
        <Button as={Link} href="/" variant="secondary" className="text-neutral-400 hover:text-white">
          ← Back to Home
        </Button>
      </div>
    </div>
  );
} 