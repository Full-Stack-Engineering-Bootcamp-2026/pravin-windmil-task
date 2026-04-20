import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <h1 className=' text-2xl font-semibold bg-teal-300 rounded-2xl text-white shadow'>Hello World!</h1>
     </>
  )
}

export default App
