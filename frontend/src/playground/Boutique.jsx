import React from 'react';
import { useState } from 'react'
import "./Boutique.css";


export class Boutique extends React.Component{

    constructor(props) {
        super(props);
    }

    purchase(product){
        //substract la thune sur le back
        if (this.props.coins - product.price >= 0){
            this.props.setCoins(this.props.coins - product.price);
        }else{
            
        }
        
    }

    render(){
        return <div id="boutique-popup">
            <div id="boutique-actionBar"><button onClick={(e) => this.props.onClose()}><img width="25px" src="icons/cross.svg"/></button></div>
            <div id='boutique-content'>
                <div id="boutique-solde"><span>{this.props.coins}</span><img src="icons/coin.png"/></div>
                <div id='boutique-content_'>
                    
                    {this.props.products.map((product) => {return <div key={product.key} className="boutique-product" onClick={(e) => this.purchase(product)}>
                        <img src={product.url}></img>
                        <span className="product-name">{product.name}</span>
                        <div className="product-price"><span>{product.price}</span><img src="icons/coin.png"/></div>
                        </div>})}
                </div>
            </div>
        </div>
    }
}