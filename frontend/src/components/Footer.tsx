import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Contacto */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg font-bold">Contacto</h3>
          <p className="mt-2">cocoaromas@gmail.com</p>
          <p>+54 11 2400 8735</p>
        </div>

        {/* Redes Sociales */}
        <div className="flex space-x-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-orange-500"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-orange-500"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-orange-500"
          >
            <FaTiktok size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

