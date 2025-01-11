import { theme } from '@/styles/theme';
import Image from 'next/image';

export default function SocialProof() {
  const logos = [
    { src: '/logo-xepelin.webp', alt: 'Xepelin' },
    { src: '/logo-uc.webp', alt: 'UC' },
    { src: '/logo-meli.webp', alt: 'Mercado Libre' },
    { src: '/logo-carvuk.webp', alt: 'Carvuk' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-black from-50% to-black to-100%">
      <div className="container mx-auto px-4">
        <h3 className="font-mono text-center text-white mb-8 sm:mb-10 text-sm tracking-wider animate-fade-in opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
          CON EXPERIENCIA DESARROLLANDO EN
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
          {logos.map((logo, index) => (
            <div 
              key={logo.alt} 
              className="w-32 sm:w-40 h-12 sm:h-16 relative opacity-0 animate-fade-in [animation-fill-mode:forwards]"
              style={{ animationDelay: `${1000 + (index * 200)}ms` }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                style={{ objectFit: 'contain' }}
                className="hover:opacity-100 transition-opacity duration-300 opacity-50"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 