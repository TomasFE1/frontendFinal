import React from 'react'
import {Link} from 'react-router-dom'
import Galery from './Galery'
import Header from './Header';
import Footer from './Footer';

function Home() {

    return <main>
        <Header />
    <section className="turnos">
    <h1>Katana Barber Shop</h1>
    <p><strong><i>Barberia / peluqueria</i></strong> en Santa Fe Capital.</p>
    <p>Abierto hasta las 21:00 hs.</p> <br/><br/>
</section>

<div className="container-button">
    <Link to={"/turno"}><button className="boton">Pedir Turno</button></Link> 
</div>


<Galery />
<Footer />
</main>


}

export default Home