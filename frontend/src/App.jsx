import { useState } from 'react'
import './App.css'
import {CardContainer} from './affichageCarteJoueurAnaelle/CarteJoueur'

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
  const [count, setCount] = useState(0);
  
  return (
    <>
      <CardContainer width='200px' size="10" cards={listCardsTemp}/>
    </>
  )
}

export default App;
