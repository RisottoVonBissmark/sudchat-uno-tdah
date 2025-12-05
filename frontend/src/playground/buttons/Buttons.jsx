export function CounterButton() {
  return (
    <button onClick={() => console.log('CONTRE-UNO!')} className="uno-button say-counter">CONTRE-UNO!</button>
  );
}


export function MarketButton({ onClick }) {
  return (
    <button id="market-button" onClick={(e) => onClick()} ><img src="icons/market.svg"/></button>
  );
}

export function UnoButton() {
  return (
    <button onClick={() => console.log('UNO!')} className="uno-button say-uno">UNO!</button>
  );
}