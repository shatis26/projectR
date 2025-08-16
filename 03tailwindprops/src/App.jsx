import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let Arr =  [1,2,3,2,4,4];

  return (
    <>
      <h1 className='text-xl bg-purple-500 rounded-md'
      >Vite with Tailwind</h1>
      <Card username="Shatis" post = 'Software Engineer'/>
      <Card username="Shatis" post = {Arr}/>
      <Card />
      <Card username="Naira" post='FD'/>
    </>
  )
}

export default App
