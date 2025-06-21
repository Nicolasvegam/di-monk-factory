import Image from "next/image";

export default function ContactForm() {
  return (
    <section className="py-20 md:py-24 mt-12 relative overflow-hidden bg-[#000000]">
      <div
        className="absolute inset-0 opacity-5 bg-gradient-to-br from-[#9945FF] to-[#14F195]"
        style={{
          filter: "blur(100px)",
        }}
      ></div>

      <div className="container mx-auto px-4 relative">
        <div className="md:grid md:grid-cols-2 gap-16 items-center">
          <div className="hidden md:block animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
            <Image
              src="/greek-god.png"
              alt="The Creation of Adam"
              width={800}
              height={600}
              className="transform -scale-x-100 rounded-lg"
            />
          </div>
          <div>
            <div className="max-w-2xl mx-auto md:mx-0 text-center md:text-left mb-16 animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-6 text-white">
                Contáctanos
              </h2>
              <p className="text-lg md:text-xl font-light font-mono text-white">
                Cuéntanos sobre tu proyecto y cómo podemos ayudarte
              </p>
            </div>

            <div className="max-w-md mx-auto md:mx-0 animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards] flex justify-center md:justify-start">
              <button
                type="submit"
                className="font-mono uppercase px-8 py-4 rounded-full font-medium transition-all duration-300 hover:opacity-80 bg-gradient-to-r from-[#274DD5] to-[#0BBAE1] text-white"
              >
                Enviar Mensaje
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}