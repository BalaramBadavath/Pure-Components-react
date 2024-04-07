import React, {PureComponent } from 'react'

export default class Pure extends PureComponent {
    constructor() {
      super()
          this.state = {
           name:"Rahul"
      }
    }
  render() {
    console.log("PURE COMPONENT RENDERING.....")
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={()=>this.setState({name:"Rahul"})}>PURE COMPONENT</button>
      </div>
    )
  }
}
