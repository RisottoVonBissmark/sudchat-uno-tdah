import { Opponent } from "./Opponent";

function position(index, opponentCount) {
  const angle = (index / (opponentCount-1)) * Math.PI;
  const radius = 10;
  const x = 14 * -Math.cos(angle);
  const y = 10 * -Math.sin(angle);
  return [x, y];
}

export function OpponentLayout({ opponents }) {
  return (
    <div className="opponent-layout">
      {opponents.map((opponent, index) => (
        <Opponent
          key={index}
          name={opponent.name}
          cardsCount={opponent.cardsCount}
          position={position(index, opponents.length)}
        />
      ))}
    </div>
  )
}