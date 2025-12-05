import { Card } from "./cards/Card";
import { CardList } from "./cards/CardList";

export function PlayerHand({ cards }) {
    return (
        <div className="player-hand">
            <CardList cards={cards} />
        </div>
    );
}