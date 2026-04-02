import { PhoneOff, Clock, ShieldAlert } from "lucide-react";

const problems = [
  {
    icon: PhoneOff,
    text: "Tired of calling 10 different contractors?",
  },
  {
    icon: Clock,
    text: "Frustrated with no-shows and broken promises?",
  },
  {
    icon: ShieldAlert,
    text: "Don't know who to trust for quality work?",
  },
];

export default function Problem() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-navy/60 font-medium mb-3">
            Sound familiar?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Managing property maintenance shouldn&apos;t be this hard.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="bg-surface rounded-xl p-8 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-amber/10 flex items-center justify-center mb-5">
                <Icon className="w-7 h-7 text-amber" strokeWidth={1.75} />
              </div>
              <p className="text-navy font-bold text-lg leading-snug">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
