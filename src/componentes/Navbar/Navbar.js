import React from "react"
import "./navbar.css"
import Carrito from  '../Navbar/carrito.png' 
import Cuadro from  '../Navbar/cuadro.jpg' 

export function Navbar() {
    return < div className="navBar"> 
        <ul className="nav-icono">
        <li>
            <img src= {Cuadro }  className = "cuadro"  alt = 'cuadro' />
        </li>
    </ul>
        <ul className="nav-ul">
        <li>
            <a href="/#" className="nav-link">Inicio </a>
        </li>
    </ul>
    <ul className="nav-ul">
        <li>
            <a href="/#" className="nav-link" >Nosotros </a>
        </li>
    </ul>
    <ul className="nav-icono">
        <li>
            <img src= {Carrito } className = "carrito"  alt = 'carrito' />
            <p className="paragraphImg">2</p>
        </li>
    </ul>
    </div> 
}

