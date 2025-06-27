'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function DesarrolloSoftwareClient() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-[60vh] py-20 md:py-32 flex items-center relative bg-gradient-to-b from-[#0C0C0D] from-0% via-[#0C0C0D] via-60% to-black to-100%">
        <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] blur-[150px]"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-mono uppercase mb-6">
              💻 Desarrollo de Software
            </div>
            <h1 className="font-sans text-4xl md:text-6xl xl:text-7xl font-semibold tracking-tight mb-8 text-white leading-tight">
              Software a medida que <span className="block">impulsa tu crecimiento</span>
            </h1>
            <p className="font-mono text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-10">
              Creamos soluciones tecnológicas personalizadas y escalables que revolucionan tu empresa. Desde MVP hasta aplicaciones empresariales complejas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contacto" className="font-mono uppercase px-8 py-4 rounded-full font-medium transition-all duration-300 hover:opacity-80 bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] text-white text-center">
                Cotizar Proyecto
              </a>
              <a href="#casos" className="font-mono uppercase px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white/10 border border-white/20 text-white text-center">
                Ver Portafolio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Development Services */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl md:text-5xl font-semibold mb-6 text-white">
              Servicios de Desarrollo Especializado
            </h2>
            <p className="font-mono text-lg text-white/60 max-w-3xl mx-auto">
              Soluciones tecnológicas personalizadas que transforman ideas en productos exitosos
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#0C0C0D] p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm5 2a1 1 0 000 2h4a1 1 0 100-2H8z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-sans text-xl font-semibold mb-4 text-white">Desarrollo MVP</h3>
              <p className="font-mono text-white/70 mb-6 leading-relaxed">
                Lanzamos tu producto mínimo viable en tiempo récord para validar ideas y captar inversión.
              </p>
              <ul className="font-mono text-sm text-white/50 space-y-3">
                <li>• Validación rápida mercado</li>
                <li>• Desarrollo ágil 4-8 semanas</li>
                <li>• Costos optimizados</li>
                <li>• Escalabilidad garantizada</li>
              </ul>
            </div>
            
            <div className="bg-[#0C0C0D] p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-sans text-xl font-semibold mb-4 text-white">Aplicaciones Web</h3>
              <p className="font-mono text-white/70 mb-6 leading-relaxed">
                Desarrollamos aplicaciones web modernas, responsivas y optimizadas con tecnologías de vanguardia.
              </p>
              <ul className="font-mono text-sm text-white/50 space-y-3">
                <li>• React, Next.js, Node.js</li>
                <li>• Diseño responsive</li>
                <li>• Optimización SEO</li>
                <li>• Seguridad avanzada</li>
              </ul>
            </div>
            
            <div className="bg-[#0C0C0D] p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm0 2h8v6H6V8zm2-2V5a1 1 0 011-1h2a1 1 0 011 1v1H8z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-sans text-xl font-semibold mb-4 text-white">Software Empresarial</h3>
              <p className="font-mono text-white/70 mb-6 leading-relaxed">
                Sistemas complejos que automatizan y optimizan procesos empresariales críticos.
              </p>
              <ul className="font-mono text-sm text-white/50 space-y-3">
                <li>• ERP personalizado</li>
                <li>• Integración sistemas</li>
                <li>• APIs y microservicios</li>
                <li>• Escalabilidad empresarial</li>
              </ul>
            </div>
            
            <div className="bg-[#0C0C0D] p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="font-sans text-xl font-semibold mb-4 text-white">Aplicaciones Móviles</h3>
              <p className="font-mono text-white/70 mb-6 leading-relaxed">
                Apps nativas y híbridas que conectan con tus usuarios en cualquier dispositivo.
              </p>
              <ul className="font-mono text-sm text-white/50 space-y-3">
                <li>• iOS y Android nativo</li>
                <li>• React Native / Flutter</li>
                <li>• Integración APIs</li>
                <li>• Push notifications</li>
              </ul>
            </div>
            
            <div className="bg-[#0C0C0D] p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm4.996 2.003L6 8.003v4l.996-.003L8 12V8l-.996-.003L6.996 8.003zm4.007-.01L10 8.003v4l1.003-.01 1-.003V8l-1.003.003-.997-.01z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-sans text-xl font-semibold mb-4 text-white">E-commerce Avanzado</h3>
              <p className="font-mono text-white/70 mb-6 leading-relaxed">
                Plataformas de comercio electrónico personalizadas que maximizan conversiones.
              </p>
              <ul className="font-mono text-sm text-white/50 space-y-3">
                <li>• Pasarelas pago seguras</li>
                <li>• Gestión inventario</li>
                <li>• Analytics avanzado</li>
                <li>• Integración marketplaces</li>
              </ul>
            </div>
            
            <div className="bg-[#0C0C0D] p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-sans text-xl font-semibold mb-4 text-white">APIs y Integraciones</h3>
              <p className="font-mono text-white/70 mb-6 leading-relaxed">
                Conectamos sistemas existentes y creamos APIs robustas para ecosistemas complejos.
              </p>
              <ul className="font-mono text-sm text-white/50 space-y-3">
                <li>• APIs RESTful</li>
                <li>• Microservicios</li>
                <li>• Integración third-party</li>
                <li>• Documentación completa</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 bg-[#0C0C0D]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-sans text-3xl md:text-5xl font-semibold text-center mb-16 text-white">Desarrollo por Industria</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🏪</span>
              </div>
              <h3 className="font-sans font-semibold mb-2 text-white">E-commerce</h3>
              <p className="font-mono text-sm text-white/60">Tiendas online, marketplaces, sistemas de pago</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-sans font-semibold mb-2 text-white">FinTech</h3>
              <p className="font-mono text-sm text-white/60">Pagos digitales, billeteras, préstamos online</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="font-sans font-semibold mb-2 text-white">HealthTech</h3>
              <p className="font-mono text-sm text-white/60">Telemedicina, gestión citas, historiales</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="font-sans font-semibold mb-2 text-white">EdTech</h3>
              <p className="font-mono text-sm text-white/60">LMS, e-learning, gestión académica</p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] blur-[200px]"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl md:text-5xl font-semibold mb-6 text-white">
              Proceso de Desarrollo Ágil
            </h2>
            <p className="font-mono text-lg text-white/60 max-w-3xl mx-auto">
              Metodología probada que garantiza entregas rápidas y software de calidad
            </p>
          </div>
          
          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] opacity-30"></div>
            
            <div className="grid md:grid-cols-5 gap-8">
              <div className="text-center group">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 font-bold text-lg group-hover:scale-110 transition-all duration-300 shadow-lg">
                    1
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                </div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">Análisis</h3>
                <p className="font-mono text-sm text-white/60 group-hover:text-white/80 transition-colors leading-relaxed">Definimos requisitos y arquitectura técnica óptima</p>
              </div>
              
              <div className="text-center group">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 font-bold text-lg group-hover:scale-110 transition-all duration-300 shadow-lg">
                    2
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                </div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">Diseño UX/UI</h3>
                <p className="font-mono text-sm text-white/60 group-hover:text-white/80 transition-colors leading-relaxed">Creamos interfaces intuitivas y experiencias memorables</p>
              </div>
              
              <div className="text-center group">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 font-bold text-lg group-hover:scale-110 transition-all duration-300 shadow-lg">
                    3
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                </div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">Desarrollo</h3>
                <p className="font-mono text-sm text-white/60 group-hover:text-white/80 transition-colors leading-relaxed">Codificamos con metodologías ágiles y entregas frecuentes</p>
              </div>
              
              <div className="text-center group">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 font-bold text-lg group-hover:scale-110 transition-all duration-300 shadow-lg">
                    4
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                </div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">Testing</h3>
                <p className="font-mono text-sm text-white/60 group-hover:text-white/80 transition-colors leading-relaxed">Pruebas exhaustivas para garantizar calidad y rendimiento</p>
              </div>
              
              <div className="text-center group">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 font-bold text-lg group-hover:scale-110 transition-all duration-300 shadow-lg">
                    5
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                </div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">Lanzamiento</h3>
                <p className="font-mono text-sm text-white/60 group-hover:text-white/80 transition-colors leading-relaxed">Despliegue seguro y soporte continuo post-lanzamiento</p>
              </div>
            </div>
          </div>
          
          {/* Results Grid */}
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#274DD5]/20 to-[#0BBAE1]/20 p-6 rounded-xl border border-white/10">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] bg-clip-text text-transparent mb-2">50+</div>
                <div className="font-mono text-sm text-white/60">Proyectos exitosos</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#274DD5]/20 to-[#0BBAE1]/20 p-6 rounded-xl border border-white/10">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] bg-clip-text text-transparent mb-2">50%</div>
                <div className="font-mono text-sm text-white/60">Entrega más rápida</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#274DD5]/20 to-[#0BBAE1]/20 p-6 rounded-xl border border-white/10">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] bg-clip-text text-transparent mb-2">99%</div>
                <div className="font-mono text-sm text-white/60">Satisfacción clientes</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#274DD5]/20 to-[#0BBAE1]/20 p-6 rounded-xl border border-white/10">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] bg-clip-text text-transparent mb-2">3M</div>
                <div className="font-mono text-sm text-white/60">Soporte post-lanzamiento</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="casos" className="py-20 px-4 bg-[#0C0C0D] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] blur-[150px]"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl md:text-5xl font-semibold mb-6 text-white">
              Portafolio de Proyectos Exitosos
            </h2>
            <p className="font-mono text-lg text-white/60 max-w-3xl mx-auto">
              Software que transformó empresas y generó millones en valor
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group">
              <div className="bg-black p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-xl flex items-center justify-center">
                    <span className="text-xl">🏪</span>
                  </div>
                  <div>
                    <h3 className="font-sans text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">Retail Chileno</h3>
                    <p className="font-mono text-sm text-white/50">Sistema Gestión Inventario</p>
                  </div>
                </div>
                
                <p className="font-mono text-white/70 mb-8 leading-relaxed">
                  Desarrollamos ERP personalizado que automatizó procesos de inventario, reduciendo costos operativos y mejorando precisión de stock en tiempo real.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-[#274DD5]/20 to-[#0BBAE1]/20 p-6 rounded-xl border border-white/10 text-center group-hover:border-white/20 transition-all duration-300">
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] bg-clip-text text-transparent mb-2">40%</div>
                      <div className="font-mono text-sm text-white/60">Reducción costos</div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-gradient-to-br from-[#274DD5]/20 to-[#0BBAE1]/20 p-6 rounded-xl border border-white/10 text-center group-hover:border-white/20 transition-all duration-300">
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] bg-clip-text text-transparent mb-2">99%</div>
                      <div className="font-mono text-sm text-white/60">Precisión inventario</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-black p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-xl flex items-center justify-center">
                    <span className="text-xl">💰</span>
                  </div>
                  <div>
                    <h3 className="font-sans text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">Startup FinTech</h3>
                    <p className="font-mono text-sm text-white/50">Plataforma de Pagos MVP</p>
                  </div>
                </div>
                
                <p className="font-mono text-white/70 mb-8 leading-relaxed">
                  MVP de plataforma de pagos desarrollado en 6 semanas que procesó $2M USD en su primer año y captó inversión serie A de $5M USD.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-[#274DD5]/20 to-[#0BBAE1]/20 p-6 rounded-xl border border-white/10 text-center group-hover:border-white/20 transition-all duration-300">
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] bg-clip-text text-transparent mb-2">$2M</div>
                      <div className="font-mono text-sm text-white/60">Procesados año 1</div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-gradient-to-br from-[#274DD5]/20 to-[#0BBAE1]/20 p-6 rounded-xl border border-white/10 text-center group-hover:border-white/20 transition-all duration-300">
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] bg-clip-text text-transparent mb-2">$5M</div>
                      <div className="font-mono text-sm text-white/60">Inversión Serie A</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] blur-[100px]"></div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-6 text-white">
              Preguntas Frecuentes sobre Desarrollo
            </h2>
            <p className="font-mono text-lg md:text-xl text-white/70">
              Resolvemos tus dudas sobre desarrollo de software a medida
            </p>
          </div>

          <div className="space-y-4">
            <div className="border border-[rgba(39,77,213,0.1)] rounded-xl overflow-hidden backdrop-blur-sm">
              <button
                onClick={() => setOpenQuestion(openQuestion === 'costo' ? null : 'costo')}
                className="w-full flex items-center justify-between p-6 bg-[rgba(39,77,213,0.05)] hover:bg-[rgba(39,77,213,0.1)] transition-all duration-300"
              >
                <span className="font-mono text-white font-medium text-left">¿Cuánto cuesta desarrollar software a medida en Chile?</span>
                <span className={`transform transition-transform duration-300 text-white/50 ${openQuestion === 'costo' ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {openQuestion === 'costo' && (
                <div className="p-6 bg-white/5 border-t border-[rgba(39,77,213,0.1)]">
                  <p className="text-white/70 leading-relaxed">
                    Los costos varían según complejidad: MVP desde $5,000 USD, aplicaciones medianas $15,000-50,000 USD, 
                    sistemas empresariales $50,000+ USD. Ofrecemos cotizaciones gratuitas personalizadas con roadmap detallado.
                  </p>
                </div>
              )}
            </div>
            
            <div className="border border-[rgba(39,77,213,0.1)] rounded-xl overflow-hidden backdrop-blur-sm">
              <button
                onClick={() => setOpenQuestion(openQuestion === 'tiempo' ? null : 'tiempo')}
                className="w-full flex items-center justify-between p-6 bg-[rgba(39,77,213,0.05)] hover:bg-[rgba(39,77,213,0.1)] transition-all duration-300"
              >
                <span className="font-mono text-white font-medium text-left">¿Cuánto tiempo toma desarrollar una aplicación?</span>
                <span className={`transform transition-transform duration-300 text-white/50 ${openQuestion === 'tiempo' ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {openQuestion === 'tiempo' && (
                <div className="p-6 bg-white/5 border-t border-[rgba(39,77,213,0.1)]">
                  <p className="text-white/70 leading-relaxed">
                    Tiempos promedio: MVP (4-8 semanas), aplicaciones medianas (2-4 meses), sistemas empresariales (4-12 meses). 
                    Utilizamos metodologías ágiles para entregas rápidas y feedback continuo.
                  </p>
                </div>
              )}
            </div>
            
            <div className="border border-[rgba(39,77,213,0.1)] rounded-xl overflow-hidden backdrop-blur-sm">
              <button
                onClick={() => setOpenQuestion(openQuestion === 'tecnologias' ? null : 'tecnologias')}
                className="w-full flex items-center justify-between p-6 bg-[rgba(39,77,213,0.05)] hover:bg-[rgba(39,77,213,0.1)] transition-all duration-300"
              >
                <span className="font-mono text-white font-medium text-left">¿Qué tecnologías utilizan para el desarrollo?</span>
                <span className={`transform transition-transform duration-300 text-white/50 ${openQuestion === 'tecnologias' ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {openQuestion === 'tecnologias' && (
                <div className="p-6 bg-white/5 border-t border-[rgba(39,77,213,0.1)]">
                  <p className="text-white/70 leading-relaxed">
                    Stack moderno: React/Next.js para frontend, Node.js/Python para backend, PostgreSQL/MongoDB para bases de datos, 
                    AWS/Vercel para infraestructura. Seleccionamos la mejor tecnología según cada proyecto específico.
                  </p>
                </div>
              )}
            </div>
            
            <div className="border border-[rgba(39,77,213,0.1)] rounded-xl overflow-hidden backdrop-blur-sm">
              <button
                onClick={() => setOpenQuestion(openQuestion === 'soporte' ? null : 'soporte')}
                className="w-full flex items-center justify-between p-6 bg-[rgba(39,77,213,0.05)] hover:bg-[rgba(39,77,213,0.1)] transition-all duration-300"
              >
                <span className="font-mono text-white font-medium text-left">¿Ofrecen soporte post-lanzamiento?</span>
                <span className={`transform transition-transform duration-300 text-white/50 ${openQuestion === 'soporte' ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {openQuestion === 'soporte' && (
                <div className="p-6 bg-white/5 border-t border-[rgba(39,77,213,0.1)]">
                  <p className="text-white/70 leading-relaxed">
                    Sí, incluimos 3 meses de soporte gratuito post-lanzamiento. Después ofrecemos planes de mantenimiento 
                    desde $500 USD/mes que incluyen updates, monitoreo, nuevas funcionalidades y soporte técnico 24/7.
                  </p>
                </div>
              )}
            </div>
            
            <div className="border border-[rgba(39,77,213,0.1)] rounded-xl overflow-hidden backdrop-blur-sm">
              <button
                onClick={() => setOpenQuestion(openQuestion === 'escalabilidad' ? null : 'escalabilidad')}
                className="w-full flex items-center justify-between p-6 bg-[rgba(39,77,213,0.05)] hover:bg-[rgba(39,77,213,0.1)] transition-all duration-300"
              >
                <span className="font-mono text-white font-medium text-left">¿Cómo garantizan la escalabilidad del software?</span>
                <span className={`transform transition-transform duration-300 text-white/50 ${openQuestion === 'escalabilidad' ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {openQuestion === 'escalabilidad' && (
                <div className="p-6 bg-white/5 border-t border-[rgba(39,77,213,0.1)]">
                  <p className="text-white/70 leading-relaxed">
                    Diseñamos arquitecturas modernas con microservicios, APIs RESTful, bases de datos optimizadas y 
                    infraestructura en la nube. Esto permite que tu software crezca sin limitaciones técnicas.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}