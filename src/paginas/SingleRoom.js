import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {RoomContext} from '../Context';
import ImagenxDefecto from '../imagenes/room-1.jpeg';
import Banner from '../componentes/Banner';
import StyledHero from '../componentes/StyledHero';

export default class SingleRoom extends Component {
    constructor(props){
         super(props);
        this.state={
            slug: this.props.match.params.id,
            ImagenxDefecto
        }
    }
    static contextType=RoomContext;
    render() {
        const {getRoom}=this.context;
        const room=getRoom(this.state.slug);
        if(!room){  
        return (
            <div className='error'>
                <h3>No existe la Pieza</h3>
                <Link to='/rooms' className='btn-primary'>
                    Volver a Pieza
                </Link>
            </div>
        )
      }
    
       const [mainImg, ...defaultImg]= room.images;
        console.log(defaultImg);
        return(
            <>
                <StyledHero img={mainImg || ImagenxDefecto}>
                    <Banner title={`Pieza ${room.name}`}>
                         <Link to='/rooms' className='btn-primary'>
                             Volver a Piezas
                         </Link>
                    </Banner>
                </StyledHero>
                <section className='single-room'>
                    <div className='single-room-images'>
                        {
                            defaultImg.map((item,index)=>{
                                return <img key={index} src={item} alt={room.name}/>
                            })
                        }
                    </div>
                    <div className='single-room-info'>
                        <article className='desc'>
                            <h3>Detalles</h3>
                            <p>{room.description} </p>
                        </article>
                        <article className='info'>
                            <h3>Informacion</h3>
                            <h6>Precio: ${room.price} </h6>
                            <h6>Tamaño: {room.size}  M2 </h6>
                            <h6>Capcidad Maxima:
                                {room.capacity>1?`${room.capacity} personas`:`${room.capacity}persona`}
                            </h6>
                            <h6>
                                Mascota:
                                {room.pets? 'se permite mascotas':'nose permite mascotas'}
                            </h6>
                            <h6>
                                {room.breakfast && 'desayuno gratis incluido'}
                            </h6>
                        </article>
                    </div>
                    <section className="room-extras">
                        <h6>Extra</h6>
                        <ul className="extras">
                            {room.extras.map((item,index)=>{
                                return <li key={index}>- {item} </li>
                            })}
                        </ul>
                    </section>
                </section>
            </>
        )
 }
}
