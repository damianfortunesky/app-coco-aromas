import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-4">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        {/* Enlaces */}
        <nav className="flex space-x-4 text-sm text-gray-700">
          <Link to="/">Inicio</Link>
          <Link to="/products">Productos</Link>
          <Link to="/contact">Contacto</Link>
          <Link to="/faq">Cómo comprar</Link>
          <Link to="/about">Quiénes somos</Link>
          <Link to="/returns">Política de cambios</Link>
          <Link to="/sales">LIQUIDACIÓN</Link>
        </nav>

        {/* Descuento */}
        <p className="text-sm text-pink-600 font-semibold">
          - 20% DESCUENTO ABONANDO EN EFECTIVO -
        </p>
      </div>
    </footer>
  );
};

export default Footer;
