import React from 'react'
import Banner from '../componentes/Banner';
import Hero from '../componentes/Hero';
import {Link} from 'react-router-dom';
import RoomContainer from '../componentes/RoomContainer'

export const Rooms = () => {
    return (
        <>
        <Hero hero='roomsHero'>
            <Banner title='Nuestras Piezas'>
                <Link to='/' className='btn-primary'>
                    Volver a Home
                </Link>
            </Banner>
        </Hero>
        <RoomContainer></RoomContainer>
        </>
    )
}
export default Rooms;
