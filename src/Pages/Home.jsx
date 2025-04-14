import { Hero } from "../Components/Hero";
import { Productos } from "../Components/Productos";
import { Nosotros } from "../Components/Nosotros";
import { Servicios } from "../Components/Servicios";
import { LayoutApp } from "../Layouts/LayoutApp";

export const Home = () => {
  return (
    <LayoutApp>
      <Hero />
      <Productos />
      <Servicios />
      <Nosotros />
    </LayoutApp>
  );
};
