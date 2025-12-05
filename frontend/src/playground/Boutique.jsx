import React from 'react';
import { useState } from 'react'
import "./Boutique.css";


export class Boutique extends React.Component{

    constructor(props) {
        super(props); // Obligatoire
        // Ici, tu peux définir des attributs d'instance
        this.state = {
            products: props.products,
            coins: props.coins,
            onClose: props.onClose
        };
    }

    purchase(product){
        //substract la thune sur le back
        if (this.state.coins - product.price >= 0){
            this.setState(prevState => ({
                coins: prevState.coins - product.price
            }));

            this.setState(prevState => ({
                products: prevState.products.filter(p => p !== product)
            }));
        }else{
            
        }
        
    }

    render(){
        return <div id="boutique-popup">
            <div id="boutique-actionBar"><button onClick={(e) => this.state.onClose()}><img width="25px" src="public/svg/cross.svg"/></button></div>
            <div id='boutique-content'>
                <div id="boutique-solde"><span>{this.state.coins}</span><img src="public/svg/coin.png"/></div>
                <div id='boutique-content_'>
                    
                    {this.state.products.map((product) => {return <div key={product.key} className="boutique-product" onClick={(e) => this.purchase(product)}>
                        <img src={product.url}></img>
                        <span className="product-name">{product.name}</span>
                        <div className="product-price"><span>{product.price}</span><img src="public/svg/coin.png"/></div>
                        </div>})}
                </div>
            </div>
        </div>
    }
}