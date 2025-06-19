import { Products } from "../consts/Products";

import { ProductCarousel } from "./ProductCarousel";

export const Productos = () => {
  return (
    <section
      id="productos"
      className="w-full scroll-mt-20 md:scroll-mt-24 md:container mx-auto px-4 py-8"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold md:text-4xl mb-4">
          Conoce nuestra amplia gama de productos.
        </h2>
        <p>La mejor calidad y al mejor precio</p>
      </div>

      <ProductCarousel Products={Products} id="first" />
      <ProductCarousel Products={Products} id="second" />
    </section>
  );
};
