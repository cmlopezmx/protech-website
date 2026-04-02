import { Home, Building2, KeyRound } from "lucide-react";

const cards = [
  {
    icon: Home,
    title: "Homeowners",
    description:
      "From a leaky faucet to a full renovation. One call handles it all.",
  },
  {
    icon: Building2,
    title: "Businesses",
    description:
      "Office build-outs, tenant improvements, and ongoing maintenance contracts.",
  },
  {
    icon: KeyRound,
    title: "Rental Properties",
    description:
      "Airbnb turnovers, emergency repairs, preventive care — even when you're not there.",
  },
];

export default function WhoWeServe() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-3">
            For every property type
          </p>
          <h2 className="text-4xl font-bold text-navy">Who We Serve</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-8 text-center shadow-sm"
            >
              <div className="flex items-center justify-center mx-auto mb-5 rounded-full bg-navy"
                style={{ width: 56, height: 56 }}>
                <Icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{title}</h3>
              <p className="text-body/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
