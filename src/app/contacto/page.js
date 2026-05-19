import { ContactForm } from "@/components/sections/ContactForm";

export const metadata = {
  title: "Contacto | AUTOMIQ -CORE-",
  description: "Ponte en contacto con nosotros para transformar tu negocio.",
};

export default function ContactoPage() {
  return (
    <div className="pt-24 pb-16">
      <ContactForm />
    </div>
  );
}
