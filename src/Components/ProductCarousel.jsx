import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const ProductCarousel = ({ Products, id }) => {
  return (
    <div className="relative overflow-visible z-0">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: `.swiper-button-next-custom-${id}`,
          prevEl: `.swiper-button-prev-custom-${id}`,
        }}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="products-swiper"
      >
        {Products.map((product, index) => (
          <SwiperSlide
            key={index}
            className="h-full md:py-12 py-4 z-0"
            style={{ overflow: "visible" }}
          >
            <div className="text-center bg-white p-4 rounded-lg inset-shadow-md shadow-md h-full flex flex-col hover:shadow-xs transition-all duration-300 hover:scale-105">
              <div className="w-30 h-30 mx-auto mb-2">
                <img
                  src={product.image}
                  alt={product.image}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
              <div className="flex flex-col md:flex-row py-2 md:py-0 justify-between items-center px-4 bg-gray-100 p-2 rounded-xl w-1/2 md:w-full mx-auto">
                <p className="font-semibold">
                  <span className="font-bold">$</span> {product.price}
                </p>
                <button className="p-1.5 bg-cyan-400 text-white rounded-lg hover:bg-cyan-600 transition-colors cursor-pointer">
                  Saber más
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className={`swiper-button-prev-custom-${id} absolute top-1/2 left-0 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-cyan-400 hover:text-white transition-all duration-200 z-10`}
      >
        <FiChevronLeft className="w-6 h-6" />
      </button>

      <button
        className={`swiper-button-next-custom-${id} absolute top-1/2 right-0 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-cyan-400 hover:text-white transition-all duration-200 z-10`}
      >
        <FiChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
