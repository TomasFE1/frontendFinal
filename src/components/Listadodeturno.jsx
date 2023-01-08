import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import { Link } from 'react-router-dom';




function Listadodeturno() {
    const [turnos, setTurnos] = useState([]);
    

    useEffect(() => {
        // Realizamos una llamada a la API utilizando Axios
        axios.get('http://localhost:8080/listadoturno')
            .then(res => setTurnos(res.data))
            .catch(err => console.error(err))
    }, []) // El segundo argumento del useEffect indica que solo se ejecutará la primera vez



    // Realizamos una llamada a la API utilizando Axios

    const deleteTurno = async (id) => {
        try {
            await axios.post(`http://localhost:8080/delete/${id}`)
                .then(res => {
                    setTurnos(turnos.filter(turno => !turno._id.equals(id)))
                    
                })
                
        } catch (error) {
            console.error(error);
        }
        window.location.reload()
    }


    return (
        <>
            <Header />
            
            <div className="container tabla">
                
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Telefono</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Borrar turno</th>
                        </tr>
                    </thead>
                    <tbody>
                        {turnos.map(turno => (
                            <tr key={turno._id}>
                                <td>{turno.nombre}</td>
                                <td>{turno.telefono}</td>
                                <td>{turno.fecha}</td>
                                <td>{turno.hora}</td>
                                <td>
                                    <Link to={"#"} onClick={() => deleteTurno(turno._id)} className="btn btn-danger">Borrar</Link>
                                
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="container-button">
    <Link to={"/turno"}><button className="boton-tabla">Pedí tu turno!!</button></Link> 
</div>
        </>
    )
}

export default Listadodeturno