interface ButtonProps {
    label: string
}

const Button: React.FC<ButtonProps> = ({label}) => {
    return (
        <>
          <button className="bg-pink-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75">{label}</button>          
        </>
    );
};

export default Button;