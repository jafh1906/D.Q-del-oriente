import LOGO from "../assets/images/LOGO.webp";

export const NavBar = () => {
  return (
    // <header className="letra-2  bg-cover bg-center . bg-[url(./assets/images/bgNavBar2.webp)]">
    <header className="navBar letra-3 bg-[#006b96] shadow-2xl">
      <div className="flex items-center justify-between max-w-[1440px] mx-auto px-5">
        <div className="w-[200px]">
          <img src={LOGO} alt="logo" />
        </div>
        <div className="flex gap-10 text-white">
          <div className="hover:font-bold cursor-pointer">Inicio</div>
          <div className="hover:font-bold cursor-pointer">Productos</div>
          <div className="hover:font-bold cursor-pointer">Servicios</div>
          <div className="hover:font-bold cursor-pointer">Nosotros</div>
        </div>
      </div>
    </header>
  );
};
