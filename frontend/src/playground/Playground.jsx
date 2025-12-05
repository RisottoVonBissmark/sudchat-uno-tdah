import { UnoButton } from "./UnoButton";
import { CounterButton } from "./CounterButton";
import { OpponentLayout } from "./OpponentLayout";
import { PlayerHand } from "./PlayerHand";
import './playground.css';

export function Playground({ hand, opponents }) {
  return (
    <div className="playground">
      <UnoButton />
      <CounterButton />
      <OpponentLayout opponents={opponents} />
      <PlayerHand cards={hand} />
    </div>
  )
}