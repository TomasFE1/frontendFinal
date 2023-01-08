import React from 'react'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'
import img7 from '../assets/7.jpg'


function Galery() {
return (
    <>
    <div className='galeria-titulo'><h4>Galeria</h4></div>
    <div className="grid-container">
        <div className="grid-item" style={{backgroundImage: `url(${img1})`}}></div>
        <div className="grid-item wide" style={{backgroundImage: `url(${img2})`}}></div>
        <div className="grid-item" style={{backgroundImage: `url(${img3})`}}></div>
        <div className="grid-item tall" style={{backgroundImage: `url(${img4})`}}></div>
        <div className="grid-item" style={{backgroundImage: `url(${img5})`}}></div>
        <div className="grid-item wide" style={{backgroundImage: `url(${img6})`}}></div>
        <div className="grid-item" style={{backgroundImage: `url(${img7})`}}></div>

    </div>
    </>
)
}

export default Galery