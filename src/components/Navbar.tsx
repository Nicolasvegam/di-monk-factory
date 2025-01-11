'use client';

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-black/10 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p className="font-mono text-sm text-white font-medium">
            Di Monk Factory
          </p>

          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('services')}
              className="font-mono text-sm text-gray-400 hover:text-white transition-colors"
            >
              Servicios
            </button>
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
              className="font-mono text-sm px-5 py-1.5 rounded-full transition-all duration-300 hover:opacity-80 bg-gradient-to-r from-[#9945FF] to-[#6B21A8] text-white"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 