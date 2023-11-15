import React, { useEffect } from "react";
import './Home.css'; // Asegúrate de tener el archivo CSS correspondiente
import './Layout.css'
import Footer from "./components/Footer";
import "./components/Footer.css";

const App = () => {
    useEffect(() => {
        // Cualquier lógica de inicialización que necesites
    }, []);

    return (
        <div className="container">
            <header>
                <img src="tu-imagen.jpg" alt="Tu Nombre" />
                <h1>Tu Nombre</h1>
                <p>Desarrollador Web</p>
            </header>

            <section className="about">
                <h2>Acerca de Mí</h2>
                <p>Breve descripción sobre ti y tus habilidades.</p>
            </section>

            <section className="languages">
                <h2>Lenguajes de Programación</h2>
                <div className="language">HTML</div>
                <div className="language">CSS</div>
                <div className="language">JavaScript</div>
                {/* Agrega aquí más lenguajes según tus habilidades */}
            </section>
            <Footer/>
        </div>
    );
}

export default App;
