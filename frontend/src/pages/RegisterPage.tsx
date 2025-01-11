import React from "react";
import RegisterForm from "../components/Authentication/RegisterForm";

const RegisterPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8 flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Crear Cuenta</h2>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
