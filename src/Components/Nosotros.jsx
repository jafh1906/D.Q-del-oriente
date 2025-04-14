export const Nosotros = () => {
  return (
    <section className="container mx-auto flex flex-col justify-center space-y-8 py-16 sm:px-6 lg:px-8 letra-2">
      {/* Header */}
      <h2 className="text-cyan-500 font-medium mb-4 text-3xl">QUIENES SOMOS</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Making Life Smoother and Easier Every Day
          </h1>
        </div>
        <div>
          <p className="text-gray-600 leading-relaxed">
            We are dedicated to making life smoother and easier every day with
            practical and user-friendly solutions. Our focus is on simplifying
            your daily routines and enhancing your overall convenience.
            Experience seamless solutions designed to fit effortlessly into your
            lifestyle.
          </p>
        </div>
      </div>

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
                To be the leading innovator, transforming industries with
                cutting-edge solutions that improve lives.
              </p>
            </div>
          </div>
        </div>

        {/* Goal Card */}
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
                To consistently deliver exceptional value and achieve excellence
                in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
