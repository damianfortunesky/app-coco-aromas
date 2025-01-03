import React from 'react';
import ElementList from './UI/ElementList';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blanco text-negro py-8 shadow-md">
      
      <div className="container mx-auto grid grid-cols-3 text-center text-sm font-sans">
        <div>
          <h4 className="text-negro font-bold">COCO AROMAS</h4>
        </div>

        <div>
          <h4 className="text-negro font-bold mb-3">ENLACES</h4>
        
          <ul className="space-y-1">
            <ElementList label='Políticas de Privacidad'/>
            <ElementList label='Términos y Condiciones'/>
          </ul>
        </div>

        <div>
          <h4 className="text-negro font-bold mb-3">REDES SOCIALES</h4>
          <ul className="space-y-1">
            <ElementList label='TikTok'/>
            <ElementList label='Facebook'/>
            <ElementList label='Instagram'/>
          </ul>
        </div>

      </div>

      <p className="text-center mt-4 text-sm text-gris">
        © 2025 COCO AROMAS. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
