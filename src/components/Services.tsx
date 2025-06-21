import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: 'Aplicaciones de IA',
      description: 'Soluciones personalizadas de IA para tu negocio'
    },
    {
      title: 'Desarrollo de MVP',
      description: 'Desarrollo rápido de productos mínimos viables'
    },
    {
      title: 'Consultoría de Productividad',
      description: 'Optimiza el flujo de trabajo y la eficiencia de tu equipo'
    },
    {
      title: 'Due Diligence Técnico',
      description: 'Servicios completos de evaluación técnica'
    },
    {
      title: 'Marketing de Crecimiento',
      description: 'Aumenta tu tráfico y tasa de conversión'
    },
    {
      title: 'SEO',
      description: 'Mejora tu visibilidad en motores de búsqueda'
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
          alt="Abstract background"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="p-8 rounded-2xl transition-all duration-300 animate-fade-in opacity-0 [animation-fill-mode:forwards] bg-slate-900/60 border border-slate-800 backdrop-blur-sm hover:scale-105 hover:border-[#274DD5] hover:shadow-xl hover:shadow-[#274DD5]/20"
              style={{
                animationDelay: `${400 + index * 100}ms`,
              }}
            >
              <h3 className="text-xl md:text-2xl font-medium mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-base leading-relaxed text-slate-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 