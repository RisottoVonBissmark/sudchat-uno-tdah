import { Card } from "./Card";

export function Pile({ topCard }) {
    return (
        <div className="pile">
            {topCard && <Card type={topCard.type} />}
        </div>
    );
}