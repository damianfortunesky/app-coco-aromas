import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          {/* Información de la Empresa */}
          <div>
            <h3 className="font-bold text-lg">Sahumerios Online</h3>
            <p className="text-gray-400 text-sm">
              Aromas que inspiran tu día.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="font-bold text-sm uppercase">Enlaces</h4>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="/about" className="hover:underline text-gray-400">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline text-gray-400">
                  Políticas de Privacidad
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:underline text-gray-400">
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="font-bold text-sm uppercase">Síguenos</h4>
            <div className="mt-2 space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} COCO AROMAS. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
