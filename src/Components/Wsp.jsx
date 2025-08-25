import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export const Wsp = () => {
  return (
    <div>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </a>
    </div>
  );
};
