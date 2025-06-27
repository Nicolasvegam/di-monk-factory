'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function DueDiligenceClient() {
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
              🔍 Due Diligence Técnico
            </div>
            <h1 className="font-sans text-4xl md:text-6xl xl:text-7xl font-semibold tracking-tight mb-8 text-white leading-tight">
              Evaluación técnica que <span className="block">protege tu inversión</span>
            </h1>
            <p className="font-mono text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-10">
              Análisis exhaustivo de activos tecnológicos para inversionistas y empresas. Minimiza riesgos, maximiza valor y toma decisiones informadas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contacto" className="font-mono uppercase px-8 py-4 rounded-full font-medium transition-all duration-300 hover:opacity-80 bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] text-white text-center">
                Solicitar Evaluación
              </a>
              <a href="#casos" className="font-mono uppercase px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white/10 border border-white/20 text-white text-center">
                Ver Casos de Éxito
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Due Diligence Services */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl md:text-5xl font-semibold mb-6 text-white">
              Servicios de Evaluación Especializada
            </h2>
            <p className="font-mono text-lg text-white/60 max-w-3xl mx-auto">
              Análisis técnico exhaustivo que minimiza riesgos y protege tu inversión
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#0C0C0D] p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-sans text-xl font-semibold mb-4 text-white">Auditoría de Código</h3>
              <p className="font-mono text-white/70 mb-6 leading-relaxed">
                Evaluamos calidad, mantenibilidad y escalabilidad del código fuente completo.
              </p>
              <ul className="font-mono text-sm text-white/50 space-y-3">
                <li>• Calidad del código</li>
                <li>• Cobertura de tests</li>
                <li>• Documentación técnica</li>
                <li>• Deuda técnica</li>
              </ul>
            </div>
            
            <div className="bg-[#0C0C0D] p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="font-sans text-xl font-semibold mb-4 text-white">Arquitectura de Sistema</h3>
              <p className="font-mono text-white/70 mb-6 leading-relaxed">
                Analizamos arquitectura actual y capacidad de escalar según crecimiento proyectado.
              </p>
              <ul className="font-mono text-sm text-white/50 space-y-3">
                <li>• Diseño arquitectónico</li>
                <li>• Escalabilidad</li>
                <li>• Rendimiento</li>
                <li>• Integraciones</li>
              </ul>
            </div>
            
            <div className="bg-[#0C0C0D] p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-sans text-xl font-semibold mb-4 text-white">Seguridad y Compliance</h3>
              <p className="font-mono text-white/70 mb-6 leading-relaxed">
                Identificamos vulnerabilidades críticas y evaluamos prácticas de seguridad establecidas.
              </p>
              <ul className="font-mono text-sm text-white/50 space-y-3">
                <li>• Vulnerabilidades conocidas</li>
                <li>• Gestión datos sensibles</li>
                <li>• Autenticación segura</li>
                <li>• Cumplimiento normativo</li>
              </ul>
            </div>
            
            <div className="bg-[#0C0C0D] p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-sans text-xl font-semibold mb-4 text-white">Infraestructura y DevOps</h3>
              <p className="font-mono text-white/70 mb-6 leading-relaxed">
                Evaluamos infraestructura tecnológica, procesos DevOps y gestión operativa.
              </p>
              <ul className="font-mono text-sm text-white/50 space-y-3">
                <li>• Arquitectura cloud</li>
                <li>• Procesos CI/CD</li>
                <li>• Monitoreo y alertas</li>
                <li>• Backup y recuperación</li>
              </ul>
            </div>
            
            <div className="bg-[#0C0C0D] p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="font-sans text-xl font-semibold mb-4 text-white">Equipo y Procesos</h3>
              <p className="font-mono text-white/70 mb-6 leading-relaxed">
                Analizamos competencias del equipo técnico y calidad de procesos de desarrollo.
              </p>
              <ul className="font-mono text-sm text-white/50 space-y-3">
                <li>• Competencias técnicas</li>
                <li>• Estructura organizacional</li>
                <li>• Procesos de desarrollo</li>
                <li>• Dependencias clave</li>
              </ul>
            </div>
            
            <div className="bg-[#0C0C0D] p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-sans text-xl font-semibold mb-4 text-white">Propiedad Intelectual</h3>
              <p className="font-mono text-white/70 mb-6 leading-relaxed">
                Verificamos propiedad y licencias de todos los activos tecnológicos y dependencias.
              </p>
              <ul className="font-mono text-sm text-white/50 space-y-3">
                <li>• Licencias de software</li>
                <li>• Propiedad del código</li>
                <li>• Patentes y marcas</li>
                <li>• Riesgos legales</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 bg-[#0C0C0D]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-sans text-3xl md:text-5xl font-semibold text-center mb-16 text-white">Due Diligence por Industria</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-sans font-semibold mb-2 text-white">FinTech</h3>
              <p className="font-mono text-sm text-white/60">Evaluación seguridad, compliance, escalabilidad</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="font-sans font-semibold mb-2 text-white">HealthTech</h3>
              <p className="font-mono text-sm text-white/60">HIPAA compliance, privacidad de datos</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🏪</span>
              </div>
              <h3 className="font-sans font-semibold mb-2 text-white">E-commerce</h3>
              <p className="font-mono text-sm text-white/60">PCI compliance, rendimiento, integraciones</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-sans font-semibold mb-2 text-white">SaaS</h3>
              <p className="font-mono text-sm text-white/60">Arquitectura multi-tenant, escalabilidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Due Diligence Process */}
      <section className="py-20 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] blur-[200px]"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl md:text-5xl font-semibold mb-6 text-white">
              Proceso de Due Diligence
            </h2>
            <p className="font-mono text-lg text-white/60 max-w-3xl mx-auto">
              Metodología estructurada que garantiza evaluación exhaustiva y confiable
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
                <h3 className="font-sans text-lg font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">Planificación</h3>
                <p className="font-mono text-sm text-white/60 group-hover:text-white/80 transition-colors leading-relaxed">Definimos alcance, objetivos y cronograma de evaluación</p>
              </div>
              
              <div className="text-center group">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 font-bold text-lg group-hover:scale-110 transition-all duration-300 shadow-lg">
                    2
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                </div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">Recopilación</h3>
                <p className="font-mono text-sm text-white/60 group-hover:text-white/80 transition-colors leading-relaxed">Obtenemos acceso seguro a código, documentación y sistemas</p>
              </div>
              
              <div className="text-center group">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 font-bold text-lg group-hover:scale-110 transition-all duration-300 shadow-lg">
                    3
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                </div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">Análisis</h3>
                <p className="font-mono text-sm text-white/60 group-hover:text-white/80 transition-colors leading-relaxed">Evaluamos cada componente según frameworks especializados</p>
              </div>
              
              <div className="text-center group">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 font-bold text-lg group-hover:scale-110 transition-all duration-300 shadow-lg">
                    4
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                </div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">Entrevistas</h3>
                <p className="font-mono text-sm text-white/60 group-hover:text-white/80 transition-colors leading-relaxed">Conversamos con equipo técnico y stakeholders clave</p>
              </div>
              
              <div className="text-center group">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 font-bold text-lg group-hover:scale-110 transition-all duration-300 shadow-lg">
                    5
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                </div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">Reporte</h3>
                <p className="font-mono text-sm text-white/60 group-hover:text-white/80 transition-colors leading-relaxed">Entregamos análisis detallado con recomendaciones</p>
              </div>
            </div>
          </div>
          
          {/* Timeline */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#274DD5]/20 to-[#0BBAE1]/20 p-6 rounded-xl border border-white/10">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] bg-clip-text text-transparent mb-2">2-4</div>
                <div className="font-mono text-sm text-white/60">Semanas duración promedio</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#274DD5]/20 to-[#0BBAE1]/20 p-6 rounded-xl border border-white/10">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] bg-clip-text text-transparent mb-2">50+</div>
                <div className="font-mono text-sm text-white/60">Due diligences completados</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#274DD5]/20 to-[#0BBAE1]/20 p-6 rounded-xl border border-white/10">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] bg-clip-text text-transparent mb-2">100%</div>
                <div className="font-mono text-sm text-white/60">Confidencialidad garantizada</div>
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
              Casos de Éxito en Due Diligence
            </h2>
            <p className="font-mono text-lg text-white/60 max-w-3xl mx-auto">
              Evaluaciones que protegieron millones en inversiones y evitaron riesgos críticos
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group">
              <div className="bg-black p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-xl flex items-center justify-center">
                    <span className="text-xl">💰</span>
                  </div>
                  <div>
                    <h3 className="font-sans text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">Fondo Inversión - FinTech</h3>
                    <p className="font-mono text-sm text-white/50">Evaluación Pre-Inversión $10M</p>
                  </div>
                </div>
                
                <p className="font-mono text-white/70 mb-8 leading-relaxed">
                  Identificamos vulnerabilidades críticas de seguridad que no estaban en el radar. Esto permitió renegociar valuación y establecer plan de remediación post-inversión.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-[#274DD5]/20 to-[#0BBAE1]/20 p-6 rounded-xl border border-white/10 text-center group-hover:border-white/20 transition-all duration-300">
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] bg-clip-text text-transparent mb-2">30%</div>
                      <div className="font-mono text-sm text-white/60">Reducción valuación</div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-gradient-to-br from-[#274DD5]/20 to-[#0BBAE1]/20 p-6 rounded-xl border border-white/10 text-center group-hover:border-white/20 transition-all duration-300">
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] bg-clip-text text-transparent mb-2">$500K</div>
                      <div className="font-mono text-sm text-white/60">Ahorros identificados</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-black p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-xl flex items-center justify-center">
                    <span className="text-xl">🏪</span>
                  </div>
                  <div>
                    <h3 className="font-sans text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">Corporativo - E-commerce</h3>
                    <p className="font-mono text-sm text-white/50">Adquisición $25M USD</p>
                  </div>
                </div>
                
                <p className="font-mono text-white/70 mb-8 leading-relaxed">
                  Evaluamos plataforma e-commerce antes de adquisición. Descubrimos problemas de escalabilidad que requerían inversión adicional significativa.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-[#274DD5]/20 to-[#0BBAE1]/20 p-6 rounded-xl border border-white/10 text-center group-hover:border-white/20 transition-all duration-300">
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] bg-clip-text text-transparent mb-2">$2M</div>
                      <div className="font-mono text-sm text-white/60">Ajuste precio final</div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-gradient-to-br from-[#274DD5]/20 to-[#0BBAE1]/20 p-6 rounded-xl border border-white/10 text-center group-hover:border-white/20 transition-all duration-300">
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] bg-clip-text text-transparent mb-2">12M</div>
                      <div className="font-mono text-sm text-white/60">Roadmap post-adquisición</div>
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
              Preguntas Frecuentes sobre Due Diligence
            </h2>
            <p className="font-mono text-lg md:text-xl text-white/70">
              Resolvemos tus dudas sobre evaluación técnica de inversiones
            </p>
          </div>

          <div className="space-y-4">
            <div className="border border-[rgba(39,77,213,0.1)] rounded-xl overflow-hidden backdrop-blur-sm">
              <button
                onClick={() => setOpenQuestion(openQuestion === 'confidencial' ? null : 'confidencial')}
                className="w-full flex items-center justify-between p-6 bg-[rgba(39,77,213,0.05)] hover:bg-[rgba(39,77,213,0.1)] transition-all duration-300"
              >
                <span className="font-mono text-white font-medium text-left">¿Qué tan confidencial es el proceso?</span>
                <span className={`transform transition-transform duration-300 text-white/50 ${openQuestion === 'confidencial' ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {openQuestion === 'confidencial' && (
                <div className="p-6 bg-white/5 border-t border-[rgba(39,77,213,0.1)]">
                  <p className="text-white/70 leading-relaxed">
                    Máxima confidencialidad garantizada. Firmamos NDAs robustos y limitamos acceso 
                    al equipo mínimo necesario. Todos nuestros consultores tienen experiencia manejando 
                    información sensible de M&A y procesos de inversión.
                  </p>
                </div>
              )}
            </div>
            
            <div className="border border-[rgba(39,77,213,0.1)] rounded-xl overflow-hidden backdrop-blur-sm">
              <button
                onClick={() => setOpenQuestion(openQuestion === 'operaciones' ? null : 'operaciones')}
                className="w-full flex items-center justify-between p-6 bg-[rgba(39,77,213,0.05)] hover:bg-[rgba(39,77,213,0.1)] transition-all duration-300"
              >
                <span className="font-mono text-white font-medium text-left">¿Necesitamos detener operaciones durante la evaluación?</span>
                <span className={`transform transition-transform duration-300 text-white/50 ${openQuestion === 'operaciones' ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {openQuestion === 'operaciones' && (
                <div className="p-6 bg-white/5 border-t border-[rgba(39,77,213,0.1)]">
                  <p className="text-white/70 leading-relaxed">
                    No. Diseñamos el proceso para ser mínimamente disruptivo. La mayoría del análisis 
                    se hace offline y las entrevistas se programan según disponibilidad del equipo. 
                    Mantenemos operaciones normales durante toda la evaluación.
                  </p>
                </div>
              )}
            </div>
            
            <div className="border border-[rgba(39,77,213,0.1)] rounded-xl overflow-hidden backdrop-blur-sm">
              <button
                onClick={() => setOpenQuestion(openQuestion === 'problemas' ? null : 'problemas')}
                className="w-full flex items-center justify-between p-6 bg-[rgba(39,77,213,0.05)] hover:bg-[rgba(39,77,213,0.1)] transition-all duration-300"
              >
                <span className="font-mono text-white font-medium text-left">¿Qué pasa si encontramos problemas críticos?</span>
                <span className={`transform transition-transform duration-300 text-white/50 ${openQuestion === 'problemas' ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {openQuestion === 'problemas' && (
                <div className="p-6 bg-white/5 border-t border-[rgba(39,77,213,0.1)]">
                  <p className="text-white/70 leading-relaxed">
                    Notificamos inmediatamente cualquier riesgo crítico. Proporcionamos opciones: 
                    remediar antes de la transacción, ajustar términos de inversión, o incluso recomendar 
                    no proceder si los riesgos son demasiado altos para el perfil del inversionista.
                  </p>
                </div>
              )}
            </div>
            
            <div className="border border-[rgba(39,77,213,0.1)] rounded-xl overflow-hidden backdrop-blur-sm">
              <button
                onClick={() => setOpenQuestion(openQuestion === 'soporte' ? null : 'soporte')}
                className="w-full flex items-center justify-between p-6 bg-[rgba(39,77,213,0.05)] hover:bg-[rgba(39,77,213,0.1)] transition-all duration-300"
              >
                <span className="font-mono text-white font-medium text-left">¿Ofrecen soporte post-due diligence?</span>
                <span className={`transform transition-transform duration-300 text-white/50 ${openQuestion === 'soporte' ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {openQuestion === 'soporte' && (
                <div className="p-6 bg-white/5 border-t border-[rgba(39,77,213,0.1)]">
                  <p className="text-white/70 leading-relaxed">
                    Sí, incluimos 30 días de consultas post-entrega del reporte. También ofrecemos 
                    servicios de implementación del plan de remediación y apoyo durante la integración 
                    post-adquisición con tarifas preferenciales.
                  </p>
                </div>
              )}
            </div>
            
            <div className="border border-[rgba(39,77,213,0.1)] rounded-xl overflow-hidden backdrop-blur-sm">
              <button
                onClick={() => setOpenQuestion(openQuestion === 'costo' ? null : 'costo')}
                className="w-full flex items-center justify-between p-6 bg-[rgba(39,77,213,0.05)] hover:bg-[rgba(39,77,213,0.1)] transition-all duration-300"
              >
                <span className="font-mono text-white font-medium text-left">¿Cuánto cuesta un due diligence técnico?</span>
                <span className={`transform transition-transform duration-300 text-white/50 ${openQuestion === 'costo' ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {openQuestion === 'costo' && (
                <div className="p-6 bg-white/5 border-t border-[rgba(39,77,213,0.1)]">
                  <p className="text-white/70 leading-relaxed">
                    Los costos varían según alcance: evaluación express $15,000 USD, due diligence completo $35,000 USD, 
                    evaluaciones enterprise $75,000+ USD. El costo es mínimo comparado con los riesgos que evita.
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