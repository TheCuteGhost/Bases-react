import React, {Fragment} from 'react'

export const MiComponente = () => {
    let nombre = "Víctor";
    let web = "thecuteghost.com";

    let usuario = {
        nombre: "Cute",
        apellidos: "Ghost",
        web: "thecuteghost.com"
    }
  return (
        <div className='MiComponente'>
            <hr/>
            <h2>Componente creado </h2>
            <h3>Datos del usuario:</h3>
            <ul>
                <li>Nombre: <strong>{usuario.nombre}</strong></li>
                <li>Web: <strong>{usuario.web}</strong></li>
            </ul>
            <p>Este es mi primer componente	</p>
            <ul>
                <li>
                    React
                </li>
                <li>
                    Angular
                </li>
                <li>
                    Vue
                </li>
            </ul>
        </div>
    )
}

export default MiComponente;