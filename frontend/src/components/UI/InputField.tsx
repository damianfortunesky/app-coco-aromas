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

