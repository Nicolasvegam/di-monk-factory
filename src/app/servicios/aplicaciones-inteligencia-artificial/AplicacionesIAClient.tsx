'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function AplicacionesIAClient() {
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
              🤖 Inteligencia Artificial
            </div>
            <h1 className="font-sans text-4xl md:text-6xl xl:text-7xl font-semibold tracking-tight mb-8 text-white leading-tight">
              Aplicaciones de IA que <span className="block">transforman empresas</span>
            </h1>
            <p className="font-mono text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-10">
              Automatiza procesos complejos, optimiza decisiones estratégicas y revoluciona tu empresa con soluciones de inteligencia artificial diseñadas específicamente para el mercado chileno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contacto" className="font-mono uppercase px-8 py-4 rounded-full font-medium transition-all duration-300 hover:opacity-80 bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] text-white text-center">
                Solicitar Demo
              </a>
              <a href="#casos" className="font-mono uppercase px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white/10 border border-white/20 text-white text-center">
                Ver Casos de Éxito
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl md:text-5xl font-semibold mb-6 text-white">
              Soluciones de IA para tu Empresa
            </h2>
            <p className="font-mono text-lg text-white/60 max-w-3xl mx-auto">
              Descubre cómo nuestras soluciones de inteligencia artificial pueden revolucionar tu negocio
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#0C0C0D] p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="font-sans text-xl font-semibold mb-4 text-white">Automatización de Procesos</h3>
              <p className="font-mono text-white/70 mb-6 leading-relaxed">
                Automatiza tareas repetitivas y libera tiempo valioso de tu equipo para actividades estratégicas.
              </p>
              <ul className="font-mono text-sm text-white/50 space-y-3">
                <li>• Procesamiento de documentos</li>
                <li>• Clasificación automática</li>
                <li>• Workflows inteligentes</li>
                <li>• ROI promedio: 300%</li>
              </ul>
            </div>
            
            <div className="bg-[#0C0C0D] p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h3 className="font-sans text-xl font-semibold mb-4 text-white">Análisis Predictivo</h3>
              <p className="font-mono text-white/70 mb-6 leading-relaxed">
                Predice tendencias, demanda y comportamientos para tomar decisiones informadas.
              </p>
              <ul className="font-mono text-sm text-white/50 space-y-3">
                <li>• Forecasting de ventas</li>
                <li>• Análisis de churn</li>
                <li>• Optimización de inventario</li>
                <li>• Precisión del 85%+</li>
              </ul>
            </div>
            
            <div className="bg-[#0C0C0D] p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-sans text-xl font-semibold mb-4 text-white">Chatbots Inteligentes</h3>
              <p className="font-mono text-white/70 mb-6 leading-relaxed">
                Atiende a tus clientes 24/7 con asistentes virtuales que entienden el contexto chileno.
              </p>
              <ul className="font-mono text-sm text-white/50 space-y-3">
                <li>• Atención al cliente automatizada</li>
                <li>• Integración WhatsApp/Web</li>
                <li>• Procesamiento lenguaje natural</li>
                <li>• Reducción 70% consultas</li>
              </ul>
            </div>
            
            <div className="bg-[#0C0C0D] p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-sans text-xl font-semibold mb-4 text-white">Computer Vision</h3>
              <p className="font-mono text-white/70 mb-6 leading-relaxed">
                Analiza imágenes y videos para control de calidad, seguridad y automatización visual.
              </p>
              <ul className="font-mono text-sm text-white/50 space-y-3">
                <li>• Control de calidad automático</li>
                <li>• Reconocimiento facial</li>
                <li>• Análisis de inventario visual</li>
                <li>• Detección de anomalías</li>
              </ul>
            </div>
            
            <div className="bg-[#0C0C0D] p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-sans text-xl font-semibold mb-4 text-white">Recomendaciones</h3>
              <p className="font-mono text-white/70 mb-6 leading-relaxed">
                Sistemas de recomendación que aumentan ventas y mejoran la experiencia del usuario.
              </p>
              <ul className="font-mono text-sm text-white/50 space-y-3">
                <li>• Recomendaciones de productos</li>
                <li>• Personalización de contenido</li>
                <li>• Cross-selling automático</li>
                <li>• Aumento 25% en ventas</li>
              </ul>
            </div>
            
            <div className="bg-[#0C0C0D] p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="font-sans text-xl font-semibold mb-4 text-white">Análisis de Sentimientos</h3>
              <p className="font-mono text-white/70 mb-6 leading-relaxed">
                Comprende la opinión de tus clientes analizando redes sociales, reviews y feedback.
              </p>
              <ul className="font-mono text-sm text-white/50 space-y-3">
                <li>• Monitoreo de marca</li>
                <li>• Análisis de competencia</li>
                <li>• Alertas de crisis</li>
                <li>• Dashboard en tiempo real</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 bg-[#0C0C0D]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-sans text-3xl md:text-5xl font-semibold text-center mb-16 text-white">IA por Industria</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🏪</span>
              </div>
              <h3 className="font-sans font-semibold mb-2 text-white">Retail</h3>
              <p className="font-mono text-sm text-white/60">Optimización de inventario, recomendaciones personalizadas, análisis de precios</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="font-sans font-semibold mb-2 text-white">Manufactura</h3>
              <p className="font-mono text-sm text-white/60">Mantenimiento predictivo, control de calidad, optimización de producción</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-sans font-semibold mb-2 text-white">FinTech</h3>
              <p className="font-mono text-sm text-white/60">Detección de fraude, scoring crediticio, robo-advisors</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="font-sans font-semibold mb-2 text-white">Salud</h3>
              <p className="font-mono text-sm text-white/60">Diagnóstico asistido, gestión de pacientes, telemedicina</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="casos" className="py-20 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] blur-[150px]"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl md:text-5xl font-semibold mb-6 text-white">
              Casos de Éxito con IA
            </h2>
            <p className="font-mono text-lg text-white/60 max-w-3xl mx-auto">
              Resultados reales que transformaron empresas con inteligencia artificial
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group">
              <div className="bg-[#0C0C0D] p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-xl flex items-center justify-center">
                    <span className="text-xl">🏪</span>
                  </div>
                  <div>
                    <h3 className="font-sans text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">Retail Chain</h3>
                    <p className="font-mono text-sm text-white/50">Optimización de Inventario</p>
                  </div>
                </div>
                
                <p className="font-mono text-white/70 mb-8 leading-relaxed">
                  Implementamos un sistema de predicción de demanda con machine learning que revolucionó la gestión de inventario, reduciendo desperdicios y optimizando la disponibilidad de productos.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-[#274DD5]/20 to-[#0BBAE1]/20 p-6 rounded-xl border border-white/10 text-center group-hover:border-white/20 transition-all duration-300">
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] bg-clip-text text-transparent mb-2">35%</div>
                      <div className="font-mono text-sm text-white/60">Reducción inventario</div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-gradient-to-br from-[#274DD5]/20 to-[#0BBAE1]/20 p-6 rounded-xl border border-white/10 text-center group-hover:border-white/20 transition-all duration-300">
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] bg-clip-text text-transparent mb-2">20%</div>
                      <div className="font-mono text-sm text-white/60">Mayor disponibilidad</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-[#0C0C0D] p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-xl flex items-center justify-center">
                    <span className="text-xl">🏭</span>
                  </div>
                  <div>
                    <h3 className="font-sans text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">Empresa Manufacturera</h3>
                    <p className="font-mono text-sm text-white/50">Control de Calidad con Computer Vision</p>
                  </div>
                </div>
                
                <p className="font-mono text-white/70 mb-8 leading-relaxed">
                  Desarrollamos un sistema de computer vision para inspección automática de productos, detectando defectos con precisión superior y reduciendo significativamente los costos operativos.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-[#274DD5]/20 to-[#0BBAE1]/20 p-6 rounded-xl border border-white/10 text-center group-hover:border-white/20 transition-all duration-300">
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] bg-clip-text text-transparent mb-2">99.2%</div>
                      <div className="font-mono text-sm text-white/60">Precisión detección</div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-gradient-to-br from-[#274DD5]/20 to-[#0BBAE1]/20 p-6 rounded-xl border border-white/10 text-center group-hover:border-white/20 transition-all duration-300">
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] bg-clip-text text-transparent mb-2">60%</div>
                      <div className="font-mono text-sm text-white/60">Reducción costos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 px-4 bg-[#0C0C0D] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] blur-[200px]"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl md:text-5xl font-semibold mb-6 text-white">
              Proceso de Implementación de IA
            </h2>
            <p className="font-mono text-lg text-white/60 max-w-3xl mx-auto">
              Metodología probada para integrar inteligencia artificial en tu empresa
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
                <p className="font-mono text-sm text-white/60 group-hover:text-white/80 transition-colors leading-relaxed">Evaluamos tus procesos y identificamos oportunidades estratégicas de IA</p>
              </div>
              
              <div className="text-center group">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 font-bold text-lg group-hover:scale-110 transition-all duration-300 shadow-lg">
                    2
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                </div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">Diseño</h3>
                <p className="font-mono text-sm text-white/60 group-hover:text-white/80 transition-colors leading-relaxed">Diseñamos la arquitectura de IA específica para tu caso de uso</p>
              </div>
              
              <div className="text-center group">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 font-bold text-lg group-hover:scale-110 transition-all duration-300 shadow-lg">
                    3
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                </div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">Desarrollo</h3>
                <p className="font-mono text-sm text-white/60 group-hover:text-white/80 transition-colors leading-relaxed">Entrenamos modelos y desarrollamos la aplicación con tecnologías modernas</p>
              </div>
              
              <div className="text-center group">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 font-bold text-lg group-hover:scale-110 transition-all duration-300 shadow-lg">
                    4
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                </div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">Testing</h3>
                <p className="font-mono text-sm text-white/60 group-hover:text-white/80 transition-colors leading-relaxed">Validamos precisión y rendimiento en ambiente controlado</p>
              </div>
              
              <div className="text-center group">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 font-bold text-lg group-hover:scale-110 transition-all duration-300 shadow-lg">
                    5
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                </div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">Despliegue</h3>
                <p className="font-mono text-sm text-white/60 group-hover:text-white/80 transition-colors leading-relaxed">Implementamos en producción con monitoreo y soporte continuo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24 px-4 bg-[#0C0C0D] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] blur-[100px]"></div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-6 text-white">
              Preguntas Frecuentes sobre IA
            </h2>
            <p className="font-mono text-lg md:text-xl text-white/70">
              Resolvemos tus dudas sobre implementación de inteligencia artificial
            </p>
          </div>

          <div className="space-y-4">
            <div className="border border-[rgba(39,77,213,0.1)] rounded-xl overflow-hidden backdrop-blur-sm">
              <button
                onClick={() => setOpenQuestion(openQuestion === 'complexity' ? null : 'complexity')}
                className="w-full flex items-center justify-between p-6 bg-[rgba(39,77,213,0.05)] hover:bg-[rgba(39,77,213,0.1)] transition-all duration-300"
              >
                <span className="font-mono text-white font-medium text-left">¿Qué tan complejo es implementar IA en mi empresa?</span>
                <span className={`transform transition-transform duration-300 text-white/50 ${openQuestion === 'complexity' ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {openQuestion === 'complexity' && (
                <div className="p-6 bg-white/5 border-t border-[rgba(39,77,213,0.1)]">
                  <p className="text-white/70 leading-relaxed">
                    Depende del caso de uso. Soluciones simples como chatbots pueden implementarse en 2-4 semanas, 
                    mientras que sistemas de machine learning complejos pueden tomar 3-6 meses. Siempre comenzamos 
                    con un piloto para validar el valor antes de escalar.
                  </p>
                </div>
              )}
            </div>
            
            <div className="border border-[rgba(39,77,213,0.1)] rounded-xl overflow-hidden backdrop-blur-sm">
              <button
                onClick={() => setOpenQuestion(openQuestion === 'data' ? null : 'data')}
                className="w-full flex items-center justify-between p-6 bg-[rgba(39,77,213,0.05)] hover:bg-[rgba(39,77,213,0.1)] transition-all duration-300"
              >
                <span className="font-mono text-white font-medium text-left">¿Necesito muchos datos para implementar IA?</span>
                <span className={`transform transition-transform duration-300 text-white/50 ${openQuestion === 'data' ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {openQuestion === 'data' && (
                <div className="p-6 bg-white/5 border-t border-[rgba(39,77,213,0.1)]">
                  <p className="text-white/70 leading-relaxed">
                    No siempre. Algunas soluciones funcionan con datos limitados usando transfer learning o 
                    modelos pre-entrenados. Evaluamos tu situación específica y recomendamos el enfoque más adecuado.
                  </p>
                </div>
              )}
            </div>
            
            <div className="border border-[rgba(39,77,213,0.1)] rounded-xl overflow-hidden backdrop-blur-sm">
              <button
                onClick={() => setOpenQuestion(openQuestion === 'roi' ? null : 'roi')}
                className="w-full flex items-center justify-between p-6 bg-[rgba(39,77,213,0.05)] hover:bg-[rgba(39,77,213,0.1)] transition-all duration-300"
              >
                <span className="font-mono text-white font-medium text-left">¿Cuánto retorno de inversión puedo esperar?</span>
                <span className={`transform transition-transform duration-300 text-white/50 ${openQuestion === 'roi' ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {openQuestion === 'roi' && (
                <div className="p-6 bg-white/5 border-t border-[rgba(39,77,213,0.1)]">
                  <p className="text-white/70 leading-relaxed">
                    Nuestros clientes típicamente ven ROI entre 200-500% en el primer año. Automatización de procesos 
                    suele generar ahorros inmediatos, mientras que análisis predictivo optimiza decisiones de largo plazo.
                  </p>
                </div>
              )}
            </div>
            
            <div className="border border-[rgba(39,77,213,0.1)] rounded-xl overflow-hidden backdrop-blur-sm">
              <button
                onClick={() => setOpenQuestion(openQuestion === 'security' ? null : 'security')}
                className="w-full flex items-center justify-between p-6 bg-[rgba(39,77,213,0.05)] hover:bg-[rgba(39,77,213,0.1)] transition-all duration-300"
              >
                <span className="font-mono text-white font-medium text-left">¿Es seguro usar IA en mi empresa?</span>
                <span className={`transform transition-transform duration-300 text-white/50 ${openQuestion === 'security' ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {openQuestion === 'security' && (
                <div className="p-6 bg-white/5 border-t border-[rgba(39,77,213,0.1)]">
                  <p className="text-white/70 leading-relaxed">
                    Sí, implementamos todas las mejores prácticas de seguridad: encriptación de datos, 
                    acceso controlado, auditorías regulares y cumplimiento de normativas chilenas e internacionales.
                  </p>
                </div>
              )}
            </div>
            
            <div className="border border-[rgba(39,77,213,0.1)] rounded-xl overflow-hidden backdrop-blur-sm">
              <button
                onClick={() => setOpenQuestion(openQuestion === 'timeline' ? null : 'timeline')}
                className="w-full flex items-center justify-between p-6 bg-[rgba(39,77,213,0.05)] hover:bg-[rgba(39,77,213,0.1)] transition-all duration-300"
              >
                <span className="font-mono text-white font-medium text-left">¿Cuánto tiempo toma ver resultados con IA?</span>
                <span className={`transform transition-transform duration-300 text-white/50 ${openQuestion === 'timeline' ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {openQuestion === 'timeline' && (
                <div className="p-6 bg-white/5 border-t border-[rgba(39,77,213,0.1)]">
                  <p className="text-white/70 leading-relaxed">
                    Los primeros resultados se ven en 2-4 semanas con automatizaciones simples. Para sistemas predictivos, 
                    los beneficios significativos aparecen en 2-3 meses. Medimos progreso continuamente para optimizar el ROI.
                  </p>
                </div>
              )}
            </div>
            
            <div className="border border-[rgba(39,77,213,0.1)] rounded-xl overflow-hidden backdrop-blur-sm">
              <button
                onClick={() => setOpenQuestion(openQuestion === 'cost' ? null : 'cost')}
                className="w-full flex items-center justify-between p-6 bg-[rgba(39,77,213,0.05)] hover:bg-[rgba(39,77,213,0.1)] transition-all duration-300"
              >
                <span className="font-mono text-white font-medium text-left">¿Cuánto cuesta implementar IA en mi empresa?</span>
                <span className={`transform transition-transform duration-300 text-white/50 ${openQuestion === 'cost' ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {openQuestion === 'cost' && (
                <div className="p-6 bg-white/5 border-t border-[rgba(39,77,213,0.1)]">
                  <p className="text-white/70 leading-relaxed">
                    Los costos varían según complejidad: desde $10,000 USD para chatbots básicos hasta $100,000+ USD 
                    para sistemas de machine learning complejos. Ofrecemos consultoría gratuita para estimar tu proyecto específico.
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