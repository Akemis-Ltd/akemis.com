"use client";

import { useEffect, useState } from "react";

type Slide = {
  image: string;
  title: string;
  subtitle: string;
  cta: { label: string; href: string };
};

const slides: Slide[] = [
  {
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: "Transform Your Business with Global Consulting",
    subtitle:
      "Expert guidance in ERP, CRM, and bespoke solutions to drive your success.",
    cta: { label: "Get a Free Consultation", href: "#contact" },
  },
  {
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: "Scalable Outsourcing Solutions",
    subtitle:
      "Empower your teams with our dedicated BPO and Lead Generation services.",
    cta: { label: "Explore Our Services", href: "#services" },
  },
  {
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
    title: "Modern Web Development",
    subtitle:
      "Cutting-edge digital experiences built for performance and growth.",
    cta: { label: "See What We Build", href: "#services" },
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      6000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-gray-900">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent" />
          </div>
          <div className="relative z-20 h-full container mx-auto px-6 md:px-12 flex flex-col justify-center text-white">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
                {slide.subtitle}
              </p>
              <a
                href={slide.cta.href}
                className="inline-block px-8 py-4 bg-[#CD2653] text-white font-semibold rounded-full hover:bg-[#A11D40] transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(205,38,83,0.5)]"
              >
                {slide.cta.label}
              </a>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-3 rounded-full transition-all duration-300 ${
              i === index ? "w-10 bg-[#CD2653]" : "w-3 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
