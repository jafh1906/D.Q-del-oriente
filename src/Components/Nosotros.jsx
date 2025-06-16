export const Nosotros = () => {
  return (
    <section className="container mx-auto flex flex-col justify-center space-y-8 py-16 sm:px-6 lg:px-8 letra-2">

      {/* Header */}
      
      <h2 className="text-cyan-500 font-medium mb-4 text-3xl">QUIENES SOMOS</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Somos tu mejor opcion para el tratamiento de agua
          </h1>
        </div>
        <div>
          <p className="text-gray-600 leading-relaxed">
            Distribución Química del Oriente es una empresa fundada en el año 2014 en la ciudad de Bucaramanga, Colombia. apasionada por brindar sus servicios con responsabilidad para dar soluciones en el tratamiento de aguas (piscinas, residencial e industrial) con diseño e instalación del sistema para montaje de equipos como, electrobombas, filtros, accesorios, entre otros que permitan el optimo desempeño para la calidad del agua.
          </p>
        </div>
      </div>

      {/* Goal Card */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative rounded-lg overflow-hidden shadow-lg h-80">
          <img
            src="./src/assets/images/imgVision.webp"
            alt="Vision image showing architectural models"
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-end justify-center">
            <div className="bg-white shadow p-6 w-5/6 rounded-2xl mb-5">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Vision</h3>
              <p className="text-gray-600">
                Ser el mejor lider en la region por la responsabilidad en el servicio y suministro para el tratamiento de agua en diferentes sectores: piscinas, residencial e industrial, mejorando los procesos para ajustarnos a las exigencias cambiantes de los clientes.
              </p>
            </div>
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden shadow-lg h-80">
          <img
            src="./src/assets/images/imgMision.webp"
            alt="Goal image showing team collaboration"
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-end justify-center">
            <div className="bg-white shadow p-6 w-5/6 rounded-2xl mb-5">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mision</h3>
              <p className="text-gray-600">
                Distribución Química del Oriente tiene como misión la satisfacción oportuna y responsable a las necesidades del cliente, suministrando productos de optima calidad, garantizando su eficiencia para mantener el liderazgo en servicio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
