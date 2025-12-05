import { UnoButton } from "./UnoButton";
import { CounterButton } from "./CounterButton";
import { OpponentLayout } from "./OpponentLayout";
import { PlayerHand } from "./PlayerHand";
import './playground.css';

const tempPlayerList = [
  {
    name: "Anaelle",
    id: crypto.randomUUID(),
    cardsCount: 5
  },
  {
    name: "Anaelle 2",
    id: crypto.randomUUID(),
    cardsCount: 10
  },
  {
    name: "Anaelle 3",
    id: crypto.randomUUID(),
    cardsCount: 15
  }
];

const tempHand = [
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
];

export default function Playground({ hand = tempHand, opponents = tempPlayerList }) {
  return (
    <div className="playground">
      <UnoButton />
      <CounterButton />
      <OpponentLayout opponents={opponents} />
      <PlayerHand cards={hand} />
    </div>
  )
}