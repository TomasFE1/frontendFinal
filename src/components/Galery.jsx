import React from 'react'


function Galery() {
return (
    <>
    <div className='galeria-titulo'><h4>Galeria</h4></div>
    <div className="grid-container">
        <div className="grid-item" style={{backgroundImage: 'url(src/assets/1.jpg)'}}></div>
        <div className="grid-item wide" style={{backgroundImage: 'url(src/assets/2.jpg)'}}></div>
        <div className="grid-item" style={{backgroundImage: 'url(src/assets/3.jpg)'}}></div>
        <div className="grid-item tall" style={{backgroundImage: 'url(src/assets/4.jpg)'}}></div>
        <div className="grid-item" style={{backgroundImage: 'url(src/assets/5.jpg)'}}></div>
        <div className="grid-item wide" style={{backgroundImage: 'url(src/assets/6.jpg)'}}></div>
        <div className="grid-item" style={{backgroundImage: 'url(src/assets/7.jpg)'}}></div>

    </div>
    </>
)
}

export default Galery