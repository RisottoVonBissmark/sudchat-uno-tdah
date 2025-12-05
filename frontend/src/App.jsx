import { useState } from 'react'
import './App.css'
import {CardContainer} from './affichageCarteJoueurAnaelle/CarteJoueur'
import {Boutique} from './affichageCarteJoueurAnaelle/Boutique'

function App() {
  const listCardsTemp = [
        {
            key : crypto.randomUUID(),
            name: "0red",
            url: "public/cartes/0red.svg"
        },
        {
            key : crypto.randomUUID(),
            name: "0red",
            url: "public/cartes/0red.svg"
        },
        {
            key : crypto.randomUUID(),
            name: "0red",
            url: "public/cartes/0red.svg"
        }
    ];

  const productsTemp = [
        {
            key : crypto.randomUUID(),
            name: "skin chat",
            url: "public/cartes/0red.svg",
            price: 934
        },
        {
            key : crypto.randomUUID(),
            name: "bibite",
            url: "public/cartes/0red.svg",
            price: 934
        },
        {
            key : crypto.randomUUID(),
            name: "jsp",
            url: "public/cartes/0red.svg",
            price: 934
        },
        {
            key : crypto.randomUUID(),
            name: "skin chat",
            url: "public/cartes/0red.svg",
            price: 934
        },
        {
            key : crypto.randomUUID(),
            name: "bibite",
            url: "public/cartes/0red.svg",
            price: 934
        },
        {
            key : crypto.randomUUID(),
            name: "jsp",
            url: "public/cartes/0red.svg",
            price: 934
        },
        {
            key : crypto.randomUUID(),
            name: "skin chat",
            url: "public/cartes/0red.svg",
            price: 934
        },
        {
            key : crypto.randomUUID(),
            name: "bibite",
            url: "public/cartes/0red.svg",
            price: 934
        },
        {
            key : crypto.randomUUID(),
            name: "jsp",
            url: "public/cartes/0red.svg",
            price: 934
        },
        {
            key : crypto.randomUUID(),
            name: "skin chat",
            url: "public/cartes/0red.svg",
            price: 934
        },
        {
            key : crypto.randomUUID(),
            name: "bibite",
            url: "public/cartes/0red.svg",
            price: 934
        },
        {
            key : crypto.randomUUID(),
            name: "jsp",
            url: "public/cartes/0red.svg",
            price: 934
        },
        {
            key : crypto.randomUUID(),
            name: "skin chat",
            url: "public/cartes/0red.svg",
            price: 934
        },
        {
            key : crypto.randomUUID(),
            name: "bibite",
            url: "public/cartes/0red.svg",
            price: 934
        }
    ];
  const [boutique, setBoutique] = useState(true);

  function closeBoutique(){
    setBoutique(false);
  }
  
  return (
    <>
    {boutique && <Boutique products={productsTemp} coins="3000" onClose={closeBoutique}/>}
      
      {/* <CardContainer width='200px' size="10" cards={listCardsTemp}/>*/}
    </>
  )
}

export default App;
