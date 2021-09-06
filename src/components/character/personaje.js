import React from 'react';
import './personaje.css'

const Personaje = ({personaje}) => {
    return (
        <div className="divpersonaje">
            <img className="imagen_personaje" src={personaje.img} alt="logo" />
            <div className="informacion_character">
                
                <h2> {personaje.name} </h2>
                <span> Alias: {personaje.apodo} </span>
                <p className="cumpleaños">Cumpleaños: {(personaje.cumpleaños) ? <span>{personaje.cumpleaños}</span> : <span>No se sabe</span>} </p>
                <p>Ocupacion: {(personaje.ocupaciones) ? <span>{personaje.ocupaciones}</span> : <span>No se sabe</span>}</p>
            </div>
        </div>
    )
}

export default Personaje
