import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <div style={{display:'flex', alignItems:'center'}}>
            <h1>Movies App</h1>
            <h2 style={{marginLeft:'1rem'}}>Favourites</h2>
        </div>
    )
  }
}
