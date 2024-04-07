import React, { Component } from 'react'

export default class RegularComponent extends Component {
    constructor(){
        super()
        this.state={
            name:"Rahul"
        }
    }
  render() {
    console.log("Regular Component Rendering.....")
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={()=>this.setState({name:"Rahul"})}>REGULAR COMPONENT</button>
      </div>
    )
  }
}
