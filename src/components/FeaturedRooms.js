import React, { Component } from 'react'
import { RoomContext, RoomConsumer } from '../context'
import Loading from './Loading'
import Room from '../components/Room'
export default class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {
       const { featuredRooms : rooms } = this.context
       console.log(rooms)
        return (
            <div>
               Featured Rooms 
                <Room />
               <Loading />
            </div>
        )
    }
}
