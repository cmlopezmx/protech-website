import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ProTech Home & Business Services | Property Maintenance Houston TX",
  description:
    "Your single point of contact for property maintenance in The Woodlands, Conroe, Cypress & Houston. We coordinate electrical, plumbing, HVAC, renovations, and more — so you never chase a contractor again.",
  keywords: [
    "property maintenance Houston",
    "home maintenance The Woodlands",
    "contractor coordination Texas",
    "HVAC Conroe TX",
    "handyman Cypress TX",
  ],
  openGraph: {
    title: "ProTech Home & Business Services | Property Maintenance Houston TX",
    description:
      "Your single point of contact for property maintenance in The Woodlands, Conroe, Cypress & Houston. We coordinate electrical, plumbing, HVAC, renovations, and more — so you never chase a contractor again.",
    url: "https://dnaprosolutions.com",
    siteName: "ProTech Home & Business Services",
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ProTech Home & Business Services",
  legalName: "DNA Pro Solutions LLC",
  url: "https://dnaprosolutions.com",
  telephone: "+17133779200",
  email: "info@protechhome.net",
  address: {
    "@type": "PostalAddress",
    streetAddress: "25420 Kuykendahl Rd Ste B200-166",
    addressLocality: "Tomball",
    addressRegion: "TX",
    postalCode: "77375",
    addressCountry: "US",
  },
  areaServed: [
    "The Woodlands TX",
    "Conroe TX",
    "Cypress TX",
    "Spring TX",
    "Tomball TX",
    "Houston TX",
  ],
  serviceType: [
    "Electrical",
    "Plumbing",
    "HVAC",
    "Renovations",
    "Painting",
    "Preventive Maintenance",
    "Handyman",
    "Odor Treatment",
    "Landscaping",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans text-body antialiased min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
