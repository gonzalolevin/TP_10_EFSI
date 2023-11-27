// Proyectos.js

import React from "react";
import Creaciones from './CreacionesProyecto.json';
import './Proyectos.css';
import './Layout.css'
import './Home.css'
import { useFavoritos } from './FavoritosContext';

const Proyectos = () => {
  const { agregarFavorito } = useFavoritos();

  const agregar = (proyectoId) => {
    agregarFavorito(proyectoId);
  }

  return (
    <div className="container">
      {Creaciones.map((proyecto, index) => (
        <div className="card" key={index}>
          <div className="card-body estiloCard">
            <h5 className="card-title">{proyecto.titulo}</h5>
            <p className="card-text">{proyecto.descripcion}</p>
            <p className="card-text">{proyecto.fecha}</p>
            <a href={proyecto.url}></a>
            <img src={proyecto.imagen} alt={proyecto.titulo} />
            <a href={proyecto.url} className="boton"><font color="#000000">Ver proyecto</font></a>

            <div className={`love ${proyecto.isSmall ? 'small' : ''}`} onClick={() => agregar(index)}>
              <input id={`switch${index}`} type="checkbox" />
              <label className="love-heart" htmlFor={`switch${index}`}>
                <i className="left"></i>
                <i className="right"></i>
                <i className="bottom"></i>
                <div className="round"></div>
              </label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Proyectos;
