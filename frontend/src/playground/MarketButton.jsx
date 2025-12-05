

export function MarketButton({ onClick }) {
  return (
    <button id="market-button" onClick={(e) => onClick()} ><img src="/public/svg/market.svg"/></button>
  );
}