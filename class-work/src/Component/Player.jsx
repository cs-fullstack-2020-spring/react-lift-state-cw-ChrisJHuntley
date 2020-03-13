import React, { Component } from 'react'
import PlayerNumber from './Component/PlayerNumber'

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PlayerNumber: this.props.number
        }
    }
    addOne=()=>{
        let last= this.state.number1;
        this.setState({
            number1: last
        })
    }

    render() {
        return (

            <div>
                
        <h1> this Player is {this.state.number1}</h1>
                <button onClick= {this.addOne}>last</button>
            </div>

        )
    }
}


export default Player