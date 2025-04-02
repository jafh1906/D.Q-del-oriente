import LOGO from "../assets/images/LOGO.webp";

export const NavBar = () => {
  return (
    <header className="letra-2 m-auto bg-cover bg-center bg-no-repeat bg-[url(./assets/images/bgNavBar2.png)] ">
      <div className="flex items-center justify-between px-10">
        <div className="w-[200px]">
          <img src={LOGO} alt="logo" />
        </div>
        <div className="flex gap-10 text-white">
          <div className="font-bold">Inicio</div>
          <div>Productos</div>
          <div>Servicios</div>
          <div>Nosotros</div>
        </div>
      </div>
    </header>
  );
};
