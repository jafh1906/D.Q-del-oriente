import LOGO from "../assets/images/LOGO.webp";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="letra-2 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="w-[210px] mt-[-25px]">
              <img src={LOGO} className="" alt="LOGO" />
            </div>
            <p className="pl-4.5 text-gray-600">
              Cuidamos tu salud y bienestar con agua pura y piscinas impecables, brindando servicio confiable, profesional y de alta calidad siempre.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4 uppercase">
                  Sobre nosotros
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Servicios
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Productos
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Nosotros
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4 uppercase">
                  Contáctanos
                </h3>
                <ul className="space-y-3  text-gray-600">
                  <li className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <FiPhone />
                      <span>(+57) 316 438 3162</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiPhone />
                      <span>(+57) 300 682 3770</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiMail />
                    <span>piscinasraul@hotmail.com</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4 uppercase">
                  Encuéntranos
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li>
                    <div className="flex items-start gap-2">
                      <FaLocationDot className="mt-1" />
                      <div>
                        <p>Calle 104c # 11D-19 local-1</p>
                        <p>Bucaramanga, Santander-Colombia</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              Distribución quimica del oriente S.A.S ©
            </p>
            <p className="text-gray-600 text-sm">
              Todos los derechos reservados {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
