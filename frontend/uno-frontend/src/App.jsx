import { useState } from 'react'
import WaitingRoom from './pages/WaitingRoom/WaitingRoom'
import './App.css'

function App() {
  const [players, setPlayers] = useState(["Miku", "Teto", "Neru"])

  const handleRemovePlayer = (indexToRemove) => {
    setPlayers(prevPlayers => 
      prevPlayers.filter((_, index) => index !== indexToRemove)
    )
  }

  return (
    <>
      <WaitingRoom 
        players={players} 
        onRemovePlayer={handleRemovePlayer} 
      />
    </>
  )
}

export default App