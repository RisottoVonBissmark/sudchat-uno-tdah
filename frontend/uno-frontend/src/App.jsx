import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './Login'
import { useNavigate } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col min-h-screen '>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/waitingRoom" element={<WaitingRoom />} />
      </Routes>
    </div>
  )
}

export default App
