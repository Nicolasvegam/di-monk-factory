'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300); // 300ms delay before closing
    setHoverTimeout(timeout);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-black/10 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src="/di-monk-logo-dark-mode.svg"
              alt="Di Monk Factory - Logo principal de la empresa de desarrollo de software e IA en Chile"
              width={144}
              height={60}
              className="h-10 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                onClick={() => scrollToSection('services')}
                className="font-mono text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
              >
                Servicios
                <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-black/90 backdrop-blur-lg border border-white/10 rounded-xl shadow-xl z-50">
                  <div className="p-2 space-y-1">
                    <Link 
                      href="/servicios/aplicaciones-inteligencia-artificial"
                      className="block p-2 rounded-lg hover:bg-white/10 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-lg flex items-center justify-center">
                          <span className="text-sm">🤖</span>
                        </div>
                        <div>
                          <div className="font-mono text-sm text-white group-hover:text-blue-400 transition-colors">Aplicaciones de IA</div>
                          <div className="font-mono text-xs text-gray-400">Automatización y machine learning</div>
                        </div>
                      </div>
                    </Link>
                    
                    <Link 
                      href="/servicios/consultoria-productividad"
                      className="block p-2 rounded-lg hover:bg-white/10 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-lg flex items-center justify-center">
                          <span className="text-sm">📈</span>
                        </div>
                        <div>
                          <div className="font-mono text-sm text-white group-hover:text-blue-400 transition-colors">Consultoría Tecnológica</div>
                          <div className="font-mono text-xs text-gray-400">Transformación digital y productividad</div>
                        </div>
                      </div>
                    </Link>
                    
                    <Link 
                      href="/servicios/desarrollo-software-medida"
                      className="block p-2 rounded-lg hover:bg-white/10 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-lg flex items-center justify-center">
                          <span className="text-sm">💻</span>
                        </div>
                        <div>
                          <div className="font-mono text-sm text-white group-hover:text-blue-400 transition-colors">Desarrollo a Medida</div>
                          <div className="font-mono text-xs text-gray-400">Software personalizado y MVP</div>
                        </div>
                      </div>
                    </Link>
                    
                    <Link 
                      href="/servicios/due-diligence-tecnico"
                      className="block p-2 rounded-lg hover:bg-white/10 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#274DD5] to-[#0BBAE1] rounded-lg flex items-center justify-center">
                          <span className="text-sm">🔍</span>
                        </div>
                        <div>
                          <div className="font-mono text-sm text-white group-hover:text-blue-400 transition-colors">Due Diligence Técnico</div>
                          <div className="font-mono text-xs text-gray-400">Evaluación para inversionistas</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <button 
              onClick={() => scrollToSection('tech')}
              className="font-mono text-sm text-gray-400 hover:text-white transition-colors"
            >
              Tecnologías
            </button>
            <a
              href="https://tally.so/r/nGXXAp"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm px-5 py-1.5 rounded-full transition-all duration-300 hover:opacity-80 bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] text-white"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 