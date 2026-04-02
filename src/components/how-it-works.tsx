const steps = [
  {
    number: "1",
    title: "Call Us",
    description: "Tell us what you need. Home, office, or rental property.",
  },
  {
    number: "2",
    title: "We Coordinate",
    description:
      "We match you with the right professional and manage the project.",
  },
  {
    number: "3",
    title: "Done Right",
    description: "We supervise, follow up, and guarantee the work.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-amber font-medium mb-3">
            Simple process
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            How It Works
          </h2>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-7 left-[calc(16.666%+1.75rem)] right-[calc(16.666%+1.75rem)] h-0.5 bg-amber/20" />

          {steps.map(({ number, title, description }) => (
            <div key={number} className="flex flex-col items-center text-center">
              <div className="relative z-10 w-14 h-14 rounded-full bg-amber flex items-center justify-center mb-5 shrink-0">
                <span className="text-white font-bold text-xl">{number}</span>
              </div>
              <h3 className="text-navy font-bold text-xl mb-2">{title}</h3>
              <p className="text-body text-base leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
