import { useState } from 'react'
import './App.css'
import Routeur from './Routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routeur />
  )
}

export default App
