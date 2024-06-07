import React, { Component } from 'react'

 class Propsclass extends Component {
  render() {
    return (
      <div>
        <h1> You Order is {this.props.mobile} </h1>
        <p>Contact Me {this.props.no}</p>
      </div>   )
  }
}

export default Propsclass 