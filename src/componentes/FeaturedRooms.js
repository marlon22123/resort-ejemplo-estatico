import React, { Component } from 'react'
import {RoomContext} from '../Context';
import Loading from './Loading';
import Title from './Title';
import Room from './Room';

export default class FeaturedRooms extends Component {
    static contextType=RoomContext;
    render() {
        let {loading, roomsCaracteristicas}=this.context;
        const piezas =roomsCaracteristicas.map((room)=>{
            return <Room id={room.id} room={room}></Room>
        })
        return (
            <section className='featured-rooms'>
                <Title title='Piezas destacadas'></Title>
                <div className='featured-rooms-center'>
                    {loading? <Loading></Loading>:piezas}
                </div>
            </section>
        )
    }
}
