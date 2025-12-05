import { useState } from 'react'
import WaitingRoom from './pages/WaitingRoom/WaitingRoom'
import './App.css'
import LoginPage from './Login'
import { useNavigate } from "react-router-dom"

function App() {
  const [players, setPlayers] = useState(["Miku", "Teto", "Neru"])

  const handleRemovePlayer = (indexToRemove) => {
    setPlayers(prevPlayers => 
      prevPlayers.filter((_, index) => index !== indexToRemove)
    )
  }

  return (
<<<<<<< HEAD
    <>
      <WaitingRoom 
        players={players} 
        onRemovePlayer={handleRemovePlayer} 
      />
    </>
=======
    <div className='flex flex-col min-h-screen '>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/waitingRoom" element={<WaitingRoom />} />
      </Routes>
    </div>
>>>>>>> 45c7e85d81c432350adbee03c2cd43df7b588a8f
  )
}

export default App