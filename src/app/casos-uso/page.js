import { UseCases } from "@/components/sections/UseCases";

export const metadata = {
  title: "Casos de Uso | AUTOMIQ -CORE-",
  description: "Ejemplos prácticos de automatización e IA en diversas industrias.",
};

export default function CasosUsoPage() {
  return (
    <div className="pt-24 pb-16">
      <UseCases />
    </div>
  );
}
