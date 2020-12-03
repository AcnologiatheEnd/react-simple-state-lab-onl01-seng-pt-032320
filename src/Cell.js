import React, { Component } from 'react';

class Cell extends Component {
    constructor(props){
        super()
        this.state = {
            color: props.value
        }
    }

    updateHexValue = (value) => {
        const updateColor = value
        this.setState({
            color: updateColor
        })
    }

    render(){
        return(
            <div className='cell'
                 style={{backgroundColor: this.state.color}}
                 onClick={() => {this.updateHexValue('#333')}}>
            </div>
        )
    }
    
}

export default Cell;