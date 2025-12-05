

export function MarketButton({ onClick }) {
  console.log(onClick);
  return (
    <button id="market-button" onClick={(e) => onClick()} ><img src="/public/svg/market.svg"/></button>
  );
}