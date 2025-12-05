import { FistBar, HealthBar, MoneyBar } from './buttons/Bars';
import { OpponentLayout } from './OpponentLayout';
import { Pile } from './cards/Pile';
import { PlayerHand } from './PlayerHand';
import { UnoButton, CounterButton, MarketButton } from './buttons/Buttons';
import { Boutique } from './Boutique';
import './playground.css';
import { useState } from "react";

const productsTemp = [
    {
        key : crypto.randomUUID(),
        name: "skin chat",
        url: "cards/macron.png",
        price: 934
    },
    {
        key : crypto.randomUUID(),
        name: "bibite",
        url: "cards/macron.png",
        price: 934
    },
    {
        key : crypto.randomUUID(),
        name: "jsp",
        url: "cards/macron.png",
        price: 934
    },
    {
        key : crypto.randomUUID(),
        name: "skin chat",
        url: "cards/macron.png",
        price: 934
    },
    {
        key : crypto.randomUUID(),
        name: "bibite",
        url: "cards/macron.png",
        price: 934
    },
    {
        key : crypto.randomUUID(),
        name: "jsp",
        url: "cards/macron.png",
        price: 934
    },
    {
        key : crypto.randomUUID(),
        name: "skin chat",
        url: "cards/macron.png",
        price: 934
    },
    {
        key : crypto.randomUUID(),
        name: "bibite",
        url: "cards/macron.png",
        price: 934
    },
    {
        key : crypto.randomUUID(),
        name: "jsp",
        url: "cards/macron.png",
        price: 934
    },
    {
        key : crypto.randomUUID(),
        name: "skin chat",
        url: "cards/macron.png",
        price: 934
    },
    {
        key : crypto.randomUUID(),
        name: "bibite",
        url: "cards/macron.png",
        price: 934
    },
    {
        key : crypto.randomUUID(),
        name: "jsp",
        url: "cards/macron.png",
        price: 934
    },
    {
        key : crypto.randomUUID(),
        name: "skin chat",
        url: "cards/macron.png",
        price: 934
    },
    {
        key : crypto.randomUUID(),
        name: "bibite",
        url: "cards/macron.png",
        price: 934
    }
];


export function Playground({ gameId, hand, opponents }) {

  const [market, setMarket] = useState(false);
  const [coins, setCoins] = useState(3500);

  return (
    <div className="playground">
      {market && <Boutique products={productsTemp} coins={coins} onClose={() => setMarket(false)} setCoins={setCoins}/>}
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