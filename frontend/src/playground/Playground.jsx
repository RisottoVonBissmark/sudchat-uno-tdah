import { UnoButton } from "./UnoButton";
import { CounterButton } from "./CounterButton";
import { OpponentLayout } from "./OpponentLayout";
import { Pile } from "./cards/Pile";
import { PlayerHand } from "./PlayerHand";
import { MarketButton } from "./MarketButton";
import {HealthBar} from '../affichageCarteJoueurAnaelle/stats/healthBar'
import {FistBar} from '../affichageCarteJoueurAnaelle/stats/FistBar'
import {MoneyBar} from '../affichageCarteJoueurAnaelle/stats/MoneyBar'
import './playground.css';
import { useState } from "react";
import { Boutique } from "./Boutique";

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


export function Playground({ gameId, hand, opponents }) {

  const [market, setMarket] = useState(false);
  const [coins, setCoins] = useState(3500);

  return (
    <div className="playground">
      {market && <Boutique products={productsTemp} coins={coins} onClose={() => setMarket(false)}/>}
      <UnoButton />
      <CounterButton />
      <MarketButton onClick={() => setMarket(true)}/>
      <div id="bars-container">
        <HealthBar value={40} maxValue={50}/>
        <FistBar width={200} value={50} maxValue={50}/>
        <MoneyBar value={coins}/>
      </div>
      <OpponentLayout opponents={opponents} />
      <Pile topCard={{ type: "normal" }} />
      <PlayerHand cards={hand} />
    </div>
  )
}