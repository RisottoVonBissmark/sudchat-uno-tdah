import React from 'react';
import "./CarteJoueur.css";


export class CardContainer extends React.Component{

    constructor(props) {
        super(props); // Obligatoire
        // Ici, tu peux définir des attributs d'instance
        this.state = {
            width: props.width,
            cards: props.cards,
            size: props.size
        };
    }

    render(){
        return <div id="cards-container">
            <div id="cards-list" style={{width: this.state.width}}>
                {this.state.cards.map((e) => {return <div key={e.key} className="card-wrapper"> <img className="card" height={this.state.size * 25} src={e.url}/></div>})}
            </div>
            <div id="cards-count">{this.state.cards.length}</div>
        </div>
    }
}