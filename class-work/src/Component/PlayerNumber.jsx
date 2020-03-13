import React, { Component } from 'react'
 
class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // object properties should be lower case
            PlayerNumber: this.props.number
        }
    }
    addOne=()=>{
        // you should be using this.setState to update the state in this event handler method
        let last= this.state.number1;
         
    }

    render() {
        return (

            <div>
                
        <h1> this Player# to touch it last is {this.state.number1}</h1>
                <button onClick= {this.addOne}>last</button>
            </div>

        )
        // you can't do anything after a return
        console.log(this.addOne)
    }
}


export default Player