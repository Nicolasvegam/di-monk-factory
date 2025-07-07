import { Metadata } from "next";
import DueDiligenceClient from "./DueDiligenceClient";

export const metadata: Metadata = {
  title: "Due Diligence Técnico en Chile | Di Monk Factory",
  description: "Evaluación técnica especializada para inversionistas y empresas en Chile. Auditoría de código, arquitectura, seguridad y riesgos tecnológicos. Expertos en due diligence.",
  keywords: "due diligence técnico, auditoría técnica Chile, evaluación tecnológica startup, análisis riesgo tecnológico, due diligence software Chile, consultoría inversionistas",
  alternates: {
    canonical: '/servicios/due-diligence-tecnico',
  },
  openGraph: {
    title: "Due Diligence Técnico en Chile | Di Monk Factory",
    description: "Evaluación técnica especializada para inversionistas y empresas en Chile. Auditoría de código, arquitectura, seguridad y riesgos tecnológicos. Expertos en due diligence.",
    url: 'https://www.dimonk.com/servicios/due-diligence-tecnico',
  },
};

export default function DueDiligenceTecnico() {
  return <DueDiligenceClient />;
}