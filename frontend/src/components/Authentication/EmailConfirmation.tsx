import React from "react";

const EmailConfirmation: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-6 rounded shadow-md">
        <h1 className="text-xl font-bold text-gray-800 mb-4">Confirma tu Email</h1>
        <p className="text-gray-600">
          Te hemos enviado un correo con un enlace para confirmar tu cuenta. Por favor, revisa
          tu bandeja de entrada y haz clic en el enlace para completar el registro.
        </p>
      </div>
    </div>
  );
};

export default EmailConfirmation;
