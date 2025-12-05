import React from 'react';
import { useState } from 'react'
import "./bar.css";


export class FistBar extends React.Component{

    constructor(props) {
        super(props); // Obligatoire
        // Ici, tu peux définir des attributs d'instance
        this.state = {
            width: props.width,
            health: props.value,
            maxHealth: props.maxValue
        };

    }

    render(){
        var barLength = this.state.width * ( this.state.health / this.state.maxHealth);
        return (
        <div id="bar-container">
            <img src="public/fist.png"/>
            <div id="bar-container" style={{width: `${this.state.width}px`}}>
                <div id="bar-value" style={{backgroundColor: "#FFCD70", width: barLength}}></div>
            </div>
            <span id="bar-number">{this.state.health}/{this.state.maxHealth}</span>
        </div>
        )
    }
}