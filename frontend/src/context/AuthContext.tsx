import React, { createContext, useState, useContext, ReactNode } from "react";

/* Este contexto manejará la autenticación de los usuarios, incluyendo el estado del usuario actual, y funciones para iniciar cerrar sesión. */

interface AuthContextProps {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

interface User {
  id: string;
  name: string;
  email: string;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User) => {
    setUser(user);
    // Opcional: guardar en localStorage o cookies
  };

  const logout = () => {
    setUser(null);
    // Opcional: eliminar de localStorage o cookies
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};
