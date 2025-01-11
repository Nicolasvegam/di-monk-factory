'use client';

import { useState } from 'react';

interface FAQItem {
  category: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

export default function FAQ() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const faqs: FAQItem[] = [
    {
      category: "Sobre empresas de desarrollo de software",
      questions: [
        {
          question: "¿Qué es una empresa de desarrollo de software y qué servicios ofrece?",
          answer: "Una empresa de desarrollo de software crea soluciones digitales personalizadas, como aplicaciones, plataformas y herramientas tecnológicas, adaptadas a las necesidades de cada negocio. En Di Monk Factory, combinamos nuestra experiencia en desarrollo ágil y herramientas de IA avanzadas para entregar resultados rápidos y soluciones escalables que posicionan a nuestros clientes un paso por delante de la competencia."
        },
        {
          question: "¿Qué empresas de software operan en Chile?",
          answer: "Chile cuenta con una amplia gama de empresas tecnológicas que ofrecen servicios como desarrollo de software a medida, soluciones TI, y aplicaciones de inteligencia artificial. En Di Monk Factory, no solo ofrecemos estas soluciones, sino que integramos IA en cada fase del proceso para maximizar la eficiencia y la calidad, asegurando un valor superior para nuestros clientes."
        },
        {
          question: "¿Por qué contratar una empresa de desarrollo de software en Chile?",
          answer: "Las empresas chilenas combinan talento técnico con costos competitivos, ofreciendo soluciones innovadoras y adaptadas al mercado local e internacional. Di Monk Factory destaca en el mercado gracias a su enfoque en herramientas modernas como AWS, Python y React, además de usar IA para acelerar los tiempos de entrega y garantizar productos de alta calidad."
        }
      ]
    },
    {
      category: "Sobre soluciones tecnológicas",
      questions: [
        {
          question: "¿Qué son las soluciones tecnológicas para empresas?",
          answer: "Son herramientas digitales diseñadas para optimizar procesos, mejorar la productividad y escalar negocios utilizando software, inteligencia artificial y tecnologías de la nube. En Di Monk Factory, desarrollamos soluciones tecnológicas integradas con IA, asegurando resultados más rápidos y personalizados que otras opciones en el mercado."
        },
        {
          question: "¿Qué beneficios ofrece implementar soluciones de TI en mi negocio?",
          answer: "Incrementan la eficiencia operativa, reducen costos, mejoran la experiencia del cliente y permiten tomar decisiones basadas en datos. Con Di Monk Factory, obtienes una ventaja competitiva, ya que nuestras soluciones combinan IA y tecnologías modernas como Next.js y Nest.js para garantizar resultados visibles en menor tiempo."
        },
        {
          question: "¿Qué tipos de soluciones tecnológicas existen?",
          answer: "Desde aplicaciones móviles hasta plataformas basadas en IA, soluciones cloud e infraestructura TI. En Di Monk Factory, ofrecemos estas soluciones con un enfoque personalizado, utilizando IA para optimizar cada proyecto y adaptarlo a las necesidades específicas de cada cliente."
        }
      ]
    },
    {
      category: "Sobre desarrollo de software a medida",
      questions: [
        {
          question: "¿Qué es el desarrollo de software a medida?",
          answer: "Es la creación de software personalizado para cumplir con los requerimientos específicos de un negocio, a diferencia de las soluciones genéricas. En Di Monk Factory, utilizamos herramientas avanzadas y algoritmos de IA para desarrollar software a medida de forma ágil y con resultados que superan los estándares del mercado."
        },
        {
          question: "¿Cuándo debo optar por un software a medida?",
          answer: "Cuando necesitas una herramienta que se ajuste perfectamente a tus procesos, escale con tu negocio y ofrezca ventajas competitivas únicas. Con Di Monk Factory, obtienes software diseñado específicamente para tus objetivos, entregado más rápido gracias a nuestras metodologías ágiles y el uso de IA para optimizar cada paso del desarrollo."
        },
        {
          question: "¿Qué ventajas tiene desarrollar software a medida en comparación con usar herramientas estándar?",
          answer: "Las soluciones personalizadas se integran mejor con tu flujo de trabajo y se adaptan a las necesidades cambiantes de tu empresa. En Di Monk Factory, nuestros desarrollos no solo se integran perfectamente, sino que también están respaldados por IA para garantizar flexibilidad, escalabilidad y tiempos de entrega sin competencia."
        }
      ]
    },
    {
      category: "Sobre aplicaciones de IA",
      questions: [
        {
          question: "¿Cómo pueden las aplicaciones de inteligencia artificial ayudar a mi negocio?",
          answer: "Las aplicaciones de IA pueden automatizar tareas, mejorar la toma de decisiones y personalizar la experiencia del cliente. En Di Monk Factory, utilizamos IA para crear soluciones personalizadas que transforman la productividad de tu negocio, ofreciendo automatización inteligente y análisis predictivo en tiempo récord."
        },
        {
          question: "¿Qué tipos de soluciones de IA se pueden implementar en una empresa?",
          answer: "Desde chatbots y sistemas de recomendación, hasta análisis predictivo y optimización de procesos. Di Monk Factory combina estas tecnologías con herramientas líderes para asegurarte aplicaciones de IA que generan valor inmediato y se adaptan a la evolución de tu empresa."
        }
      ]
    },
    {
      category: "Sobre tecnologías en la nube y DevOps",
      questions: [
        {
          question: "¿Qué es la tecnología en la nube y cómo beneficia a las empresas?",
          answer: "La tecnología en la nube permite almacenar, gestionar y procesar datos de manera segura y accesible desde cualquier lugar, mejorando la productividad y reduciendo costos. En Di Monk Factory, integramos servicios de nube con IA para garantizar soluciones seguras, escalables y optimizadas en tiempo récord."
        },
        {
          question: "¿Qué es la cultura DevOps y por qué es importante?",
          answer: "DevOps combina desarrollo y operaciones para agilizar el desarrollo de software, mejorar la calidad y reducir el tiempo de entrega. Con Di Monk Factory, adoptamos DevOps e integramos IA en cada etapa para entregar software de alta calidad más rápido que cualquier competidor."
        },
        {
          question: "¿Qué herramientas de DevOps son clave para startups tecnológicas?",
          answer: "Herramientas como AWS, Docker, Kubernetes y Jenkins son esenciales para una implementación eficaz de DevOps. En Di Monk Factory, no solo usamos estas herramientas, sino que las combinamos con IA para optimizar procesos, reducir tiempos de despliegue y garantizar resultados sobresalientes."
        }
      ]
    },
    {
      category: "Sobre SEO y crecimiento digital",
      questions: [
        {
          question: "¿Qué es el SEO y por qué es importante para mi empresa de software?",
          answer: "El SEO mejora la visibilidad de tu sitio en motores de búsqueda, atrayendo más tráfico orgánico y potenciales clientes. En Di Monk Factory, nuestras estrategias de SEO están potenciadas con IA, permitiendo un análisis rápido de keywords y optimización técnica que posiciona tu sitio más rápido que tus competidores."
        },
        {
          question: "¿Cómo optimizar mi sitio para keywords como 'empresas de desarrollo de software'?",
          answer: "Incluyendo estas keywords estratégicamente en títulos, meta descripciones, contenido de calidad y enlaces internos. Con Di Monk Factory, llevamos esta estrategia un paso más allá, usando IA para identificar oportunidades únicas de contenido y generar resultados más rápido."
        },
        {
          question: "¿Qué papel juega el marketing de crecimiento en una empresa de tecnología?",
          answer: "Es clave para atraer clientes, aumentar la conversión y escalar rápidamente en mercados competitivos. Di Monk Factory utiliza datos y herramientas de IA para crear estrategias de marketing personalizadas que maximizan tus resultados y reducen el tiempo necesario para ver un impacto tangible."
        }
      ]
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-24 mt-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-[#9945FF] to-[#14F195]" style={{ 
        filter: 'blur(100px)'
      }}></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto text-center mb-16 animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-6 text-white">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg md:text-xl font-light font-mono text-white">
            Resolvemos tus dudas sobre desarrollo de software y soluciones tecnológicas
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((category) => (
            <div key={category.category} className="mb-6">
              <button
                onClick={() => setOpenCategory(openCategory === category.category ? null : category.category)}
                className="w-full flex items-center justify-between p-4 bg-[rgba(153,69,255,0.05)] hover:bg-[rgba(153,69,255,0.1)] border border-[rgba(153,69,255,0.1)] rounded-xl mb-2 transition-all duration-300"
              >
                <span className="font-mono text-white font-medium">{category.category}</span>
                <span className={`transform transition-transform duration-300 ${openCategory === category.category ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {openCategory === category.category && (
                <div className="space-y-2 animate-fade-in pl-4">
                  {category.questions.map((item) => (
                    <div key={item.question} className="border border-white/20 rounded-xl overflow-hidden backdrop-blur-sm">
                      <button
                        onClick={() => setOpenQuestion(openQuestion === item.question ? null : item.question)}
                        className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-all duration-300"
                      >
                        <span className="text-left font-mono text-sm text-white/90 flex-1 mr-4">{item.question}</span>
                        <span className={`transform transition-transform duration-300 text-white/50 ${openQuestion === item.question ? 'rotate-180' : ''}`}>
                          ▼
                        </span>
                      </button>
                      
                      {openQuestion === item.question && (
                        <div className="p-4 bg-white/5 border-t border-white/20 animate-fade-in">
                          <p className="text-white/70 text-sm leading-relaxed">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 