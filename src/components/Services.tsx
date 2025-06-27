import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: 'Aplicaciones de IA',
      description: 'Automatización y machine learning para impulsar tu negocio',
      href: '/servicios/aplicaciones-inteligencia-artificial',
      icon: '🤖'
    },
    {
      title: 'Consultoría Tecnológica',
      description: 'Transformación digital y optimización de productividad',
      href: '/servicios/consultoria-productividad',
      icon: '📈'
    },
    {
      title: 'Desarrollo a Medida',
      description: 'Software personalizado y MVP para tu startup',
      href: '/servicios/desarrollo-software-medida',
      icon: '💻'
    },
    {
      title: 'Due Diligence Técnico',
      description: 'Evaluación técnica completa para inversionistas',
      href: '/servicios/due-diligence-tecnico',
      icon: '🔍'
    }
  ];

  return (
    <section
      id="services"
      className="py-20 md:py-24 mt-12 relative overflow-hidden bg-black"
    >
      <div className="absolute inset-0">
        <Image
          src="/building.png"
          alt="Edificio moderno representando desarrollo de software e innovación tecnológica"
          fill
          className="object-cover opacity-40"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent"></div>
      <div
        className="absolute inset-0 opacity-5 bg-gradient-to-br from-[#9945FF] to-[#14F195]"
        style={{
          filter: "blur(100px)",
        }}
      ></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto text-center mb-16 animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-6 text-white">
            Nuestros Servicios
          </h2>
          <p className="text-lg md:text-xl font-light font-mono text-white">
            Soluciones tecnológicas que impulsan tu negocio al siguiente nivel
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group block"
            >
              <div
                className="p-8 rounded-2xl transition-all duration-300 animate-fade-in opacity-0 [animation-fill-mode:forwards] bg-slate-900/60 border border-slate-800 backdrop-blur-sm hover:scale-105 hover:border-[#274DD5] hover:shadow-xl hover:shadow-[#274DD5]/20 cursor-pointer"
                style={{
                  animationDelay: `${400 + index * 100}ms`,
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-xl flex items-center justify-center text-xl">
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-slate-400">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  <span className="text-sm font-mono">Ver más detalles</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 