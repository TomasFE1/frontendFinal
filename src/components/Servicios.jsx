import React from 'react'
import Header from './Header'

function Servicios() {
    return (
        <>
        <Header/>
        <div className="container tabla">
        <table className="table">
            <caption className="text-center"><b>Todos nuestros servicios</b></caption>
            <thead>
                <tr>
                    <th>Servicio</th>
                    <th>Precio</th>                
                </tr>
            </thead>
            <tbody>
            <tr>
                    <td>Corte niño</td>
                    <td>$700</td>                
                </tr>
                <tr>
                    <td>Corte</td>
                    <td>$800</td>                
                </tr>
                <tr>
                    <td>Corte + navaja/shaver</td>
                    <td>$1200</td>               
                </tr>
                <tr>
                    <td>Barba</td>
                    <td>$500</td>                   
                </tr>
                <tr>
                    <td>Corte + barba </td>
                    <td>$900</td>
                </tr>
                <tr>
                    <td>Afeitado Tradicional</td>
                    <td>$1500</td>                   
                </tr>
            </tbody>
        </table>            
    </div>
    </>
    )
}

export default Servicios