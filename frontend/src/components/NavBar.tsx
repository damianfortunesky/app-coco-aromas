import React from 'react';
import Logo from '../assets/logo.png';
import Button from './UI/Button';
import UserAvatar from './UI/UserAvatar';
import InputField from './UI/InputField';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-10 h-10 object-contain" />
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-6">
          <div className="relative">
           
            <InputField type='text' placeholder="Buscar" className="w-full pl-10 pr-4 py-2 border border-pinkl-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"/>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M11 5a6 6 0 100 12 6 6 0 000-12z"
              />
            </svg>
          </div>
        </div>

        <div className="flex items-center space-x-4">
            <UserAvatar src="https://via.placeholder.com/40" alt="User Avatar" className="w-10 h-10 rounded-full object-cover border border-gray-300" />
            <Button label='Iniciar Sesión'></Button>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;
