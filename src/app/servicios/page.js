import { Services } from "@/components/sections/Services";

export const metadata = {
  title: "Servicios | AUTOMIQ -CORE-",
  description: "Descubre nuestros servicios de Inteligencia Artificial para negocios.",
};

export default function ServiciosPage() {
  return (
    <div className="pt-24 pb-16">
      <Services />
    </div>
  );
}
