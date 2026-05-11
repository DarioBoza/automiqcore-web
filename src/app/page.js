import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Benefits } from "@/components/sections/Benefits";
import { UseCases } from "@/components/sections/UseCases";
import { ContactForm } from "@/components/sections/ContactForm";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Process />
        <Benefits />
        <UseCases />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
