import { Services } from "../consts/Services";

export const Servicios = () => {
  return (
    <section
      id="servicios"
      className="letra-2 container scroll-mt-20 md:scroll-mt-24 py-8 mx-auto px-4 sm:px-6 lg:px-8 "
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5">
            Conoce nuestra amplia gama de servicios 
          </h2>
          <p className="text-gray-600 text-lg mb-4 md:w-4/5">
            poedemos ofrecer solucion a tus problesmas, somos especialistas en{" "}
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-300"></div>
              </div>
              <span className="text-gray-600">Mantenimiento de piscinas y sus componentes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-300"></div>
              </div>
              <span className="text-gray-600">Purificación de aguas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-300"></div>
              </div>
              <span className="text-gray-600">Instalación de Componentes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-300"></div>
              </div>
              <span className="text-gray-600">Asesoría personalizada</span>
            </div>
          </div>

          <button className="mt-8 bg-cyan-400 text-white px-8 py-3 cursor-pointer rounded-full hover:bg-cyan-500 transition-colors font-medium"
            onClick={() => {
              const message = `Hola, quiero información sobre sus servicios`;
              window.open(
                `https://wa.me/573012839440?text=${encodeURIComponent(message)}`,
                "_blank"
              );
            }}
          >
            Comprar un servicio
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Services.map((service, index) => (
            <div
              key={index}
              className="bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => {
                const message = `Hola, quiero información sobre el servicio de ${service.title}`;
                window.open(
                  `https://wa.me/573012839440?text=${encodeURIComponent(message)}`,
                  "_blank"
                );
              }}
            >
              <div className="mb-4">
                <service.emoji className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
