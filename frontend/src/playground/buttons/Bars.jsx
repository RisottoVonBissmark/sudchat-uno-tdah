import React from 'react';
import { useState } from 'react'
import "./bar.css";

export class FistBar extends React.Component{

    constructor(props) {
        super(props); // Obligatoire
        // Ici, tu peux définir des attributs d'instance
        this.state = {
            health: props.value,
            maxHealth: props.maxValue
        };

    }

    render(){
        var barLength = 100 * this.state.health / this.state.maxHealth;
        return (
        <div id="fist-bar" className="bar">
            <img className="bar-icon" src="icons/fist.png"/>
            <div className="bar-container">
                <div className="bar-progress" style={{ width: `${barLength}%` }}></div>
            </div>
            <span className="bar-value">{this.state.health}/{this.state.maxHealth}</span>
        </div>
        )
    }
}

export class HealthBar extends React.Component{

    constructor(props) {
        super(props); // Obligatoire
        // Ici, tu peux définir des attributs d'instance
        this.state = {
            health: props.value,
            maxHealth: props.maxValue
        };

    }

    render(){
        var barLength = 100 * this.state.health / this.state.maxHealth;
        return (
        <div className="bar">
            <img className="bar-icon" src="icons/heart.png"/>
            <div className="bar-container" style={{width: "100%"}}>
                <div className="bar-progress" style={{backgroundColor: "#FF0000", width: `${barLength}%`}}></div>
            </div>
            <span className="bar-value">{this.state.health}/{this.state.maxHealth}</span>
        </div>
        )
    }
}

export class MoneyBar extends React.Component{

    constructor(props) {
        super(props); // Obligatoire
        // Ici, tu peux définir des attributs d'instance
        this.state = {
            coins: props.value
        };

    }

    render(){
        return (
        <div id="money-bar-container">
            <img src="icons/coin.png"/>
            <span id="coins">{this.state.coins}</span>
        </div>
        )
    }
}