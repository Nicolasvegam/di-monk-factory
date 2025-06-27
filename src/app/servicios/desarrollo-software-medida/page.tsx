import { Metadata } from "next";
import DesarrolloSoftwareClient from "./DesarrolloSoftwareClient";

export const metadata: Metadata = {
  title: "Desarrollo de Software a Medida en Chile | Di Monk Factory",
  description: "Empresa líder en desarrollo de software personalizado en Chile. Creamos soluciones tecnológicas a medida para empresas. MVP, aplicaciones web y móviles. Cotiza gratis.",
  keywords: "desarrollo software a medida Chile, software personalizado Chile, empresa desarrollo software Santiago, aplicaciones a medida, MVP desarrollo Chile, software empresarial personalizado",
  alternates: {
    canonical: '/servicios/desarrollo-software-medida',
  },
  openGraph: {
    title: "Desarrollo de Software a Medida en Chile | Di Monk Factory",
    description: "Empresa líder en desarrollo de software personalizado en Chile. Creamos soluciones tecnológicas a medida para empresas. MVP, aplicaciones web y móviles. Cotiza gratis.",
    url: 'https://software.nicovega.dev/servicios/desarrollo-software-medida',
  },
};

export default function DesarrolloSoftwareMedida() {
  return <DesarrolloSoftwareClient />;
}