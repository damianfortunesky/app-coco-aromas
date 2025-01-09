import React from "react";
import { Link } from "react-router-dom";
import NavLink from "./UI/NavLink";

const NavBar: React.FC = () => {
  return (
    <header className="bg-orange-500 text-white">

      {/* Navegación Principal */}
      <nav className="container flex flex-row flex-wrap justify-between items-center px-4 py-4">

        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold hover:underline">
            COCO AROMAS
          </Link>
        </div>

        {/* Links */}
        <ul className="flex space-x-8">
          <li>
            <NavLink text="Contactanos" href="/contacto" />
          </li>
          <li>
            <NavLink text="Iniciar sesión" href="/login" />
          </li>
          <li>
            <NavLink text="Crear cuenta" href="/signin" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;

