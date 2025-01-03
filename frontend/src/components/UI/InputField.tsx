interface InputFieldProps {
    type: string,
    placeholder?: string,
    className?:string
}

const InputField: React.FC<InputFieldProps> = ({type, placeholder='placeholder', className}) => {
    return (
        <>
         <input
              type={type}
              placeholder={placeholder}
              className={className}
            />        
        </>
    );
};

export default InputField;

/*className="w-full pl-10 pr-4 py-2 border border-pinkl-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500" */