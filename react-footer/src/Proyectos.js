import React from "react";
import Creaciones from './Creaciones.json'; // Importa el archivo JSON
import './Proyectos.css'; // Importa el archivo CSS

const Proyectos = () => {
    return (
        <div className="container">
            {
                Creaciones.map((proyecto, index) => {
                    return (
                        <div className="card" key={index}>
                            <div className="card-body">
                                <h5 className="card-title">{proyecto.titulo}</h5>
                                <p className="card-text">{proyecto.descripcion}</p>
                                <p className="card-text">{proyecto.fecha}</p>
                                <a href={proyecto.url}></a>
                                <img src={proyecto.imagen} alt={proyecto.titulo} />
                                <a href={proyecto.url} className="btn btn-primary">Ver proyecto</a>
                                
                                <div class="love">
                                    <input id="switch" type="checkbox"/>
                                        <label class="love-heart" for="switch">
                                            <i class="left"></i>
                                            <i class="right"></i>
                                            <i class="bottom"></i>
                                            <div class="round"></div>
                                        </label>
                                </div>
                            </div>
                            
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Proyectos;
