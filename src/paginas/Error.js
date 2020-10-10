import React from 'react'
import Banner from '../componentes/Banner';
import Hero from '../componentes/Hero';
import {Link} from 'react-router-dom';

export default function Error() {
    return (
        
<Hero>
    <Banner title='404' subtitle='Pagina no encontrada'>
        <Link to='/' className='btn-primary'>
            Volver a Home
        </Link>
    </Banner>
</Hero>
        
    )
}
