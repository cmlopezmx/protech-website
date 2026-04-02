import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import Problem from "@/components/problem";
import HowItWorks from "@/components/how-it-works";
import Services from "@/components/services";
import WhoWeServe from "@/components/who-we-serve";
import WhyProtech from "@/components/why-protech";
import Gallery from "@/components/gallery";
import ServiceAreas from "@/components/service-areas";
import CtaFooter from "@/components/cta-footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Services />
        <WhoWeServe />
        <WhyProtech />
        <Gallery />
        <ServiceAreas />
      </main>
      <CtaFooter />
    </>
  );
}
