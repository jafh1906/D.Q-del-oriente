// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import { useState } from "react";
// import { FiX } from "react-icons/fi";

// export const ProductCarousel = ({ Products, Accessories, id }) => {
//   const [seeDescription,setSeeDescription] = useState (null)
//   return (
//     <div className="relative overflow-visible z-0">
//       <Swiper
//         modules={[Navigation]}
//         navigation={{
//           nextEl: `.swiper-button-next-custom-${id}`,
//           prevEl: `.swiper-button-prev-custom-${id}`,
//         }}
//         spaceBetween={20}
//         pagination={{
//           clickable: true,
//         }}
//         breakpoints={{
//           640: {
//             slidesPerView: 2,
//           },
//           768: {
//             slidesPerView: 3,
//           },
//           1024: {
//             slidesPerView: 4,
//           },
//         }}
//         className="products-swiper"
//       >
//         {Products.map((product, index) => (
//           <SwiperSlide
//             key={index}
//             className="h-full md:py-12 py-4 z-0"
//             style={{ overflow: "visible" }}
//           >

            
//             <div className="relative text-center bg-white p-4 rounded-lg inset-shadow-md shadow-md h-full flex flex-col hover:shadow-xs transition-all duration-300 hover:scale-105">
//               <div className="w-30 h-30 mx-auto mb-2">
//                 <img
//                   src={product.image}
//                   alt={product.image}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
//               <div className="flex flex-col  justify-center items-center  bg-gray-100 py-2 px-4 rounded-xl w-3/5 mx-auto">
//                 {/* <p className="font-semibold">
//                   <span className="font-bold">$</span> {product.price}
//                 </p> */}
//                 <button 
//                 className="p-1.5 bg-cyan-400 text-white rounded-lg hover:bg-cyan-600 transition-colors cursor-pointer animate-pulse font-semibold"
//                 onClick={()=> setSeeDescription(product.name)}>
//                   Saber más
//                 </button>
//               </div>
//               {seeDescription === product.name && (
//               <div className="absolute bg-cyan-400 flex flex-col items-start p-5 rounded-xl text-white w-[120%] h-[100%]">
//                 <div className="flex justify-between w-full border-b-2">
//                   <h1 className="w-full flex pb-2 text-lg font-semibold">{product.name}</h1>
//                   <button
//                   className="font-bold pb-4"
//                   onClick={()=>setSeeDescription(null)}
//                   >
//                     <FiX className="font-bold text-3xl"/>
//                   </button>
//                 </div>
//                 <p className="">{product.description}</p>

//               </div>
//       )}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <button
//         className={`swiper-button-prev-custom-${id} absolute top-1/2 left-0 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-cyan-400 hover:text-white transition-all duration-200 z-10`}
//       >
//         <FiChevronLeft className="w-6 h-6" />
//       </button>

//       <button
//         className={`swiper-button-next-custom-${id} absolute top-1/2 right-0 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-cyan-400 hover:text-white transition-all duration-200 z-10`}
//       >
//         <FiChevronRight className="w-6 h-6" />
//       </button>
//     </div>
//   );
  
// };


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { useState } from "react";

export const ProductCarousel = ({ Products, Accessories, id }) => {
  const [seeDescription, setSeeDescription] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setSeeDescription(true);
  };

  const closeModal = () => {
    setSeeDescription(false);
    setSelectedProduct(null);
  };

  return (
    <div className="relative overflow-visible">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: `.swiper-button-next-custom-${id}`,
          prevEl: `.swiper-button-prev-custom-${id}`,
        }}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="products-swiper"
      >
        {Products.map((product, index) => (
          <SwiperSlide
            key={index}
            className="h-full md:py-12 py-4 z-0"
            style={{ overflow: "visible" }}
          >
            <div className="relative text-center bg-white p-4 rounded-lg shadow-md h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain shadow-lg rounded-md"
                  />
              </div> 

              <h3 className="text-xl font-semibold mb-3">{product.name}</h3>

              <div className="flex justify-center space-x-4 items-center bg-gray-100 py-2 px-4 rounded-xl mx-auto">
                <button
                  className="p-1.5 bg-cyan-400 text-white rounded-lg hover:bg-cyan-600 transition-colors cursor-pointer animate-pulse font-semibold shadow-lg"
                    onClick={() => {
                        const message = `Hola, quiero información sobre el producto ${product.name}`;
                        window.open(
                          `https://wa.me/573012839440?text=${encodeURIComponent(message)}`,
                          "_blank"
                        );
                      }}

                >
                  ¡Comprar!
                </button>
                <button
                  className=" shadow-lg p-1.5 bg-cyan-400 text-white rounded-lg hover:bg-cyan-600 transition-colors cursor-pointer font-semibold"
                  onClick={() => openModal(product)}
                >
                  Saber más
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botón anterior */}
      <button
        className={`swiper-button-prev-custom-${id} absolute top-1/2 left-0 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-cyan-400 hover:text-white transition-all duration-200 z-10`}
      >
        <FiChevronLeft className="w-6 h-6" />
      </button>

      {/* Botón siguiente */}
      <button
        className={`swiper-button-next-custom-${id} absolute top-1/2 right-0 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-cyan-400 hover:text-white transition-all duration-200 z-10`}
      >
        <FiChevronRight className="w-6 h-6" />
      </button>

      {/* 🔥 MODAL SUPERIOR CON BLUR */}

      {seeDescription && selectedProduct && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999] p-4"
        onClick={closeModal}
        >
          <div
            className="relative scale-up-center w-[90%] max-w-md rounded-xl shadow-2xl overflow-hidden animate-[fadeIn_0.3s_ease] bg-cover bg-center"
            style={{
              backgroundImage: `url(${selectedProduct.fondo})`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* 🔥 Overlay oscuro con degradado + blur */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 backdrop-blur-xs"></div>

            {/* Contenido */}
            <div className="relative z-10 p-6 text-white">
              {/* Header */}
              <div className="flex justify-between items-center border-b border-white/30 pb-2">
                <h1 className="text-xl font-semibold">
                  {selectedProduct.name}
                </h1>

                <button onClick={closeModal}>
                  <FiX className="text-3xl cursor-pointer hover:text-cyan-300 transition-colors" />
                </button>
              </div>

              {/* Descripción */}
              <p className="mt-4 text-lg text-white/90 leading-relaxed">
                {selectedProduct.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};