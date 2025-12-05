import { useState } from 'react'
import './App.css'
import {CardContainer} from './affichageCarteJoueurAnaelle/CarteJoueur'
import { Routes, Route } from "react-router-dom";
import LoginPage from './Login';
import WaitingRoom from './pages/WaitingRoom/WaitingRoom';
import Playground from './playground/Playground';

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



  
  return (
    // <>
    //   <CardContainer width='200px' size="10" cards={listCardsTemp}/>
    // </>
    <div className='flex flex-col min-h-screen '>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/waitingRoom" element={<WaitingRoom players={["Miku","Teto","Neru"]} /> } />
      <Route path="/game" element={<Playground />} />
    </Routes>
  </div>
  )
}

export default App;
