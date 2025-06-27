'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ConsultoriaProductividadClient() {
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
              📈 Consultoría Tecnológica
            </div>
            <h1 className="font-sans text-4xl md:text-6xl xl:text-7xl font-semibold tracking-tight mb-8 text-white leading-tight">
              Transforma tu empresa con <span className="block">productividad inteligente</span>
            </h1>
            <p className="font-mono text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-10">
              Optimizamos procesos, implementamos tecnología avanzada y potenciamos la productividad de tu equipo con estrategias probadas en el mercado chileno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contacto" className="font-mono uppercase px-8 py-4 rounded-full font-medium transition-all duration-300 hover:opacity-80 bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] text-white text-center">
                Solicitar Auditoría
              </a>
              <a href="#casos" className="font-mono uppercase px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white/10 border border-white/20 text-white text-center">
                Ver Resultados
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl md:text-5xl font-semibold mb-6 text-white">
              Servicios de Consultoría Especializada
            </h2>
            <p className="font-mono text-lg text-white/60 max-w-3xl mx-auto">
              Transformamos tu operación con metodologías probadas y tecnología de punta
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#0C0C0D] p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-sans text-xl font-semibold mb-4 text-white">Auditoría Tecnológica</h3>
              <p className="font-mono text-white/70 mb-6 leading-relaxed">
                Evaluamos tu infraestructura actual para identificar oportunidades de optimización y crecimiento.
              </p>
              <ul className="font-mono text-sm text-white/50 space-y-3">
                <li>• Análisis sistemas existentes</li>
                <li>• Identificación cuellos de botella</li>
                <li>• Roadmap de mejoras prioritarias</li>
                <li>• Estimación ROI proyectado</li>
              </ul>
            </div>
            
            <div className="bg-[#0C0C0D] p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="font-sans text-xl font-semibold mb-4 text-white">Transformación Digital</h3>
              <p className="font-mono text-white/70 mb-6 leading-relaxed">
                Diseñamos estrategias de digitalización adaptadas específicamente a tu industria y objetivos.
              </p>
              <ul className="font-mono text-sm text-white/50 space-y-3">
                <li>• Estrategia digital personalizada</li>
                <li>• Migración segura a la nube</li>
                <li>• Automatización de procesos</li>
                <li>• Capacitación equipos clave</li>
              </ul>
            </div>
            
            <div className="bg-[#0C0C0D] p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-sans text-xl font-semibold mb-4 text-white">Optimización de Procesos</h3>
              <p className="font-mono text-white/70 mb-6 leading-relaxed">
                Rediseñamos workflows para maximizar eficiencia y reducir costos operativos significativamente.
              </p>
              <ul className="font-mono text-sm text-white/50 space-y-3">
                <li>• Mapeo procesos actuales</li>
                <li>• Identificación ineficiencias</li>
                <li>• Diseño workflows optimizados</li>
                <li>• Implementación y seguimiento</li>
              </ul>
            </div>
            
            <div className="bg-[#0C0C0D] p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-sans text-xl font-semibold mb-4 text-white">Selección de Tecnologías</h3>
              <p className="font-mono text-white/70 mb-6 leading-relaxed">
                Te ayudamos a elegir las herramientas y plataformas más adecuadas para tu negocio específico.
              </p>
              <ul className="font-mono text-sm text-white/50 space-y-3">
                <li>• Evaluación opciones mercado</li>
                <li>• Análisis costo-beneficio</li>
                <li>• Pruebas de concepto</li>
                <li>• Plan implementación detallado</li>
              </ul>
            </div>
            
            <div className="bg-[#0C0C0D] p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-sans text-xl font-semibold mb-4 text-white">Gestión del Cambio</h3>
              <p className="font-mono text-white/70 mb-6 leading-relaxed">
                Facilitamos la adopción de nuevas tecnologías minimizando resistencia y maximizando adopción del equipo.
              </p>
              <ul className="font-mono text-sm text-white/50 space-y-3">
                <li>• Estrategia comunicación</li>
                <li>• Capacitación personalizada</li>
                <li>• Soporte en transición</li>
                <li>• Medición adopción continua</li>
              </ul>
            </div>
            
            <div className="bg-[#0C0C0D] p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="font-sans text-xl font-semibold mb-4 text-white">Métricas y KPIs</h3>
              <p className="font-mono text-white/70 mb-6 leading-relaxed">
                Implementamos sistemas de medición para monitorear el impacto real de las mejoras tecnológicas.
              </p>
              <ul className="font-mono text-sm text-white/50 space-y-3">
                <li>• Definición KPIs relevantes</li>
                <li>• Dashboards tiempo real</li>
                <li>• Reportes ejecutivos</li>
                <li>• Análisis tendencias</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 bg-[#0C0C0D]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-sans text-3xl md:text-5xl font-semibold text-center mb-16 text-white">Especialización por Industria</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🏪</span>
              </div>
              <h3 className="font-sans font-semibold mb-2 text-white">Retail y E-commerce</h3>
              <p className="font-mono text-sm text-white/60">Omnicanalidad, gestión inventario, CRM avanzado, analytics de ventas</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="font-sans font-semibold mb-2 text-white">Manufactura</h3>
              <p className="font-mono text-sm text-white/60">Industria 4.0, IoT y sensores, mantenimiento predictivo, control calidad</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-sans font-semibold mb-2 text-white">Servicios Financieros</h3>
              <p className="font-mono text-sm text-white/60">Digitalización procesos, cumplimiento normativo, análisis riesgo</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="font-sans font-semibold mb-2 text-white">Salud</h3>
              <p className="font-mono text-sm text-white/60">Gestión pacientes, telemedicina, sistemas HIPAA, analytics clínico</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="font-sans font-semibold mb-2 text-white">Educación</h3>
              <p className="font-mono text-sm text-white/60">LMS personalizado, e-learning, gestión académica, analytics educativo</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="font-sans font-semibold mb-2 text-white">Logística</h3>
              <p className="font-mono text-sm text-white/60">Optimización rutas, tracking tiempo real, gestión flota</p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] blur-[200px]"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl md:text-5xl font-semibold mb-6 text-white">
              Metodología Probada
            </h2>
            <p className="font-mono text-lg text-white/60 max-w-3xl mx-auto">
              Enfoque estructurado que garantiza resultados medibles y duraderos
            </p>
          </div>
          
          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] opacity-30"></div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 font-bold text-lg group-hover:scale-110 transition-all duration-300 shadow-lg">
                    1
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                </div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">Diagnóstico Integral</h3>
                <p className="font-mono text-sm text-white/60 group-hover:text-white/80 transition-colors leading-relaxed">Evaluamos sistemas, procesos y equipos para identificar oportunidades</p>
              </div>
              
              <div className="text-center group">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 font-bold text-lg group-hover:scale-110 transition-all duration-300 shadow-lg">
                    2
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                </div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">Estrategia Personalizada</h3>
                <p className="font-mono text-sm text-white/60 group-hover:text-white/80 transition-colors leading-relaxed">Diseñamos plan específico alineado con objetivos de negocio</p>
              </div>
              
              <div className="text-center group">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 font-bold text-lg group-hover:scale-110 transition-all duration-300 shadow-lg">
                    3
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                </div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">Implementación Gradual</h3>
                <p className="font-mono text-sm text-white/60 group-hover:text-white/80 transition-colors leading-relaxed">Ejecutamos cambios por fases para minimizar disrupciones</p>
              </div>
              
              <div className="text-center group">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 font-bold text-lg group-hover:scale-110 transition-all duration-300 shadow-lg">
                    4
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                </div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">Medición Continua</h3>
                <p className="font-mono text-sm text-white/60 group-hover:text-white/80 transition-colors leading-relaxed">Monitoreamos resultados y optimizamos estrategia continuamente</p>
              </div>
            </div>
          </div>
          
          {/* Results Grid */}
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#274DD5]/20 to-[#0BBAE1]/20 p-6 rounded-xl border border-white/10">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] bg-clip-text text-transparent mb-2">25%</div>
                <div className="font-mono text-sm text-white/60">Aumento productividad promedio</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#274DD5]/20 to-[#0BBAE1]/20 p-6 rounded-xl border border-white/10">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] bg-clip-text text-transparent mb-2">40%</div>
                <div className="font-mono text-sm text-white/60">Reducción costos operativos</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#274DD5]/20 to-[#0BBAE1]/20 p-6 rounded-xl border border-white/10">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] bg-clip-text text-transparent mb-2">60%</div>
                <div className="font-mono text-sm text-white/60">Menor tiempo en procesos</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#274DD5]/20 to-[#0BBAE1]/20 p-6 rounded-xl border border-white/10">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] bg-clip-text text-transparent mb-2">90%</div>
                <div className="font-mono text-sm text-white/60">Satisfacción de clientes</div>
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
              Casos de Éxito Comprobados
            </h2>
            <p className="font-mono text-lg text-white/60 max-w-3xl mx-auto">
              Resultados reales que transformaron empresas chilenas con nuestra consultoría
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group">
              <div className="bg-black p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-xl flex items-center justify-center">
                    <span className="text-xl">🏭</span>
                  </div>
                  <div>
                    <h3 className="font-sans text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">PYME Manufacturera</h3>
                    <p className="font-mono text-sm text-white/50">Automatización de Procesos</p>
                  </div>
                </div>
                
                <p className="font-mono text-white/70 mb-8 leading-relaxed">
                  Implementamos sistema integrado de gestión que automatizó procesos manuales, reduciendo errores operativos y aumentando significativamente la productividad del equipo.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-[#274DD5]/20 to-[#0BBAE1]/20 p-6 rounded-xl border border-white/10 text-center group-hover:border-white/20 transition-all duration-300">
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] bg-clip-text text-transparent mb-2">80%</div>
                      <div className="font-mono text-sm text-white/60">Reducción errores</div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-gradient-to-br from-[#274DD5]/20 to-[#0BBAE1]/20 p-6 rounded-xl border border-white/10 text-center group-hover:border-white/20 transition-all duration-300">
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] bg-clip-text text-transparent mb-2">45%</div>
                      <div className="font-mono text-sm text-white/60">Mayor productividad</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-black p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-xl flex items-center justify-center">
                    <span className="text-xl">💼</span>
                  </div>
                  <div>
                    <h3 className="font-sans text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">Empresa de Servicios</h3>
                    <p className="font-mono text-sm text-white/50">Transformación Digital</p>
                  </div>
                </div>
                
                <p className="font-mono text-white/70 mb-8 leading-relaxed">
                  Digitalizamos procesos de atención al cliente implementando CRM avanzado y automatización que mejoró satisfacción y redujo tiempos de respuesta drásticamente.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-[#274DD5]/20 to-[#0BBAE1]/20 p-6 rounded-xl border border-white/10 text-center group-hover:border-white/20 transition-all duration-300">
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] bg-clip-text text-transparent mb-2">60%</div>
                      <div className="font-mono text-sm text-white/60">Mayor satisfacción</div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-gradient-to-br from-[#274DD5]/20 to-[#0BBAE1]/20 p-6 rounded-xl border border-white/10 text-center group-hover:border-white/20 transition-all duration-300">
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] bg-clip-text text-transparent mb-2">70%</div>
                      <div className="font-mono text-sm text-white/60">Menor tiempo respuesta</div>
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
              Preguntas Frecuentes sobre Consultoría
            </h2>
            <p className="font-mono text-lg md:text-xl text-white/70">
              Resolvemos tus dudas sobre transformación digital y productividad
            </p>
          </div>

          <div className="space-y-4">
            <div className="border border-[rgba(39,77,213,0.1)] rounded-xl overflow-hidden backdrop-blur-sm">
              <button
                onClick={() => setOpenQuestion(openQuestion === 'tiempo' ? null : 'tiempo')}
                className="w-full flex items-center justify-between p-6 bg-[rgba(39,77,213,0.05)] hover:bg-[rgba(39,77,213,0.1)] transition-all duration-300"
              >
                <span className="font-mono text-white font-medium text-left">¿Cuánto tiempo toma una consultoría completa?</span>
                <span className={`transform transition-transform duration-300 text-white/50 ${openQuestion === 'tiempo' ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {openQuestion === 'tiempo' && (
                <div className="p-6 bg-white/5 border-t border-[rgba(39,77,213,0.1)]">
                  <p className="text-white/70 leading-relaxed">
                    Depende del alcance del proyecto. Una auditoría inicial toma 2-4 semanas, mientras que 
                    una transformación digital completa puede extenderse 6-12 meses. Siempre trabajamos 
                    por fases para entregar valor incremental desde el primer mes.
                  </p>
                </div>
              )}
            </div>
            
            <div className="border border-[rgba(39,77,213,0.1)] rounded-xl overflow-hidden backdrop-blur-sm">
              <button
                onClick={() => setOpenQuestion(openQuestion === 'tamaño' ? null : 'tamaño')}
                className="w-full flex items-center justify-between p-6 bg-[rgba(39,77,213,0.05)] hover:bg-[rgba(39,77,213,0.1)] transition-all duration-300"
              >
                <span className="font-mono text-white font-medium text-left">¿Trabajan con empresas de todos los tamaños?</span>
                <span className={`transform transition-transform duration-300 text-white/50 ${openQuestion === 'tamaño' ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {openQuestion === 'tamaño' && (
                <div className="p-6 bg-white/5 border-t border-[rgba(39,77,213,0.1)]">
                  <p className="text-white/70 leading-relaxed">
                    Sí, desde startups hasta grandes corporaciones. Adaptamos nuestra metodología y 
                    propuesta de valor según el tamaño, presupuesto y madurez tecnológica de cada organización.
                  </p>
                </div>
              )}
            </div>
            
            <div className="border border-[rgba(39,77,213,0.1)] rounded-xl overflow-hidden backdrop-blur-sm">
              <button
                onClick={() => setOpenQuestion(openQuestion === 'medicion' ? null : 'medicion')}
                className="w-full flex items-center justify-between p-6 bg-[rgba(39,77,213,0.05)] hover:bg-[rgba(39,77,213,0.1)] transition-all duration-300"
              >
                <span className="font-mono text-white font-medium text-left">¿Cómo miden el éxito de la consultoría?</span>
                <span className={`transform transition-transform duration-300 text-white/50 ${openQuestion === 'medicion' ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {openQuestion === 'medicion' && (
                <div className="p-6 bg-white/5 border-t border-[rgba(39,77,213,0.1)]">
                  <p className="text-white/70 leading-relaxed">
                    Definimos KPIs específicos al inicio: reducción de costos, aumento de productividad, 
                    mejora en satisfacción del cliente, etc. Monitoreamos estos indicadores continuamente 
                    y ajustamos la estrategia según sea necesario para garantizar resultados.
                  </p>
                </div>
              )}
            </div>
            
            <div className="border border-[rgba(39,77,213,0.1)] rounded-xl overflow-hidden backdrop-blur-sm">
              <button
                onClick={() => setOpenQuestion(openQuestion === 'soporte' ? null : 'soporte')}
                className="w-full flex items-center justify-between p-6 bg-[rgba(39,77,213,0.05)] hover:bg-[rgba(39,77,213,0.1)] transition-all duration-300"
              >
                <span className="font-mono text-white font-medium text-left">¿Ofrecen soporte después de la implementación?</span>
                <span className={`transform transition-transform duration-300 text-white/50 ${openQuestion === 'soporte' ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {openQuestion === 'soporte' && (
                <div className="p-6 bg-white/5 border-t border-[rgba(39,77,213,0.1)]">
                  <p className="text-white/70 leading-relaxed">
                    Absolutamente. Incluimos 3 meses de soporte post-implementación y ofrecemos contratos 
                    de soporte extendido. También proporcionamos capacitación continua para asegurar la 
                    adopción exitosa de las nuevas tecnologías y procesos.
                  </p>
                </div>
              )}
            </div>
            
            <div className="border border-[rgba(39,77,213,0.1)] rounded-xl overflow-hidden backdrop-blur-sm">
              <button
                onClick={() => setOpenQuestion(openQuestion === 'costo' ? null : 'costo')}
                className="w-full flex items-center justify-between p-6 bg-[rgba(39,77,213,0.05)] hover:bg-[rgba(39,77,213,0.1)] transition-all duration-300"
              >
                <span className="font-mono text-white font-medium text-left">¿Cuánto cuesta una consultoría tecnológica?</span>
                <span className={`transform transition-transform duration-300 text-white/50 ${openQuestion === 'costo' ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {openQuestion === 'costo' && (
                <div className="p-6 bg-white/5 border-t border-[rgba(39,77,213,0.1)]">
                  <p className="text-white/70 leading-relaxed">
                    Los costos varían según alcance: desde $5,000 USD para auditorías puntuales hasta $50,000+ USD 
                    para transformaciones digitales completas. Ofrecemos consultoría inicial gratuita para evaluar 
                    tu situación y proporcionar una cotización personalizada.
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