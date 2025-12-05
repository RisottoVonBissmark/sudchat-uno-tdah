import React from 'react';
import { useState } from 'react'
import "./bar.css";


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
            <img src="public/svg/coin.png"/>
            <span id="coins">{this.state.coins}</span>
        </div>
        )
    }
}