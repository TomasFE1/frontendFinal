import React from 'react'


function Galery() {
return (
    <>
    <div className='galeria-titulo'><h4>Galeria</h4></div>
    <div className="grid-container">
        <div className="grid-item" style={{backgroundImage: 'url(../public/1.jpg)'}}></div>
        <div className="grid-item wide" style={{backgroundImage: 'url(../public/2.jpg)'}}></div>
        <div className="grid-item" style={{backgroundImage: 'url(../public/3.jpg)'}}></div>
        <div className="grid-item tall" style={{backgroundImage: 'url(../public/4.jpg)'}}></div>
        <div className="grid-item" style={{backgroundImage: 'url(../public/5.jpg)'}}></div>
        <div className="grid-item wide" style={{backgroundImage: 'url(../public/6.jpg)'}}></div>
        <div className="grid-item" style={{backgroundImage: 'url(../public/7.jpg)'}}></div>

    </div>
    </>
)
}

export default Galery