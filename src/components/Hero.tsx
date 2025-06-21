import { theme } from '@/styles/theme';

export default function Hero() {
  return (
    <section className="min-h-[45vh] sm:min-h-[60vh] py-12 sm:py-20 md:py-32 flex items-center relative bg-gradient-to-b from-[#0C0C0D] from-0% via-[#0C0C0D] via-60% to-black to-100%">
      <div className="absolute inset-0 opacity-30" style={{ 
        background: theme.gradients.primary,
        filter: 'blur(150px)'
      }}></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold tracking-tight mb-4 sm:mb-6 text-white animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards] pt-12 sm:pt-0">
            Construye tu negocio con tecnología
          </h1>
          <p className="font-mono text-base sm:text-lg md:text-xl mb-8 sm:mb-10 text-white animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
            Implementa soluciones basadas en software, datos e{' '}
            <span className="hidden sm:inline"><br /></span>
            inteligencia artificial
          </p>
          <div className="flex gap-6 justify-center animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
            <a
              href="https://tally.so/r/nGXXAp"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono uppercase px-8 py-4 rounded-full font-medium transition-all duration-300 hover:opacity-80 bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] text-center"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 