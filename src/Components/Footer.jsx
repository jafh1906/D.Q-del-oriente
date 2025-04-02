import LOGO from '../assets/images/LOGO.webp'
import { FaPhone } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="letra-2 bg-[#006b96] text-white">
      <div className="flex w-full justify-between px-[10%] pt-[3%] pb-[2%]">

        <div className="w-[210px] mt-[-25px]">
          <img src={LOGO} className='' alt="LOGO" />
          <p className='pl-4.5'>
          en este texto podemos escribir un lema o dicho corto que describa la empresa con el objetivo de dar un mensaje comercial sobre nosotros 
          </p>
        </div>

        <div className="flex w-auto flex-col gap-4">
          <h2 className="letra-1 text-xl">Acerca de</h2>
          <div className="flex flex-col gap-3">
            <li>Servicios</li>
            <li>Productos</li>
            <li>Nosotros</li>
          </div>
        </div>

        <div className="flex w-auto flex-col gap-4">
          <h2 className="letra-1 text-xl">Contáctanos</h2>
          <div className="flex flex-col gap-3">
            <p className='flex items-center gap-2'>
              <FaPhone />
              <span>(+57 ) 123 456 7890</span>
            </p>
            <p className='flex items-center gap-2'>
              <HiMail />
              <span>Dquimcadeloriente@example.com</span>
            </p>
          </div>
        </div>

        <div className="flex w-aunto flex-col gap-4">
          <h2 className="letra-1 text-xl">Encuentranos</h2>
          <div className="flex flex-col gap-3">
            <p className='flex items-center gap-2'>
              <FaLocationDot />
              <span>Calle X # X-X</span>
            </p>
            <p>Bucaramanga, Santander-Colombia</p>
          </div>
        </div>
      </div>

      <hr />

      <div className='px-[15%] pt-[0.5%] flex justify-center'>
        <p className='text-xs'>Distribución quimica del oriente S.A.S ©<span className='text-base'> l </span>Todos los derechos reservados 2025</p>
      </div>
    </footer>
  );
};
