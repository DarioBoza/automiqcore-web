import { Process } from "@/components/sections/Process";

export const metadata = {
  title: "Nuestro Proceso | AUTOMIQ -CORE-",
  description: "Conoce nuestra metodología rigurosa para diseñar, integrar y desplegar sistemas digitales estables.",
};

export default function ProcesoPage() {
  return (
    <div className="pt-24 pb-16">
      <Process />
    </div>
  );
}
