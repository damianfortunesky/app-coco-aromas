import React from "react";
import Logo from '../assets/logo.png';
import Button from "./UI/Button";
import ElementList from "./UI/ElementList";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-light text-dark py-4 px-6 flex justify-between items-center shadow-md"> 
      
      <div className="text-2xl font-bold text-primary">
        <img src={Logo} alt="Logo" className="w-10 h-10 object-contain" />
      </div>

      {/* Links */}
      <ul className="flex space-x-8 font-sans font-medium text-sm">
          <ElementList label="Home"/>
          <ElementList label="Productos"/>
          <ElementList label="Contacto"/>
      </ul>

      {/* Cuenta */}
      <div className="space-x-2">
        <Button label="Crear Cuenta"/>
        <Button label="Iniciar Sesión"/>
      </div>
    </nav>
  );
};

export default Navbar;
