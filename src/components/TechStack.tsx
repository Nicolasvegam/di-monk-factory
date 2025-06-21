export default function TechStack() {
  const technologies = [
    'next.js', 'typescript', 'nest.js', 'tailwind', 
    'aws', 'python', 'react', 'node.js'
  ];

  return (
    <section id="tech" className="py-20 md:py-24 mt-12 relative overflow-hidden" style={{
      backgroundImage: 'url(/pc.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-[#9945FF] to-[#14F195]" style={{ 
        filter: 'blur(100px)'
      }}></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto text-center mb-16 animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-6 text-white">
            Tecnologías con las que Trabajamos
          </h2>
          <p className="text-lg md:text-xl font-light font-mono text-white">
            Utilizamos las últimas tecnologías para construir soluciones modernas y escalables
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <div 
              key={tech} 
              className="group relative font-mono h-32 rounded-2xl flex items-center justify-center transition-all duration-700 hover:scale-110 animate-fade-in opacity-0 [animation-fill-mode:forwards] bg-[rgba(153,69,255,0.05)] border border-[rgba(153,69,255,0.1)] backdrop-blur-lg text-[#14F195] overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-[#14F195]/20"
              style={{ 
                animationDelay: `${400 + (index * 100)}ms`
              }}
            >
              {/* Moving gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#14F195] via-[#9945FF] to-[#14F195] opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
              
              {/* Animated border gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#14F195] via-[#9945FF] to-[#14F195] opacity-0 group-hover:opacity-30 transition-opacity duration-700 p-[1px]">
                <div className="h-full w-full rounded-2xl bg-[rgba(153,69,255,0.05)] backdrop-blur-lg"></div>
              </div>
              
              {/* Floating particles effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-2 left-2 w-1 h-1 bg-[#14F195] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-4 right-3 w-1 h-1 bg-[#9945FF] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="absolute bottom-3 left-4 w-1 h-1 bg-[#14F195] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                <div className="absolute bottom-2 right-2 w-1 h-1 bg-[#9945FF] rounded-full animate-bounce" style={{ animationDelay: '0.6s' }}></div>
              </div>
              
              {/* Text with enhanced styling */}
              <span className="relative z-10 font-semibold text-sm md:text-base transition-all duration-500 group-hover:text-white group-hover:scale-110 group-hover:drop-shadow-lg">
                {tech}
              </span>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#14F195]/20 to-[#9945FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 