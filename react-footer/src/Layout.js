import { Link,Outlet } from "react-router-dom";
import './Layout.css'
import Footer from "./components/Footer";
import "./components/Footer.css";
 
import React from "react";


export default function Layout() {
    return (
        <>
      <nav className="navigation">
        <div
          className="navigation-menu">
          <ul>
          <li>
            <Link to = "home">Home</Link>
            </li>
            <li>
            <Link to ="proyectos">Proyectos</Link>
            </li>
            <li>
            <Link to ="infopersonal">Info Personal</Link>
            </li>
            <li>
            <Link to = "favoritos">Favoritos</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet/>
      <Footer/>
    </>
    );
  }