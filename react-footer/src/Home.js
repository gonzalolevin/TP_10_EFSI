import React from "react";
import Creaciones from './CreacionesHome.json'; // Importa el archivo JSON
import './Proyectos.css'; // Importa el archivo CSS
import './Layout.css';
import Foto from "./Foto.jpg";
import './Home.css';

const Home = () => {
    return (
        <div className="container">
            <div className="perfil">
                <img className="img" src={Foto} alt="Tu Nombre" style={{ width: '300px', height: '250px' }} />
                <div className="grande">
                    <h1>Gonzalo Ariel Levin</h1>
                    <p>Desarrollador Web</p>
                </div>
            </div>
            {Creaciones.map((proyecto, index) => (




                <div className="card " key={index}>
                    <div className="card-body estiloCard">
                        <h5 className="card-title">{proyecto.titulo}</h5>
                        <p className="card-text">{proyecto.descripcion}</p>
                        <p className="card-text">{proyecto.fecha}</p>
                        <a href={proyecto.url}></a>
                        <img src={proyecto.imagen} alt={proyecto.titulo} />
                        <a href={proyecto.url} className="boton"><font color="#000000">Ver proyecto</font></a>
                        
                    </div>
                </div>




            ))}
        </div>
    );
}

export default Home;
