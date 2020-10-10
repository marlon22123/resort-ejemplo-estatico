import React from 'react'
import gifLoading from '../imagenes/gif/loading-arrow.gif';
export default function Loading() {
    return (
        <div className='Loading'>
            <h4>Cargando los datos de las piezas...</h4>
            <img src={gifLoading} alt='cargando'></img>
        </div>
    )
}
