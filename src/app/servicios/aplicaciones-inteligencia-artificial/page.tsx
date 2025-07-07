import { Metadata } from "next";
import AplicacionesIAClient from "./AplicacionesIAClient";

export const metadata: Metadata = {
  title: "Aplicaciones de Inteligencia Artificial en Chile | Di Monk Factory",
  description: "Desarrollamos aplicaciones de IA personalizadas para empresas chilenas. Automatización de procesos, análisis de datos, chatbots y machine learning. Transforma tu negocio con IA.",
  keywords: "aplicaciones IA empresas Chile, soluciones inteligencia artificial Chile, automatización procesos IA, machine learning Chile, chatbots empresariales, análisis datos IA",
  alternates: {
    canonical: '/servicios/aplicaciones-inteligencia-artificial',
  },
  openGraph: {
    title: "Aplicaciones de Inteligencia Artificial en Chile | Di Monk Factory",
    description: "Desarrollamos aplicaciones de IA personalizadas para empresas chilenas. Automatización de procesos, análisis de datos, chatbots y machine learning. Transforma tu negocio con IA.",
    url: 'https://www.dimonk.com/servicios/aplicaciones-inteligencia-artificial',
  },
};

export default function AplicacionesIA() {
  return <AplicacionesIAClient />;
}