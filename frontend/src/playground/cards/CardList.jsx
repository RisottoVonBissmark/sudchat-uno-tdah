import { Card } from "./Card";

export function CardList({ cards }) {
  return (
    <div className="card-list">
      <div className="cards-container">
        {cards.map((elem, index) => (
          <Card key={index} type={elem.type} />
        ))}
      </div>
    </div>
  )
}