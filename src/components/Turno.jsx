import React, { useState } from 'react';
import axios from 'axios'; // importamos axios para enviar la solicitud HTTP
import Header from './Header';

//import { Link } from 'react-router-dom';

function Turno() {
    // Creamos el state para almacenar los datos del formulario
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        fecha: '',
        hora: '',
    });

    // Creamos una función para actualizar el state cada vez que se escribe en un campo del formulario
    const handleChange = (event) => {
        setFormData({
            ...formData, // spread operator para copiar todos los valores del state en el nuevo objeto
            [event.target.name]: event.target.value, // actualizamos el valor del campo específico
        });
    };

    // Creamos una función para manejar el submit del formulario
    const handleSubmit = (event) => {
        // evitamos que la página se recargue al enviar el formulario


        // Enviamos la solicitud HTTP a nuestra API utilizando axios
        axios.post('http://localhost:8080/addTurno', formData)
            .then((response) => {
                console.log(response.data); // si la solicitud tuvo éxito, imprimimos la respuesta en la consola
            })
            .catch((error) => {
                console.error(error); // si hubo un error, lo imprimimos en la consola
            });
    };

    return (
        <>
            <Header />
            <div className="container">
                <hr />
                <div className="text-center m-4">
                    <h1>Agenda tu turno</h1>
                </div>
                <hr />
                <div className="formulario-turno">
                    <form  onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="nombre" className="form-label">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nombre"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="telefono" className="form-label">
                                    Teléfono
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="telefono"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="fecha" className="form-label">
                                    Fecha
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="fecha"
                                    name="fecha"
                                    value={formData.fecha}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="hora" className="form-label">
                                    Hora
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="hora"
                                    name="hora"
                                    value={formData.hora}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-primary mt-3" type="submit">
                            Guardar Turno
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Turno