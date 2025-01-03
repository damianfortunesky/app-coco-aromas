import { useState } from "react";

interface ButtonProps {
    label: string;
    onClick?: () => void; 
  }
  
  const Button: React.FC<ButtonProps> = ({ label, onClick}) => {
    
    const style ="font-semibold text-xs py-3 px-3 rounded-full bg-rosa text-blanco hover:bg-rosa_oscuro";
    
    const [isClicked, setIsClicked] = useState(false);

    const hanldeClick = () => {
        setIsClicked(true); // Activa la animación

        if (onClick) onClick();
        
        // Restablece el estado
        setTimeout(() => {
            setIsClicked(false);
        }, 150); // milisegundos
    };

    return (
      <button className={`${style} ${ isClicked ? "scale-105" : "scale-100" } bg-rosa text-blanco hover:bg-rosa_oscuro`} 
        onClick={hanldeClick}>
        {label}
      </button>
    );
  };
  
  export default Button;
  
