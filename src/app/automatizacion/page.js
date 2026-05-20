import { UseCases } from "@/components/sections/UseCases";

export const metadata = {
  title: "Automatización | AUTOMIQ -CORE-",
  description: "Ejemplos prácticos y casos de estudio de automatización operativa e integración de sistemas.",
};

export default function AutomatizacionPage() {
  return (
    <div className="pt-24 pb-16">
      <UseCases />
    </div>
  );
}
