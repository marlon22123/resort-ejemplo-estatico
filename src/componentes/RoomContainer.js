import React from 'react'
import RoomList from './RoomList'
import RoomFilter from './RoomFilter'
import Loading from './Loading'
import { WithRoomConsumer} from '../Context'

function RoomContainer({context}) {
    const {loading, roomsOrdenados,rooms}=context;
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            <RoomFilter rooms={rooms}></RoomFilter>
            <RoomList rooms={roomsOrdenados}></RoomList>
        </div>
    )
}

export default WithRoomConsumer(RoomContainer)
