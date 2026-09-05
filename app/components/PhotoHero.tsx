import Image from "next/image";

/**
 * Full-bleed photographic hero. The gradient is what makes white text legible
 * over a photograph, so it is part of the component rather than the page.
 */
export default function PhotoHero({
  image,
  alt,
  eyebrow,
  title,
  lede,
  children,
  priority = false,
  height = "tall",
}: {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  lede: string;
  children?: React.ReactNode;
  priority?: boolean;
  height?: "tall" | "short";
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep">
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover object-center opacity-55"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/35"
      />
      <div
        className={`relative mx-auto max-w-6xl px-6 ${
          height === "tall" ? "py-24 md:py-32" : "py-20 md:py-24"
        }`}
      >
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-white/70">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-white md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/85">{lede}</p>
        {children ? <div className="mt-8 flex flex-wrap gap-4">{children}</div> : null}
      </div>
    </section>
  );
}
