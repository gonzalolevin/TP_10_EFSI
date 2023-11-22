import React, { useEffect } from "react";
import './Home.css'; // Asegúrate de tener el archivo CSS correspondiente
import './Layout.css'
import Footer from "./components/Footer";
import "./components/Footer.css";
import Foto from "./Foto.jpg";


const InfoPersonal = () => {
      return (
        <div className="contenedor">
            <header>
                <img className="img"src={Foto} alt="Tu Nombre" style={{ width: '300px', height: '250px' }} />
                <h1>Gonzalo Ariel Levin</h1>
                <p>Desarrollador Web</p>
            </header>

            <section className="about">
                <h2>Acerca de Mí</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit integer montes, orci aliquam fusce vehicula ac magnis quis dui, senectus diam scelerisque cum torquent ullamcorper mollis habitant. Elementum consequat aliquet facilisi eleifend auctor velit imperdiet cras mollis vitae, semper natoque interdum integer bibendum id hendrerit potenti justo cum purus, ac eu accumsan commodo luctus felis molestie cursus non. Vel per etiam gravida vestibulum velit ultricies, suspendisse nullam inceptos sociosqu vehicula justo nam, donec condimentum felis vitae tincidunt.</p>
            </section>

            <section className="languages">
                <h2>Lenguajes de Programación</h2>
                <img src="https://cdn-icons-png.flaticon.com/512/174/174854.png" alt="Descripción de la imagen" style={{ width: '70px', height: '70px', borderRadius: '50%', margin: '0 10px' }} />
                    <img src="https://cdn-icons-png.flaticon.com/512/919/919826.png" alt="CSS" style={{ width: '70px', height: '70px', borderRadius: '50%', margin: '0 10px' }} />
                    <img src="https://static-00.iconduck.com/assets.00/c-sharp-c-icon-1822x2048-wuf3ijab.png" alt="C#" style={{ width: '70px', height: '70px', borderRadius: '70px%', margin: '0 10px' }} />
                    <img src="https://bognarjunior.files.wordpress.com/2018/03/if_react-js_logo_1174949.png?w=144" alt="REACT" style={{ width: '70px', height: '70px', borderRadius: '70px%', margin: '0 10px' }} />
                {/* Agrega aquí más lenguajes según tus habilidades */}
            </section>
        </div>
    );
}

export default InfoPersonal;
