import { Metadata } from "next";
import ConsultoriaProductividadClient from "./ConsultoriaProductividadClient";

export const metadata: Metadata = {
  title: "Consultoría Tecnológica y Productividad Chile | Di Monk Factory",
  description: "Transformamos la productividad de tu empresa con consultoría tecnológica especializada. Automatización de procesos, optimización de flujos de trabajo y transformación digital en Chile.",
  keywords: "consultoria tecnologica Chile, productividad empresarial, transformacion digital Chile, automatizacion procesos, optimizacion flujos trabajo, consultoria productividad, mejora continua empresas",
  alternates: {
    canonical: '/servicios/consultoria-productividad',
  },
  openGraph: {
    title: "Consultoría Tecnológica y Productividad Chile | Di Monk Factory",
    description: "Transformamos la productividad de tu empresa con consultoría tecnológica especializada. Automatización de procesos, optimización de flujos de trabajo y transformación digital en Chile.",
    url: 'https://www.dimonk.com/servicios/consultoria-productividad',
  },
};

export default function ConsultoriaProductividad() {
  return <ConsultoriaProductividadClient />;
}