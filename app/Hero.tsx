'use client'


import { useEffect, useState } from "react";

const heroData = [
  {
    image: "/roomImg1.png",
    title: "Discover Your Perfect Getaway Destination",
    subtitle:
      "Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts.",
  },
  {
    image: "/room.jpg",
    title: "Experience Unmatched Hospitality",
    subtitle:
      "From cozy cabins to 5-star resorts, find the place that suits your soul.",
  },
  {
    image: "/room1.jpg",
    title: "Start Your Journey With Us",
    subtitle:
      "Plan, book, and enjoy the most breathtaking experiences around the world.",
  },
  {
    image: "/regImage.png",
    title: "Discover Your Perfect Getaway Destination",
    subtitle:
      "Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts.",
  },
  {
    image: "/quickbg.jpg",
    title: "Experience Unmatched Hospitality",
    subtitle:
      "From cozy cabins to 5-star resorts, find the place that suits your soul.",
  },
  {
    image: "/room2.jpg",
    title: "Start Your Journey  With Us",
    subtitle:
      "Plan, book, and enjoy the most breathtaking \nexperiences around the world.",
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroData.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[500px] md:h-[600px] flex items-center justify-start text-white transition-all duration-700"
      style={{
        backgroundImage: `url('${heroData[activeIndex].image}')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Text content */}
      <div className="z-10 max-w-3xl text-left px-6 md:px-10 max-lg:20 xl:px-32 2xl:px-44 ">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          {heroData[activeIndex].title}
        </h1>
        <p className="text-base md:text-[14px] whitespace-pre-line">
          {heroData[activeIndex].subtitle}
        </p>
      </div>

      {/* Thumbnails */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2 z-10">
        {heroData.map((item, index) => (
          <div
            key={index}
            className={`w-16 h-10 rounded overflow-hidden border-2 transition-transform duration-300 ${
              index === activeIndex
                ? "border-orange-500 scale-110"
                : "border-transparent opacity-50"
            }`}
          >
            <img
              src={item.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

