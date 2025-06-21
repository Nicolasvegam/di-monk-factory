import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 relative overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
            {/* Logo - center */}
            <div className="flex justify-center">
            <Image
              src="/di-monk-logo-dark-mode.svg"
              alt="Di Monk Factory"
              width={180}
              height={72}
              className="h-10 w-auto"
            />
          </div>
        
        
          {/* Copyright text - top */}
          <p className="text-sm text-gray-400 font-mono text-center">
            © {currentYear} Di Monk Factory. Todos los derechos reservados.
          </p>
          
          
          {/* Social links - bottom */}
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 