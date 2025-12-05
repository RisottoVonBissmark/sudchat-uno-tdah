import { Playground } from './playground/Playground.jsx'

const tempHand = [
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
  { type: "normal" },
];

const tempPlayerList = [
  {
    name: "Anaelle",
    id: crypto.randomUUID(),
    cardsCount: 5
  },
  {
    name: "Anaelle 2",
    id: crypto.randomUUID(),
    cardsCount: 10
  },
  {
    name: "Anaelle 3",
    id: crypto.randomUUID(),
    cardsCount: 15
  }
];

function App() {
  return (
    <Playground hand={tempHand} opponents={tempPlayerList} />
  )
}

export default App;
