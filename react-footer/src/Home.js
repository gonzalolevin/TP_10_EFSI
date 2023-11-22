import React from "react";
import Creaciones from './CreacionesHome.json'; // Importa el archivo JSON
import './Proyectos.css'; // Importa el archivo CSS
import './Layout.css'


const Home = () => {
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
                                <img src={proyecto.imagen}alt={proyecto.titulo} />
                                <a href={proyecto.url} className="btn btn-primary">Ver proyecto</a>
                                
                                <div className={`love ${proyecto.isSmall ? 'small' : ''}`} onClick={(e) => e.stopPropagation()}>
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
                    )
                })
            }
        </div>
    );
}

export default Home;
