
import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritosContext = createContext();

const FavoritoProvider = ({ children }) => {
  const initialFavoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  const [favoritos, setFavoritos] = useState(initialFavoritos);

  const agregarFavorito = (proyectoId) => {
    if (!favoritos.includes(proyectoId)) {
      setFavoritos([...favoritos, proyectoId]);
    }
  };

  const eliminarFavorito = (proyectoId) => {
    const nuevosFavoritos = favoritos.filter((id) => id !== proyectoId);
    setFavoritos(nuevosFavoritos);
  };

  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  const value = {
    favoritos,
    agregarFavorito,
    eliminarFavorito,
  };

  return (
    <FavoritosContext.Provider value={value}>
      {children}
    </FavoritosContext.Provider>
  );
};

const useFavoritos = () => {
  const context = useContext(FavoritosContext);
  if (!context) {
    throw new Error('useFavoritos must be used within a FavoritoProvider');
  }
  return context;
};

export { FavoritoProvider, useFavoritos };
