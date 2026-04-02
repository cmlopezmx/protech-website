import { MapPin } from "lucide-react";

const areas = [
  "The Woodlands",
  "Conroe",
  "Cypress",
  "Spring",
  "Tomball",
  "Greater Houston",
];

export default function ServiceAreas() {
  return (
    <section id="areas" className="bg-surface py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-amber font-semibold uppercase tracking-wide text-sm mb-2">
            Local service
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Where We Work
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {areas.map((area) => (
            <div
              key={area}
              className="bg-white rounded-xl p-4 text-center shadow-sm"
            >
              <div className="flex justify-center mb-2">
                <MapPin className="text-amber w-6 h-6" />
              </div>
              <p className="text-navy font-semibold text-sm">{area}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
