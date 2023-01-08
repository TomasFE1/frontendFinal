import React from 'react'
import img1 from '../assets/1.jpg'


function Galery() {
return (
    <>
    <div className='galeria-titulo'><h4>Galeria</h4></div>
    <div className="grid-container">
        <div className="grid-item" style={{backgroundImage: {img1}}}></div>
        <div className="grid-item wide" style={{backgroundImage: 'url(../assets/2.jpg)'}}></div>
        <div className="grid-item" style={{backgroundImage: 'url(../assets/3.jpg)'}}></div>
        <div className="grid-item tall" style={{backgroundImage: 'url(../assets/4.jpg)'}}></div>
        <div className="grid-item" style={{backgroundImage: 'url(../assets/5.jpg)'}}></div>
        <div className="grid-item wide" style={{backgroundImage: 'url(../assets/6.jpg)'}}></div>
        <div className="grid-item" style={{backgroundImage: 'url(../assets/7.jpg)'}}></div>

    </div>
    </>
)
}

export default Galery