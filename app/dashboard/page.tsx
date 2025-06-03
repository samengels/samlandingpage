"use client";

import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Miami</h1>
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1589083130544-0d6a2926e519?q=80&w=3270&auto=format&fit=crop"
            alt="Miami cityscape at sunset"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
} 