import HeroImage from "../assets/images/HeroImage.webp";

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="letra-2 container mx-auto flex flex-col md:flex-row justify-between items-center pt-30 pb-6 px-4 sm:px-6 lg:px-8 mb-20"
    >
      <div className="w-full md:w-1/2 space-y-8">
        <div className="flex items-center justify-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group">
          <span className="text-cyan-500 group-hover:text-amber-300 group-hover:scale-110 transition-transform">
            ★
          </span>
          <span className="text-sm font-medium">Tu mejor opcion</span>
        </div>

        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Confía en los especialistas
          <span className="text-cyan-500 relative inline-block">
            productos y servicios de
            {/* <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60"></span> */}
          </span>
          <span>
            {" "}
            calidad<span className="inline-block ml-2 animate-pulse">💧</span>
          </span>
        </h1>

        <p className="text-gray-600 text-lg md:text-xl max-w-xl">
          Ofrecemos soluciones en purificación de agua y mantenimiento de
          piscinas, garantizando calidad, confianza y bienestar.
        </p>
      </div>

      <div className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12">
        <div className="relative">
          <img
            src={HeroImage}
            alt=""
            className="w-[530px] mx-auto rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};
