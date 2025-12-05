import { CardList } from "./cards/CardList";

export function Opponent({ name, cardsCount, position }) {
    const translate = `${position[0]}px ${position[1]}px`;
    const cards = Array(cardsCount).fill({ type: "hidden" });
    return (
        <div className="opponent" style={{ translate: translate }}>
            <div className="opponent-name">{name}</div>
            <CardList cards={cards} />
            <div className="cards-count">{cards.length}</div>
        </div>
    )
}