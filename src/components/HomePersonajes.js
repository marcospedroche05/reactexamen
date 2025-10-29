import React, { Component } from 'react'
import House from "../assets/images/house.jpg"

export default class HomePersonajes extends Component {
  render() {
    return (
      <div>
        <h1>Home personajes</h1>
        <img src={House} width={400}/>
      </div>
    )
  }
}
