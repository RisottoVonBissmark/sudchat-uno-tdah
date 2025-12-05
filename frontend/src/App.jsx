import { useState } from 'react'
import './App.css'
import {CardContainer} from './affichageCarteJoueurAnaelle/CarteJoueur'
import {Boutique} from './affichageCarteJoueurAnaelle/Boutique'
import {HealthBar} from './affichageCarteJoueurAnaelle/stats/healthBar'
import {FistBar} from './affichageCarteJoueurAnaelle/stats/FistBar'
import {MoneyBar} from './affichageCarteJoueurAnaelle/stats/MoneyBar'

function App() {
  return (
    <>
    <HealthBar width={240} value={50} maxValue={50}/>
    <FistBar width={240} value={50} maxValue={50}/>
    <MoneyBar value={300}/>
     {/*<Boutique products={productsTemp} coins="3000" onClose={closeBoutique}/>*/}
      {/* <CardContainer width='200px' size="10" cards={listCardsTemp}/>*/}
    </>
  )
}

export default App;
