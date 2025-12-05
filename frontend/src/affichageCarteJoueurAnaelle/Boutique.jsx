import React from 'react';
import "./Boutique.css";


export class Boutique extends React.Component{

    constructor(props) {
        super(props); // Obligatoire
        // Ici, tu peux définir des attributs d'instance
        this.state = {
            products: props.products
        };
    }

    render(){
        return <div id="boutique-popup">
            <div id="boutique-actionBar"><img class="public/svg/close.svg"/></div>
        </div>
    }
}