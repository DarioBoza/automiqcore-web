import { Services } from "@/components/sections/Services";

export const metadata = {
  title: "Servicios | AUTOMIQ -CORE-",
  description: "Líneas de especialización en sistemas digitales y automatización operativa para empresas B2B.",
};

export default function ServiciosPage() {
  return (
    <div className="pt-24 pb-16">
      <Services />
    </div>
  );
}
