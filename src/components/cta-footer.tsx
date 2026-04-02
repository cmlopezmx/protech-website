import { Phone, Mail } from "lucide-react";

export default function CtaFooter() {
  return (
    <>
      {/* CTA Section */}
      <section className="bg-navy py-16 sm:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to stop chasing contractors?
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Call us today — we&apos;ll take it from here.
          </p>
          <a
            href="tel:+17133779200"
            className="inline-flex items-center gap-3 bg-amber text-white text-xl font-bold rounded px-10 py-4 hover:opacity-90 transition-opacity"
          >
            <Phone className="w-6 h-6" />
            Call Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy/95 border-t border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
            {/* Left: Logo + tagline */}
            <div className="text-center md:text-left">
              <p className="text-white font-bold text-lg mb-1">PROTECH</p>
              <p className="text-white/40 text-xs">
                ProTech Home &amp; Business Services | DNA Pro Solutions LLC
              </p>
            </div>

            {/* Right: Contact links */}
            <div className="flex flex-col gap-3">
              <a
                href="tel:+17133779200"
                className="flex items-center gap-2 text-white/60 hover:text-amber transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                (713) 377-9200
              </a>
              <a
                href="mailto:info@protechservices.com"
                className="flex items-center gap-2 text-white/60 hover:text-amber transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                info@protechservices.com
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-6 text-center space-y-1">
            <p className="text-xs text-white/30">
              Serving The Woodlands · Conroe · Cypress · Spring · Tomball · Houston
            </p>
            <p className="text-xs text-white/30">
              © 2026 DNA Pro Solutions LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
