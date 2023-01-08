import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/barberpole-pngrepo-com.png'
import menu from '../assets/icon-menu.svg'

function Navbar() {
    return (
    <nav className="desktop">  
    
        <div className="logo"><Link to={"/"}><img src={logo} alt="logo" /></Link></div>

        <label for="menu" className="nav_label"><img src={menu} alt="" className="nav_icon" /></label>
        <input type="checkbox" id="menu" className="nav_input" />

        <div className="primary" id="menu">
            <Link to={"/listadoturno"}>Lista de Turnos</Link>
            <Link to={"/servicios"}>Servicios</Link>
            <Link to={"/"}>Home</Link>
        </div>    
    
</nav>
    )
}

export default Navbar