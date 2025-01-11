import React from "react";
import { Link } from "react-router-dom";
// @ts-ignore
//import { SearchIcon, ShoppingCartIcon, UserIcon, ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/outline";
import { SearchIcon, ShoppingCartIcon, UserIcon, ChatIcon } from "@heroicons/react/outline";


const Header: React.FC = () => {
  return (
    <header className="bg-pink-50 border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Tienda Cinco"
            className="h-12 w-12 rounded-full mr-2"
          />
          <span className="text-lg font-bold text-pink-700">COCO AROMAS</span>
        </Link>

        {/* Barra de búsqueda */}
        <div className="flex-grow mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="¿Qué estás buscando?"
              className="w-full border border-gray-300 rounded-full py-2 px-4 pl-10 focus:ring-2 focus:ring-pink-400 focus:outline-none"
            />
            <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
          </div>
        </div>

        {/* Menú de íconos */}
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <ChatIcon className="h-6 w-6 text-gray-600 mx-auto" />
            <span className="text-xs">Ayuda</span>
          </div>
          <div className="text-center">
            <UserIcon className="h-6 w-6 text-gray-600 mx-auto" />
            <span className="text-xs">Mi cuenta</span>
          </div>
          <div className="text-center relative">
            <ShoppingCartIcon className="h-6 w-6 text-gray-600 mx-auto" />
            <span className="absolute top-0 right-0 text-xs bg-pink-600 text-white rounded-full px-1">
              0
            </span>
            <span className="text-xs">Mi carrito</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
