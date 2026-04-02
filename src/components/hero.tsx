import Image from "next/image"
import { Phone, ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="flex min-h-[600px] w-full flex-col lg:flex-row">
      {/* Left — Navy side */}
      <div className="flex w-full flex-col justify-center bg-navy px-8 py-16 lg:w-[55%] lg:px-16 lg:py-20">
        {/* Logo (text) */}
        <p className="text-white font-bold text-2xl tracking-wide mb-8">PROTECH</p>

        {/* Headline */}
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Stop Chasing
          <br />
          <span className="text-amber">Contractors.</span>
        </h1>

        {/* Subhead */}
        <p className="mb-8 max-w-lg text-lg leading-relaxed text-white/70">
          One call. Every solution. We coordinate everything for your property.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="tel:+17133779200"
            className="inline-flex items-center gap-2 rounded-lg bg-amber px-6 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/50"
          >
            <Phone className="size-5 shrink-0" />
            (713) 377-9200
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            <ArrowDown className="size-5 shrink-0" />
            See Our Services
          </a>
        </div>

        {/* Service area note */}
        <p className="mt-8 text-sm text-white/50">
          Serving The Woodlands · Conroe · Cypress · Houston
        </p>
      </div>

      {/* Right — Photo side (desktop only) */}
      <div className="relative hidden w-[45%] lg:block">
        <Image
          src="/images/gallery/concrete-1.jpg"
          alt="ProTech property maintenance services"
          fill
          priority
          sizes="45vw"
          className="object-cover"
        />
      </div>
    </section>
  )
}
