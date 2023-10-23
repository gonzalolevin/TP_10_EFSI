import React from "react";
import { Link,Outlet } from "react-router-dom";
import './Navbar.css'



export default function Navbar() {
    return (
        <>
      <nav className="navigation">
        <div
          className="navigation-menu">
          <ul>
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
      <footer>
        </footer>
    </>
    );
  }