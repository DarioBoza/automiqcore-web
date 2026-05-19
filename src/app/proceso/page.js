import { Process } from "@/components/sections/Process";

export const metadata = {
  title: "Nuestro Proceso | AUTOMIQ -CORE-",
  description: "Conoce cómo implementamos soluciones de IA en tu empresa paso a paso.",
};

export default function ProcesoPage() {
  return (
    <div className="pt-24 pb-16">
      <Process />
    </div>
  );
}
