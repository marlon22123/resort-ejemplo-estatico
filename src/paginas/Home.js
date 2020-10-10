import React from 'react'
import Banner from '../componentes/Banner';
import Hero from '../componentes/Hero';
import {Link} from 'react-router-dom';
import Services from '../componentes/Services';
import FeaturedRooms from '../componentes/FeaturedRooms';

export default function Home() {
    return (
        <>
            <Hero>
                <Banner 
                title='Piezas de Lujo' subtitle='Piezas lujosas desde $199'
                >
                    <Link to='/rooms' className='btn-primary'>
                        Nuestras Piezas
                    </Link>
                </Banner>
            </Hero>
            <Services/>
            <FeaturedRooms></FeaturedRooms>
        </>
    )
}
