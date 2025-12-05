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
        <div id="bar-container">
            <img src="icons/fist.png"/>
            <div id="bar-container" style={{width: "100%"}}>
                <div id="bar-value" style={{backgroundColor: "#FFCD70", width: `${barLength}%`}}></div>
            </div>
            <span id="bar-number">{this.state.health}/{this.state.maxHealth}</span>
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
        <div id="bar-container">
            <img src="icons/heart.png"/>
            <div id="bar-container" style={{width: "100%"}}>
                <div id="bar-value" style={{backgroundColor: "#FF0000", width: `${barLength}%`}}></div>
            </div>
            <span id="bar-number">{this.state.health}/{this.state.maxHealth}</span>
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