import { Check } from "lucide-react";

const items = [
  "One point of contact for everything",
  "Vetted, specialized professionals",
  "We supervise every job",
  "Guaranteed results — we make it right",
  "Available when you need us",
  "Local to The Woodlands & Houston",
];

export default function WhyProtech() {
  return (
    <section className="bg-navy py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-3">
          The ProTech difference
        </p>
        <h2 className="text-4xl font-bold text-white mb-12">
          Why Property Owners Choose ProTech
        </h2>
        <div className="mx-auto max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
          {items.map((item) => (
            <div key={item} className="flex items-center gap-3 text-left">
              <Check className="text-amber shrink-0" size={20} />
              <span className="text-white/90 text-lg">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
