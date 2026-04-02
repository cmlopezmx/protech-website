import {
  Zap,
  Wrench,
  Thermometer,
  HardHat,
  Paintbrush,
  CalendarCheck,
  Hammer,
  Wind,
  TreePine,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Electrical",
    description: "Wiring, panels, outlets, lighting, generators",
  },
  {
    icon: Wrench,
    title: "Plumbing",
    description: "Fixtures, water heaters, leak repair, drains",
  },
  {
    icon: Thermometer,
    title: "HVAC & Refrigeration",
    description: "Installation, maintenance, duct cleaning, chillers",
  },
  {
    icon: HardHat,
    title: "Renovations & Build-Outs",
    description: "Interior finishing, insulation, sheetrock, remodeling",
  },
  {
    icon: Paintbrush,
    title: "Painting & Finishing",
    description: "Interior/exterior, drywall, cabinets, specialty finishes",
  },
  {
    icon: CalendarCheck,
    title: "Preventive Maintenance",
    description: "Scheduled inspections, filter replacement, seasonal prep",
  },
  {
    icon: Hammer,
    title: "Handyman Services",
    description: "General repairs, mounting, assembly, fixtures",
  },
  {
    icon: Wind,
    title: "Odor Treatment & Disinfection",
    description: "Ozone treatment, smoke removal, deep sanitization",
  },
  {
    icon: TreePine,
    title: "Landscaping & Exterior",
    description: "Lawn care, pressure washing, exterior maintenance",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-amber font-medium mb-3">
            Full-service coverage
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            What We Cover
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-surface rounded-xl p-5 border-l-4 border-amber flex items-start gap-4 hover:shadow-md transition-shadow"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-amber" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-navy font-bold text-base mb-1">{title}</h3>
                <p className="text-body text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
