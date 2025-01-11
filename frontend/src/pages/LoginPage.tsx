import React from "react";
import LoginForm from "../components/Authentication/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8 flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Iniciar Sesión</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
