import React, { useEffect } from "react";
import './Home.css'; // Asegúrate de tener el archivo CSS correspondiente
import './Layout.css'
import Footer from "./components/Footer";
import "./components/Footer.css";
import Foto from "./Foto.jpg";


const App = () => {
    useEffect(() => {
        // Cualquier lógica de inicialización que necesites
    }, []);

    return (
        <div className="contenedor">
            <header>
                <img className="img"src={Foto} alt="Tu Nombre" style={{ width: '300px', height: '250px' }} />
                <h1>Gonzalo Ariel Levin</h1>
                <p>Desarrollador Web</p>
            </header>

            <section className="about">
                <h2>Acerca de Mí</h2>
                <p>Breve descripción sobre ti y tus habilidades.</p>
            </section>

            <section className="languages">
                <h2>Lenguajes de Programación</h2>
                <img src="ruta/a/tu/imagen.jpg" alt="Descripción de la imagen"/>
                <img src="ruta/a/tu/imagen.jpg" alt="Descripción de la imagen"/>
                <img src="ruta/a/tu/imagen.jpg" alt="Descripción de la imagen"/>
                {/* Agrega aquí más lenguajes según tus habilidades */}
            </section>
        </div>
    );
}

export default App;
