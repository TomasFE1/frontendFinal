import React from 'react'

function Footer() {
    return (
        <footer className="container-fluid p-5" id="foot">
            <p>Copyright &copy; {new Date().getFullYear()} Proyecto Final PWA - UTN. Todos los derechos reservados.</p>
        </footer>
    )
}

export default Footer