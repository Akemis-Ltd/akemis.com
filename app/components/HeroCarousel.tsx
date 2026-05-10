"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const slides = [
    {
        image: "/images/hong-kong-skyline.jpg",
        title: "Business Development",
    },
    {
        image: "/images/majorel-consulting-team-scaled-1.jpeg",
        title: "Consulting",
    },
    {
        image: "/images/web-design-in-the-techno-digital-era.jpg",
        title: "Outsourcing",
    },
];

export default function HeroCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

    return (
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden" ref={emblaRef}>
            <div className="flex h-full">
                {slides.map((slide, index) => (
                    <div className="relative flex-[0_0_100%] h-full" key={index}>
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <div className="bg-black/40 px-8 py-4 backdrop-blur-sm">
                                <h2 className="text-4xl md:text-6xl font-light text-white tracking-wide">
                                    {slide.title}
                                </h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
