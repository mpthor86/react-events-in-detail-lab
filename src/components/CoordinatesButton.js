// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component{
    showCoordinates = (e) => {
        const coordinateArray = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(coordinateArray)
    }
    render(){

        return (
            <button onClick={this.showCoordinates}>Button</button>
        )
    }
}