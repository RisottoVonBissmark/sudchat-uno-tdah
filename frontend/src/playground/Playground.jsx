import { UnoButton } from "./UnoButton";
import { CounterButton } from "./CounterButton";
import { OpponentLayout } from "./OpponentLayout";
import { Pile } from "./cards/Pile";
import { PlayerHand } from "./PlayerHand";
import './playground.css';


export function Playground({ gameId, hand, opponents }) {
  return (
    <div className="playground">
      <UnoButton />
      <CounterButton />
      <OpponentLayout opponents={opponents} />
      <Pile topCard={{ type: "normal" }} />
      <PlayerHand cards={hand} />
    </div>
  )
}