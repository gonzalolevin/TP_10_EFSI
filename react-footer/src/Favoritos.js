// Favoritos.js

import React from "react";
import Creaciones from './CreacionesProyecto.json';
import './Proyectos.css';
import './Layout.css'
import './Home.css'
import { useFavoritos } from './FavoritosContext';

function Favoritos() {
  const { favoritos, eliminarFavorito } = useFavoritos();

  if (!favoritos) {
    return <div>Cargando...</div>;
  }

  const handleEliminarFavorito = (proyectoId) => {
    eliminarFavorito(proyectoId);
  };

  return (
    <div className="container">
      {favoritos.map((proyectoId, index) => {
        const proyecto = Creaciones[proyectoId];

        if (!proyecto) {
          return null;
        }

        return (
          <div className="card" key={index}>
            <div className="card-body estiloCard">
              <h5 className="card-title">{proyecto.titulo}</h5>
              <p className="card-text">{proyecto.descripcion}</p>
              <p className="card-text">{proyecto.fecha}</p>
              <img src={proyecto.imagen} alt={proyecto.titulo} />
              <a href={proyecto.url} className="boton"><span style={{ color: '#000000' }}>Ver proyecto</span></a>

              <button onClick={() => handleEliminarFavorito(proyectoId)}>Eliminar</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Favoritos;
