import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import User from './User'
import './App.css'


function App() {
  const [counter, setCounter] = useState(0)

  return (
    <>
     <h1>Counter Val:{counter}</h1>
	 <User  />
	 <button onClick={()=>setCounter(counter+1)}>Increase Counter value</button>
    </>
  )
}

export default App
