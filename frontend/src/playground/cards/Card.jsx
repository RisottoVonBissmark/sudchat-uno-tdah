export function Card({ type }) {
  return (
    <div className="card">
      <img src={`cards/${type}.svg`} />
    </div>
  );
}