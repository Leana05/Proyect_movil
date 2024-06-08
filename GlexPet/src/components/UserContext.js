import React, { createContext, useState } from 'react';

// Crear el contexto
export const UserContext = createContext();

// Crear el proveedor del contexto
export const UserProvider = ({ children }) => {
  const [cedula, setCedula] = useState('');

  return <UserContext.Provider value={{ cedula, setCedula }}>{children}</UserContext.Provider>;
};
