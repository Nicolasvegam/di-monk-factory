export default function TechStack() {
  const technologies = [
    'next.js', 'typescript', 'nest.js', 'tailwind', 
    'aws', 'python', 'react', 'node.js'
  ];

  return (
    <section id="tech" className="py-20 md:py-24 mt-12 relative overflow-hidden">
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
              className="font-mono h-32 rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-105 animate-fade-in opacity-0 [animation-fill-mode:forwards] bg-[rgba(153,69,255,0.05)] border border-[rgba(153,69,255,0.1)] backdrop-blur-lg text-[#14F195]"
              style={{ 
                animationDelay: `${400 + (index * 100)}ms`
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 