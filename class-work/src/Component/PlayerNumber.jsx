import React, { Component } from 'react'
 
class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PlayerNumber: this.props.number
        }
    }
    addOne=()=>{
        let last= this.state.number1;
         
    }

    render() {
        return (

            <div>
                
        <h1> this Player# to touch it last is {this.state.number1}</h1>
                <button onClick= {this.addOne}>last</button>
            </div>

        )
        console.log(this.addOne)
    }
}


export default Player